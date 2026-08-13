#!/usr/bin/env python3
import json, re, sys
from pathlib import Path
p=Path(__file__).resolve().parents[1]/"public/data/courses.json"; d=json.loads(p.read_text())
c=d["courses"]; actual=[x for x in c if x["meetings"]]; unavailable=[x for x in c if not x["meetings"]]
assert len({x["code"] for x in actual})==14, "Expected 14 actually offered unique courses"
assert len(actual)==17, "Expected 17 offered course-term combinations"
assert len(c)==18 and [x["code"] for x in unavailable]==["MS6712"]
crns=[m["crn"] for x in actual for m in x["meetings"]]
assert len(crns)==len(set((x["term"],m["crn"]) for x in actual for m in x["meetings"]))
for x in actual:
 assert x["term"] in "ABS" and x["category"] in {"programme_core","stream_core","stream_elective"}
 for m in x["meetings"]:
  assert re.fullmatch(r"\d{5}",m["crn"]) and m["section"] and m["day"] in "MTWRFSU"
  assert m["startTime"] < m["endTime"] and m["startDate"] and m["instructor"]
raw=p.read_text().lower(); assert not any(s in raw for s in ["cookie", "session token", "jsessionid", "student id"])
print(f"PASS: 14 offered courses, 17 course-term combinations, {len(crns)} CRNs; MS6712 unavailable")
