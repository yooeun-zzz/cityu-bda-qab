# Data schema

`public/data/courses.json` contains one record per course–term combination. `term` is `A`, `B`, `S`, or `U` (unavailable). Each offered record has a `meetings` array; every AIMS CRN/Section remains a separate item, including zero-credit components. Dates use the source `DD/MM/YYYY` format and times use `HH:MM`.

Only normalized academic fields are published. Navigation, cookies, sessions, request parameters, saved-page resources, and user information are excluded.
