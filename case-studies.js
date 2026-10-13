/* Generated from cases.json */
window.caseStudiesData = {
  "retail": {
    "en": {
      "context": [
        "En este proyecto académico en equipo, se buscó asignar espacio comercial por segmento considerando rentabilidad y demanda proyectada.",
        "In this team academic project, we explored retail space allocation by segment using profitability and projected demand."
      ],
      "method": [
        "Group historical sales patterns using Dynamic Time Warping (DTW).",
        "Evaluate five forecasting models for each cluster; Random Forest appears among the most used in the poster.",
        "Derive a forecast index for individual segments, then optimize space subject to minimum and maximum limits using Python/Gurobi.",
        "Compare baseline, optimization-only and forecast-informed modeled scenarios."
      ],
      "result": "We compared scenarios of 94, 122.5 and 135.8 million. Moving from the baseline to the forecast-informed scenario represents a modeled increase of 44.5%.",
      "role": "I worked with a team on a solution connecting demand, forecasts and space allocation.",
      "caveat": "Space allocation needs to combine expected demand and operational constraints; a modeled scenario helps compare decisions.",
      "images": [
        "retail-scenarios.png",
        "retail-method.png"
      ],
      "title": "Retail Space Optimization & Forecasting",
      "dataset": "",
      "lesson": "",
      "cover": "covers/retail.svg"
    },
    "es": {
      "context": [
        "En este proyecto académico en equipo, se buscó asignar espacio comercial por segmento considerando rentabilidad y demanda proyectada.",
        "In this team academic project, we explored retail space allocation by segment using profitability and projected demand."
      ],
      "method": [
        "Agrupar patrones de ventas históricas con Dynamic Time Warping (DTW).",
        "Evaluar cinco modelos de pronóstico por clúster; Random Forest figura entre los más utilizados.",
        "Calcular un índice de pronóstico por segmento y optimizar espacio con límites mínimos y máximos mediante Python/Gurobi.",
        "Comparar escenarios modelados base, optimización y optimización con pronóstico."
      ],
      "result": "Se compararon escenarios de 94, 122.5 y 135.8 millones. El paso de la base al escenario con pronóstico representa un aumento modelado de 44.5%.",
      "role": "Trabajé en equipo en una solución que conecta demanda, pronósticos y asignación de espacio.",
      "caveat": "La asignación de espacio debe combinar demanda esperada y restricciones operativas; un escenario modelado ayuda a comparar decisiones.",
      "images": [
        "retail-scenarios.png",
        "retail-method.png"
      ],
      "title": "Optimización de espacio comercial y pronósticos",
      "dataset": "",
      "lesson": "",
      "cover": "covers/retail.svg"
    },
    "metadata": {
      "source": "Proyecto Coppel.pdf",
      "evidence": "academic-report",
      "publication": "Original source files excluded; brand/claim permissions pending",
      "tools": [
        "Python",
        "Gurobi",
        "Forecasting",
        "Clustering"
      ]
    }
  },
  "bikeshare": {
    "en": {
      "context": "Redistribute shared bicycles among stations while accounting for station imbalance, truck fleet size and vehicle capacity.",
      "method": [
        "Compare nearest-neighbor/cycle routing with a convex-hull insertion heuristic.",
        "Evaluate fleets of 3, 5 and 7 trucks and truck capacities of 20 vs 10 bicycles.",
        "Account for additional trips when capacity limits are reached.",
        "Contrast total distance, travel time and fleet requirements; identify practical shortcomings of Euclidean distances."
      ],
      "result": "Nearest-neighbor scenarios report 3 trucks: 14.89 km / 45.5 min; 5 trucks: 15.09 km / 60 min; 7 trucks: 13.16 km / 71 min. This illustrates the distance-versus-time trade-off.",
      "role": "I independently analyzed rebalancing and routing scenarios.",
      "caveat": "A shorter route does not necessarily finish sooner. Capacity, fleet size and service times also matter.",
      "images": [
        "bikeshare-tradeoff.png",
        "bikeshare-technical.svg"
      ],
      "title": "Bike-Sharing Rebalancing Routes",
      "dataset": "",
      "lesson": "",
      "cover": "covers/bikeshare.svg"
    },
    "es": {
      "context": "Redistribuir bicicletas entre estaciones con déficit y superávit, considerando flota y capacidad de camiones.",
      "method": [
        "Comparar rutas por vecino más cercano/ciclos contra inserción por convex hull.",
        "Evaluar 3, 5 y 7 camiones, con capacidad de 20 y 10 bicicletas.",
        "Reajustar viajes cuando las cargas superan la capacidad.",
        "Comparar distancia, tiempo y número de vehículos; identificar límites de distancias euclidianas."
      ],
      "result": "Escenarios de vecino más cercano: 3 camiones 14.89 km / 45.5 min; 5 camiones 15.09 km / 60 min; 7 camiones 13.16 km / 71 min. Se observa un intercambio entre tiempo y distancia.",
      "role": "Realicé el análisis individual de escenarios de rebalanceo y ruteo.",
      "caveat": "Una ruta más corta no necesariamente termina antes. También importan capacidad, flota y tiempos de servicio.",
      "images": [
        "bikeshare-tradeoff.png",
        "bikeshare-technical.svg"
      ],
      "title": "Optimización de rutas para redistribución de bicicletas",
      "dataset": "",
      "lesson": "",
      "cover": "covers/bikeshare.svg"
    },
    "metadata": {
      "source": "A01641407_Etapa 3_MiBici (1).pdf",
      "evidence": "academic-report",
      "publication": "Original source files excluded; brand/claim permissions pending",
      "tools": [
        "Heuristics",
        "Routing",
        "Optimization"
      ]
    }
  },
  "lean": {
    "en": {
      "context": "Analyze waste, travel and bottlenecks in a garment cutting process, then propose improvements using Lean engineering.",
      "method": [
        "Map process using SIPOC, Value Stream Mapping (VSM), spaghetti diagram and time studies.",
        "Identify bottlenecks, redesign layout and rebalance tasks against takt time.",
        "Use Pareto, Ishikawa, PDCA, performance metrics and dashboards for monitoring.",
        "Evaluate before-and-proposed operating conditions."
      ],
      "result": "The layout proposal reduced modeled travel from 216.8 to 166 m, approximately 23%. The layout scenario estimated a change from 25 to 28 cuts; other proposals were evaluated separately.",
      "role": "I developed the spaghetti diagram and collaborated on the diagnosis and layout proposal.",
      "caveat": "Visualizing travel makes unnecessary movement easier to identify and concrete layout changes easier to discuss.",
      "images": [
        "media/lean-layout-1.png",
        "media/lean-layout-2.png",
        "lean-layout.png",
        "flex-method.png",
        "lean-technical.svg"
      ],
      "title": "Lean Layout & Cutting Process Improvement",
      "dataset": "",
      "lesson": "",
      "cover": "covers/lean.svg",
      "captions": {
        "media/lean-layout-1.png": "Diagrama del proyecto: distribución y recorridos · Vista general",
        "media/lean-layout-2.png": "Diagrama del proyecto: distribución y recorridos · Detalle"
      }
    },
    "es": {
      "context": "Analizar desperdicios, recorridos y cuellos de botella en corte textil para proponer mejoras Lean.",
      "method": [
        "Mapear el proceso con SIPOC, VSM, diagrama spaghetti y estudios de tiempos.",
        "Identificar cuellos de botella, rediseñar layout y balancear cargas contra takt time.",
        "Aplicar Pareto, Ishikawa, PDCA, indicadores y dashboards.",
        "Comparar condiciones actuales y propuestas."
      ],
      "result": "La propuesta de layout redujo el recorrido de 216.8 a 166 m, aproximadamente 23%. El escenario de layout estimó un cambio de 25 a 28 cortes; se evaluaron otras propuestas por separado.",
      "role": "Realicé el diagrama spaghetti y colaboré en el diagnóstico y la propuesta de distribución.",
      "caveat": "Visualizar recorridos facilita detectar movimientos innecesarios y discutir cambios concretos de distribución.",
      "images": [
        "media/lean-layout-1.png",
        "media/lean-layout-2.png",
        "lean-layout.png",
        "flex-method.png",
        "lean-technical.svg"
      ],
      "title": "Mejora Lean de layout y proceso de corte",
      "dataset": "",
      "lesson": "",
      "cover": "covers/lean.svg",
      "captions": {
        "media/lean-layout-1.png": "Project layout and travel diagram · Overview",
        "media/lean-layout-2.png": "Project layout and travel diagram · Detail"
      }
    },
    "metadata": {
      "source": "Proyecto Scapinno.pdf",
      "evidence": "academic-report",
      "publication": "Original source files excluded; brand/claim permissions pending",
      "tools": [
        "Lean",
        "VSM",
        "KPI",
        "Layout"
      ]
    }
  },
  "downtime": {
    "en": {
      "context": "Understand downtime patterns in an industrial plastics/material-delivery environment and prioritize actionable root causes.",
      "method": [
        "Document process with SIPOC, PDCA, FMEA and Ishikawa diagrams.",
        "Explore downtime distribution using histograms, boxplots and normality checks.",
        "Use Kruskal–Wallis and pairwise Mann–Whitney tests to compare groups.",
        "Prioritize equipment and causes using Pareto and control charts."
      ],
      "result": "We analyzed differences across four groups with Kruskal–Wallis and Mann–Whitney comparisons using a Bonferroni adjustment (α=0.00833). Silicones were prioritized based on stoppage frequency and accumulated downtime.",
      "role": "I participated in the diagnosis and statistical analysis as part of the project team.",
      "caveat": "Frequency and accumulated downtime help prioritize; statistical comparisons add context to decisions.",
      "images": [
        "flex-method.png",
        "downtime-technical.svg"
      ],
      "title": "Manufacturing Downtime Root-Cause Analysis",
      "dataset": "",
      "lesson": "",
      "cover": "covers/downtime.svg"
    },
    "es": {
      "context": "Comprender patrones de tiempo muerto en un entorno industrial de plásticos y suministro de materiales.",
      "method": [
        "Documentar con SIPOC, PDCA, AMEF e Ishikawa.",
        "Explorar tiempos muertos con histogramas, boxplots y pruebas de distribución.",
        "Comparar grupos con Kruskal–Wallis y pruebas Mann–Whitney.",
        "Priorizar equipos y causas con Pareto y gráficas de control."
      ],
      "result": "Se analizaron diferencias entre cuatro grupos mediante Kruskal–Wallis y comparaciones Mann–Whitney con ajuste Bonferroni (α=0.00833). Se priorizaron silicones por su frecuencia de paros y tiempo muerto acumulado.",
      "role": "Participé en el diagnóstico y análisis estadístico como parte del equipo del proyecto.",
      "caveat": "La frecuencia y el tiempo acumulado ayudan a priorizar; la comparación estadística aporta contexto para decidir.",
      "images": [
        "flex-method.png",
        "downtime-technical.svg"
      ],
      "title": "Análisis de causas raíz de tiempos muertos",
      "dataset": "",
      "lesson": "",
      "cover": "covers/downtime.svg"
    },
    "metadata": {
      "source": "Reporte Flex.docx",
      "evidence": "academic-report",
      "publication": "Original source files excluded; brand/claim permissions pending",
      "tools": [
        "Statistics",
        "Lean",
        "Root cause"
      ]
    }
  },
  "gurobi": {
    "en": {
      "context": "Sequence eight jobs on two machines while managing processing times, setup times and operational constraints.",
      "method": [
        "Build a mixed-integer model in Python with gurobipy.",
        "Use binary assignment/sequence variables and completion-time variables.",
        "Minimize the makespan, enforce balanced assignment of four jobs per machine and non-overlap.",
        "Apply extra constraints preventing certain adjacent or initial jobs."
      ],
      "result": "We formulated an eight-job, two-machine model with setup times, sequence constraints and makespan minimization.",
      "role": "I participated in modeling sequences and constraints in a team academic assignment.",
      "caveat": "Constraints turn the problem’s conditions into a consistent work plan.",
      "images": [
        "gurobi-method.png",
        "gurobi-technical.svg"
      ],
      "title": "Combinatorial Optimization with Gurobi",
      "dataset": "",
      "lesson": "",
      "cover": "covers/gurobi.svg"
    },
    "es": {
      "context": "Secuenciar ocho tareas en dos máquinas con tiempos de proceso, setup y restricciones operativas.",
      "method": [
        "Formular modelo entero mixto en Python con gurobipy.",
        "Definir variables binarias de secuencia y tiempos de terminación.",
        "Minimizar makespan, balancear cuatro tareas por máquina y evitar traslapes.",
        "Respetar restricciones de adyacencia y tareas que no pueden iniciar."
      ],
      "result": "Se formuló un modelo de ocho tareas y dos máquinas, con tiempos de preparación, restricciones de secuencia y minimización del tiempo de terminación.",
      "role": "Participé en el modelado de secuencias y restricciones como parte de una actividad académica en equipo.",
      "caveat": "Las restricciones convierten las condiciones del problema en un plan de trabajo consistente.",
      "images": [
        "gurobi-method.png",
        "gurobi-technical.svg"
      ],
      "title": "Optimización combinatoria con Gurobi",
      "dataset": "",
      "lesson": "",
      "cover": "covers/gurobi.svg"
    },
    "metadata": {
      "source": "Proyecto Optimizacion python.pdf",
      "evidence": "academic-report",
      "publication": "Original source files excluded; brand/claim permissions pending",
      "tools": [
        "Python",
        "Gurobi",
        "MILP"
      ]
    }
  },
  "investment": {
    "en": {
      "context": "Evaluate an industrial bakery investment with production capacity, demand, costs and time-value-of-money methods.",
      "method": [
        "Estimate sales, variable costs and plant capacity from market/technical assumptions.",
        "Build pre-tax cash flows, depreciation and tax scenarios.",
        "Evaluate decision criteria including minimum acceptable return and IRR.",
        "Test sensitivity to key assumptions."
      ],
      "result": "We evaluated demand of 4,000 units per day and capacity of 5,000 within an academic investment case.",
      "role": "I participated with my team in the investment evaluation and analysis of its assumptions.",
      "caveat": "The decision depends on assumptions: demand, capacity, costs and discount rate need to be analyzed together.",
      "images": [
        "investment-capacity.png",
        "bi-method.png",
        "investment-technical.svg"
      ],
      "title": "Industrial Investment Evaluation",
      "dataset": "",
      "lesson": "",
      "cover": "covers/investment.svg"
    },
    "es": {
      "context": "Evaluar inversión en panadería industrial mediante demanda, capacidad, costos y valor del dinero en el tiempo.",
      "method": [
        "Estimar ventas, costos variables y capacidad con supuestos técnicos y comerciales.",
        "Modelar flujos antes de impuestos, depreciación y escenarios fiscales.",
        "Evaluar tasa mínima aceptable y TIR.",
        "Analizar sensibilidad de supuestos."
      ],
      "result": "Se evaluó una demanda de 4,000 unidades diarias y una capacidad de 5,000 dentro de un caso académico de inversión.",
      "role": "Participé en la evaluación de inversión y el análisis de sus supuestos con mi equipo.",
      "caveat": "La decisión depende de los supuestos: demanda, capacidad, costos y tasa de descuento deben analizarse juntos.",
      "images": [
        "investment-capacity.png",
        "bi-method.png",
        "investment-technical.svg"
      ],
      "title": "Evaluación de inversión industrial",
      "dataset": "",
      "lesson": "",
      "cover": "covers/investment.svg"
    },
    "metadata": {
      "source": "Reporte Economia.pdf",
      "evidence": "academic-report",
      "publication": "Original source files excluded; brand/claim permissions pending",
      "tools": [
        "Excel",
        "Finance",
        "Scenarios"
      ]
    }
  },
  "quality": {
    "en": {
      "context": "Validate one master record against many required detail records without multiplying rows.",
      "method": [
        "Define one row per service/order before joining detail data.",
        "Aggregate exact attribute presence with conditional max or grouped logic.",
        "Flag missing attributes and missing source values separately.",
        "Test duplicate detail rows and key uniqueness."
      ],
      "result": "The fictional-data example produces one output per order and flags missing required details without multiplying master records.",
      "role": "I translate requirements into analytical controls and validate that results preserve the correct grain.",
      "caveat": "Aggregating before validation avoids duplicated records and makes each exception explainable.",
      "images": [
        "quality-cardinality.png",
        "bi-method.png"
      ],
      "title": "Data Quality Rules Engine",
      "dataset": "",
      "lesson": "",
      "dashboard_demo": true,
      "cover": "covers/quality.svg"
    },
    "es": {
      "context": "Validar un registro maestro frente a múltiples detalles obligatorios sin multiplicar filas.",
      "method": [
        "Definir una fila por servicio/orden antes de unir detalles.",
        "Agregar presencia exacta de atributos con lógica condicional.",
        "Distinguir faltantes de atributos y campos nulos.",
        "Probar duplicados y unicidad de llaves."
      ],
      "result": "El ejemplo con datos ficticios genera una salida por orden y señala los detalles obligatorios faltantes, sin multiplicar los registros maestros.",
      "role": "Traduzco requerimientos en controles analíticos y valido que los resultados mantengan la granularidad correcta.",
      "caveat": "Agregar antes de validar evita duplicar registros y permite explicar cada excepción.",
      "images": [
        "quality-cardinality.png",
        "bi-method.png"
      ],
      "title": "Motor de reglas de calidad de datos",
      "dataset": "",
      "lesson": "",
      "dashboard_demo": true,
      "cover": "covers/quality.svg"
    },
    "metadata": {
      "source": "CV / generic professional problem reconstruction",
      "evidence": "synthetic-demo-tested",
      "publication": "Original source files excluded; brand/claim permissions pending",
      "tools": [
        "Python",
        "SQL",
        "Qlik",
        "Testing"
      ],
      "professional_scope": {
        "multinational_clients": ">10",
        "dataset_records": ">5000000",
        "control_points": ">45",
        "source": "Owner confirmation, 13 October 2026",
        "scope": "Career experience, not results of the synthetic demo"
      }
    }
  },
  "compatibility": {
    "en": {
      "context": "Validate whether pairs of attributes belong to an allowed or disallowed combination list.",
      "method": [
        "Normalize case and whitespace.",
        "Use an explicit synthetic rule matrix.",
        "Classify missing inputs before compatibility checks.",
        "Test nulls, unexpected values and pair-order assumptions."
      ],
      "result": "The example distinguishes valid, invalid and unknown combinations, as well as missing inputs.",
      "role": "I design validations that consider complete combinations, missing values and reference catalogs.",
      "caveat": "An unknown combination needs an explicit outcome; it should not pass by default.",
      "images": [
        "bi-method.png",
        "compatibility-technical.svg"
      ],
      "title": "Attribute Compatibility Validator",
      "dataset": "",
      "lesson": "",
      "dashboard_demo": true,
      "cover": "covers/compatibility.svg"
    },
    "es": {
      "context": "Validar pares de atributos frente a un catálogo permitido o prohibido.",
      "method": [
        "Normalizar mayúsculas y espacios.",
        "Usar matriz de reglas ficticia.",
        "Clasificar faltantes antes de comparar pares.",
        "Probar nulos, valores inesperados y orden de atributos."
      ],
      "result": "El ejemplo distingue combinaciones válidas, inválidas, desconocidas y entradas faltantes.",
      "role": "Diseño validaciones que consideran combinaciones completas, valores faltantes y catálogos de referencia.",
      "caveat": "Una combinación desconocida necesita una salida explícita; no debe aprobarse por defecto.",
      "images": [
        "bi-method.png",
        "compatibility-technical.svg"
      ],
      "title": "Validador de compatibilidad de atributos",
      "dataset": "",
      "lesson": "",
      "dashboard_demo": true,
      "cover": "covers/compatibility.svg"
    },
    "metadata": {
      "source": "CV / generic professional problem reconstruction",
      "evidence": "synthetic-demo-tested",
      "publication": "Original source files excluded; brand/claim permissions pending",
      "tools": [
        "SQL",
        "Qlik",
        "Data quality"
      ]
    }
  },
  "transit": {
    "en": {
      "context": "Transform and classify 50,000 orders against 50 transit-time matrices containing different combinations. The key challenge is translating matrix conditions into consistent analytical classifications.",
      "method": [
        "Create priority-ordered rules with fictional geographic labels.",
        "Evaluate interval boundaries and fallback behavior.",
        "Test missing mileage and conflicting rules.",
        "Return a single explainable result per order."
      ],
      "result": "We transformed 50,000 orders and classified them against 50 matrices with different combinations. The visuals illustrate the working approach.",
      "role": "I participated in the team’s order transformation and classification work.",
      "caveat": "Structuring the matrices makes combinations consistently applicable to a large order volume.",
      "images": [
        "transit-scope.svg",
        "transit-matrix.svg"
      ],
      "title": "Transit-Time Decision Rules",
      "dataset": "",
      "lesson": "",
      "cover": "covers/transit.svg"
    },
    "es": {
      "context": "Transformar y clasificar 50,000 órdenes según 50 matrices de transit times con diferentes combinaciones. El reto es traducir las condiciones de las matrices a clasificaciones analíticas consistentes.",
      "method": [
        "Crear reglas ordenadas con geografía ficticia.",
        "Evaluar límites de rangos y reglas por defecto.",
        "Probar distancias faltantes y reglas en conflicto.",
        "Regresar un resultado explicable por orden."
      ],
      "result": "Se transformaron 50,000 órdenes y se clasificaron según 50 matrices con diferentes combinaciones. Las visuales ilustran la lógica de trabajo.",
      "role": "Participé en la transformación y clasificación de órdenes realizada en equipo.",
      "caveat": "Estructurar las matrices permite aplicar combinaciones de forma consistente a un gran volumen de órdenes.",
      "images": [
        "transit-scope.svg",
        "transit-matrix.svg"
      ],
      "title": "Reglas de decisión para tiempos de tránsito",
      "dataset": "",
      "lesson": "",
      "cover": "covers/transit.svg"
    },
    "metadata": {
      "source": "CV / generic professional problem reconstruction",
      "evidence": "planned-reconstruction",
      "publication": "Original source files excluded; brand/claim permissions pending",
      "tools": [
        "Qlik",
        "SQL",
        "Rule engine"
      ],
      "professional_scope": {
        "orders": 50000,
        "matrices": 50,
        "source": "Owner confirmation, 13 October 2026",
        "period": "Not specified"
      }
    }
  },
  "finance": {
    "en": {
      "context": "Avoid financial double-counting when merging data sources with one-to-many relationships.",
      "method": [
        "Define the grain of each financial and operational table.",
        "Aggregate charges before joining master entities.",
        "Audit cardinality and check before/after row counts.",
        "Report explainable missing amounts and reconciliation differences."
      ],
      "result": "In the sample dashboard, revenue and costs are aggregated per shipment to calculate margins and identify exceptions using fictional data.",
      "role": "I work on operational and financial data controls and exception monitoring.",
      "caveat": "Model grain matters as much as the formula: an incorrect join can distort revenue and costs.",
      "images": [
        "bi-method.png"
      ],
      "title": "Financial Exceptions & KPI Monitoring",
      "dataset": "",
      "lesson": "",
      "dashboard_demo": true,
      "cover": "covers/finance.svg"
    },
    "es": {
      "context": "Evitar doble conteo financiero al unir tablas con relaciones uno-a-muchos.",
      "method": [
        "Definir granularidad de cada tabla.",
        "Agregar cargos antes de unir entidades maestras.",
        "Auditar cardinalidad y filas antes/después.",
        "Mostrar importes faltantes y diferencias conciliadas."
      ],
      "result": "En el dashboard de ejemplo, los ingresos y costos se agregan por envío para calcular márgenes e identificar excepciones con datos ficticios.",
      "role": "Trabajo en controles de información operativa y financiera y en seguimiento de excepciones.",
      "caveat": "La granularidad del modelo importa tanto como la fórmula: un join incorrecto puede distorsionar ingresos y costos.",
      "images": [
        "bi-method.png"
      ],
      "title": "Monitoreo de excepciones financieras y KPIs",
      "dataset": "",
      "lesson": "",
      "dashboard_demo": true,
      "cover": "covers/finance.svg"
    },
    "metadata": {
      "source": "CV / generic professional problem reconstruction",
      "evidence": "planned-reconstruction",
      "publication": "Original source files excluded; brand/claim permissions pending",
      "tools": [
        "SQL",
        "BI",
        "KPI",
        "Finance"
      ]
    }
  },
  "automation": {
    "en": {
      "context": "Automate routine monitoring and reporting so exceptions can be tracked rather than lost in manual handoffs.",
      "method": [
        "Define event triggers and source extracts.",
        "Create a quality-control step and a structured event log.",
        "Route alerts and status changes through an automated workflow.",
        "Connect summarized outcomes to operational KPIs."
      ],
      "result": "The sample dashboard shows execution logs, successful runs and time saved using fictional events.",
      "role": "I develop automations and analytical monitoring to make processes visible.",
      "caveat": "An automation needs execution and exception traceability to sustain monitoring.",
      "images": [
        "rpa-method.png"
      ],
      "title": "Automated Alerts & Reporting Workflow",
      "dataset": "",
      "lesson": "",
      "dashboard_demo": true,
      "cover": "covers/automation.svg"
    },
    "es": {
      "context": "Automatizar monitoreo y reportes para mantener trazabilidad de excepciones.",
      "method": [
        "Definir disparadores y extracción de fuentes.",
        "Incorporar validaciones y bitácora de eventos.",
        "Canalizar alertas y estados mediante flujo automatizado.",
        "Relacionar resultados con KPIs operativos."
      ],
      "result": "El dashboard de ejemplo muestra bitácoras, ejecuciones exitosas y tiempo ahorrado con eventos ficticios.",
      "role": "Desarrollo automatizaciones y seguimiento analítico para dar visibilidad a los procesos.",
      "caveat": "Una automatización necesita trazabilidad de ejecuciones y excepciones para sostener el seguimiento.",
      "images": [
        "rpa-method.png"
      ],
      "title": "Flujo automatizado de alertas y reportes",
      "dataset": "",
      "lesson": "",
      "dashboard_demo": true,
      "cover": "covers/automation.svg"
    },
    "metadata": {
      "source": "CV / generic professional problem reconstruction",
      "evidence": "planned-reconstruction",
      "publication": "Original source files excluded; brand/claim permissions pending",
      "tools": [
        "Power Automate",
        "RPA",
        "KPI"
      ]
    }
  },
  "rpa-savings": {
    "en": {
      "context": "Reduce recurring manual effort in operational reporting through robotic process automation (RPA).",
      "method": [
        "Identify repeatable, rule-based tasks and manual handoffs.",
        "Automate routine extraction/processing and standardize exception handling.",
        "Measure estimated annualized efficiency benefits.",
        "Document controls, ownership and monitoring for operational continuity."
      ],
      "result": "The RPA initiatives generated reported aggregate annual savings of €13,452.",
      "role": "I participated in RPA initiatives to reduce recurring manual work.",
      "caveat": "Automating repetitive tasks frees time; measuring frequency and time per execution helps evaluate the benefit.",
      "images": [
        "rpa-method.png"
      ],
      "title": "RPA Efficiency & Annual Savings",
      "dataset": "",
      "lesson": "",
      "cover": "covers/rpa-savings.svg"
    },
    "es": {
      "context": "Reducir esfuerzo manual recurrente mediante automatización robótica de procesos (RPA).",
      "method": [
        "Identificar tareas repetitivas y traspasos manuales.",
        "Automatizar procesamiento rutinario y estandarizar excepciones.",
        "Cuantificar beneficios anualizados estimados.",
        "Documentar controles, responsables y monitoreo."
      ],
      "result": "Las iniciativas RPA generaron un ahorro anual agregado reportado de €13,452.",
      "role": "Participé en iniciativas de automatización RPA para reducir trabajo manual recurrente.",
      "caveat": "Automatizar tareas repetitivas libera tiempo; medir frecuencia y tiempo por ejecución ayuda a evaluar el beneficio.",
      "images": [
        "rpa-method.png"
      ],
      "title": "Automatización RPA y ahorros anuales",
      "dataset": "",
      "lesson": "",
      "cover": "covers/rpa-savings.svg"
    },
    "metadata": {
      "source": "CV / generic professional problem reconstruction",
      "evidence": "planned-reconstruction",
      "publication": "Original source files excluded; brand/claim permissions pending",
      "tools": [
        "RPA",
        "Automation",
        "Process improvement"
      ]
    }
  }
};
