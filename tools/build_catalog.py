from pathlib import Path
import json
r=Path(__file__).resolve().parents[1]
data=json.loads((r/"cases.json").read_text())
(r/"case-studies.js").write_text("/* Generated from cases.json */\nwindow.caseStudiesData = "+json.dumps(data,ensure_ascii=False,indent=2)+";\n")
