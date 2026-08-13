#!/usr/bin/env python3
"""Parse locally saved AIMS course-detail HTML into public, normalized JSON."""
from __future__ import annotations

import argparse, html, json, re
from datetime import datetime
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DEFAULTS = {
    "A": Path("/Users/zzz/Desktop/QAB-sem A"),
    "B": Path("/Users/zzz/Desktop/QAB-sem B"),
    "S": Path("/Users/zzz/Desktop/QAB-sem S"),
}
FILES = {
    "A": ["IS5413.html", "IS6335.html", "MS5215.html", "MS5216.html", "MS5217.html", "MS5218.html", "MS6211.html", "EF5560.html"],
    "B": ["IS5413.html", "MS5318.html", "MS6211.html", "MS6219.html", "MS6221.html", "MS6601.html", "MS6711.html", "EF5560.html"],
    "S": ["MS5223.htm"],
}
CATEGORIES = {
    "IS5413": "programme_core", "IS6335": "programme_core", "MS5217": "programme_core", "MS6711": "programme_core",
    "MS5218": "stream_core",
    "MS5215": "stream_elective", "MS5216": "stream_elective", "MS5223": "stream_elective", "MS5318": "stream_elective",
    "MS6211": "stream_elective", "MS6219": "stream_elective", "MS6221": "stream_elective", "MS6601": "stream_elective",
    "MS6712": "stream_elective", "EF5560": "stream_elective",
}
PREREQS = {"MS6711": ["MS5217"], "MS5223": ["MS5313", "MS5216"], "MS6219": ["MS5218"], "MS6221": ["MS5218"], "MS6601": ["MS5218"], "MS6712": ["MS5217", "MS5218"]}
TERM_NAMES = {"A": "Semester A", "B": "Semester B", "S": "Summer Term"}
HEADERS = ["crn", "section", "credits", "campus", "web", "level", "available", "capacity", "waitlistAvailable", "date", "day", "time", "building", "room", "instructor", "medium"]

class Tables(HTMLParser):
    def __init__(self):
        super().__init__(); self.depth = 0; self.row = None; self.cell = None; self.rows = []
    def handle_starttag(self, tag, attrs):
        if tag == "table": self.depth += 1
        elif self.depth and tag == "tr": self.row = []
        elif self.row is not None and tag in ("td", "th"): self.cell = ""
    def handle_data(self, data):
        if self.cell is not None: self.cell += data
    def handle_endtag(self, tag):
        if tag in ("td", "th") and self.cell is not None:
            self.row.append(" ".join(html.unescape(self.cell).split())); self.cell = None
        elif tag == "tr" and self.row is not None:
            if self.row: self.rows.append(self.row)
            self.row = None
        elif tag == "table": self.depth -= 1

def text_after(label: str, source: str) -> str:
    match = re.search(rf"<b>{re.escape(label)}.*?</b>\s*(.*?)(?:<br>|</div>)", source, re.I | re.S)
    return " ".join(re.sub(r"<[^>]+>", " ", html.unescape(match.group(1) if match else "")).split())

def parse_file(path: Path, term: str):
    source = path.read_text(encoding="utf-8", errors="ignore")
    title_match = re.search(r"<b>Course\s*:\s*([A-Z]{2}\d{4})\s+(.+?)</b>", source, re.I | re.S)
    if not title_match: raise ValueError(f"Course heading not found: {path}")
    code = title_match.group(1).upper(); title = " ".join(re.sub(r"<[^>]+>", " ", html.unescape(title_match.group(2))).split())
    parser = Tables(); parser.feed(source)
    meetings, last = [], None
    restrictions = {}
    for row in parser.rows:
        if len(row) == 16 and row[0].strip().isdigit():
            record = dict(zip(HEADERS, row)); last = record["crn"]
            record["available"] = int(re.sub(r"\D", "", record["available"]) or 0)
            record["capacity"] = int(re.sub(r"\D", "", record["capacity"]) or 0)
            record["credits"] = float(record["credits"] or 0)
            if " - " in record["date"]: record["startDate"], record["endDate"] = record.pop("date").split(" - ", 1)
            else: record["startDate"] = record["endDate"] = record.pop("date")
            if " - " in record["time"]: record["startTime"], record["endTime"] = record.pop("time").split(" - ", 1)
            else: record["startTime"] = record["endTime"] = record.pop("time")
            meetings.append(record)
        elif last and len(row) >= 2 and "only for" in " ".join(row).lower():
            restrictions[last] = " ".join(row).strip()
    for record in meetings: record["registrationRestrictions"] = restrictions.get(record["crn"], "")
    notes = " ".join(re.findall(r'<div class="cinfo-container">(.*?)</div>', source, re.I | re.S))
    notes = " ".join(re.sub(r"<[^>]+>", " ", html.unescape(notes)).split())
    return {"academicYear": "2026/27", "term": term, "termName": TERM_NAMES[term], "code": code, "title": title,
            "category": CATEGORIES[code], "credits": max((m["credits"] for m in meetings), default=3),
            "prerequisites": PREREQS.get(code, []), "notes": notes, "meetings": meetings}

def main():
    ap = argparse.ArgumentParser(); ap.add_argument("--sem-a", type=Path, default=DEFAULTS["A"]); ap.add_argument("--sem-b", type=Path, default=DEFAULTS["B"]); ap.add_argument("--summer", type=Path, default=DEFAULTS["S"]); ap.add_argument("--out", type=Path, default=ROOT / "public/data/courses.json")
    args = ap.parse_args(); dirs = {"A": args.sem_a, "B": args.sem_b, "S": args.summer}; courses = []
    for term, names in FILES.items():
        for name in names: courses.append(parse_file(dirs[term] / name, term))
    courses.append({"academicYear":"2026/27","term":"U","termName":"未开课","code":"MS6712","title":"Contemporary Topics in Quantitative Analysis for Business","category":"stream_elective","credits":3,"prerequisites":PREREQS["MS6712"],"notes":"属于2026/27 QAB培养方案，但本学年未查到实际开课班次。","meetings":[]})
    payload = {"schemaVersion":1,"snapshotDate":"2026-08-13","source":"Saved CityU AIMS Master Class Schedule pages","courses":courses}
    args.out.parent.mkdir(parents=True, exist_ok=True); args.out.write_text(json.dumps(payload, ensure_ascii=False, indent=2)+"\n", encoding="utf-8")
    print(f"Wrote {len(courses)} course-term records with {sum(len(c['meetings']) for c in courses)} CRNs to {args.out}")
if __name__ == "__main__": main()
