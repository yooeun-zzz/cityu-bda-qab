# Data schema

`public/data/courses.json` contains one record per course–term combination. `term` is `A`, `B`, `S`, or `U` (unavailable). Each offered record has a `meetings` array containing every scheduled meeting time. A CRN/Section may therefore appear more than once when AIMS lists multiple weekly meetings; `meetingIndex` distinguishes those rows. Selection, capacity and credits are counted once per CRN, while every meeting time participates in timetable rendering and conflict detection. Zero-credit components remain separate CRNs. `eligibleForProgramme` is true when the saved AIMS row has no `only for Programme:` restriction (open to all programmes) or when that restriction includes `MSCBDA3`. `eligibilityReason` records `open`, `mscbda3`, or `restricted_other`. Dates use the source `DD/MM/YYYY` format and times use `HH:MM`.

Only normalized academic fields are published. Navigation, cookies, sessions, request parameters, saved-page resources, and user information are excluded.
