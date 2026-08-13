#!/usr/bin/env python3
import json, re, sys
from pathlib import Path
p=Path(__file__).resolve().parents[1]/"public/data/courses.json"; d=json.loads(p.read_text())
c=d["courses"]; actual=[x for x in c if x["meetings"]]; unavailable=[x for x in c if not x["meetings"]]
assert len({x["code"] for x in actual})==14, "Expected 14 actually offered unique courses"
assert len(actual)==17, "Expected 17 offered course-term combinations"
assert len(c)==18 and [x["code"] for x in unavailable]==["MS6712"]
crns={(x["term"],m["crn"]) for x in actual for m in x["meetings"]}
meetings=[m for x in actual for m in x["meetings"]]
assert len(crns)==127, "Expected 127 distinct term/CRN combinations"
eligible_crns={(x["term"],m["crn"]) for x in actual for m in x["meetings"] if m["eligibleForProgramme"]}
assert len(eligible_crns)==41, "Expected 41 MSCBDA3-eligible term/CRN combinations"
for x in actual:
 assert x["term"] in "ABS" and x["category"] in {"programme_core","stream_core","stream_elective"}
 for m in x["meetings"]:
  assert re.fullmatch(r"\d{5}",m["crn"]) and m["section"] and m["day"] in "MTWRFSU"
  assert m["startTime"] < m["endTime"] and m["startDate"] and m["instructor"]
  assert m["eligibleForProgramme"] == bool(re.search(r"\bMSCBDA3\b",m["registrationRestrictions"],re.I))
def section(code, term, crn):
 return [m for x in actual if x["code"]==code and x["term"]==term for m in x["meetings"] if m["crn"]==crn]
ms5217_c04=section("MS5217","A","15211")
assert len(ms5217_c04)==2 and any(m["building"]=="ICP" and m["room"]=="UG-101" and m["day"]=="T" for m in ms5217_c04)
ms5218_c61=section("MS5218","A","11594")
assert len(ms5218_c61)==2 and any(m["building"]=="ICP" and m["room"]=="G-101" and m["day"]=="T" for m in ms5218_c61)
raw=p.read_text().lower(); assert not any(s in raw for s in ["cookie", "session token", "jsessionid", "student id"])
print(f"PASS: 14 offered courses, 17 course-term combinations, {len(crns)} CRNs, {len(eligible_crns)} MSCBDA3-eligible CRNs, {len(meetings)} meeting times; multi-meeting Sections preserved; MS6712 unavailable")
