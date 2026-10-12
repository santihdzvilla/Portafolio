window.PORTFOLIO_CASES = {
  "retail": {
    "title": [
      "Retail Floor-Space Optimization & Demand Forecasting",
      "Optimización de piso de venta y pronóstico de demanda"
    ],
    "kind": "academic",
    "overview": [
      "A team capstone combines time-series segmentation, demand forecasting and constrained space allocation.",
      "Proyecto en equipo que integra segmentación temporal, pronóstico y asignación restringida de espacio."
    ],
    "challenge": [
      "Improve projected profitability per square meter without changing the physical store footprint.",
      "Mejorar la rentabilidad proyectada por metro cuadrado sin modificar físicamente la tienda."
    ],
    "methodology": [
      [
        "Cluster historical sales patterns with Dynamic Time Warping (DTW).",
        "Agrupar patrones de ventas históricas mediante Dynamic Time Warping (DTW)."
      ],
      [
        "Compare five forecasting models within each cluster; Random Forest is highlighted among commonly selected approaches.",
        "Comparar cinco modelos de pronóstico por clúster; Random Forest figura entre los métodos más utilizados."
      ],
      [
        "Translate cluster forecasts into segment-level estimates, calculate a forecast index and assign it to each store.",
        "Desagregar pronósticos a nivel segmento, calcular un índice de pronóstico y asignarlo por tienda."
      ],
      [
        "Optimize floor-space allocation using Python and Gurobi, with minimum/maximum space restrictions.",
        "Optimizar la asignación de espacio con Python y Gurobi, sujeto a límites mínimos y máximos."
      ]
    ],
    "findings": [
      [
        "The poster compares 94 M (baseline), 122.5 M (model) and 135.8 M (model + forecast); it labels the modeled improvement +51%.",
        "El póster compara 94 M (base), 122.5 M (modelo) y 135.8 M (modelo + pronóstico); reporta una mejora modelada de +51%."
      ]
    ],
    "limits": [
      "Figures represent academic scenarios, not audited financial results or confirmed live deployment; team contributions are not individually isolated.",
      "Las cifras corresponden a escenarios académicos, no a resultados financieros auditados ni despliegue confirmado; la contribución individual no está separada."
    ],
    "roadmap": [
      [
        "Create synthetic store/category time series and reproducible DTW clustering.",
        "Crear series ficticias por tienda/categoría y clustering DTW reproducible."
      ],
      [
        "Publish backtesting metrics, forecast comparisons and a constrained optimization notebook.",
        "Publicar métricas de backtesting, comparativas de pronósticos y notebook de optimización."
      ]
    ],
    "evidence": "Proyecto Coppel.pdf · 1 page (academic team poster)",
    "tools": [
      "Python",
      "Gurobi",
      "DTW",
      "Clustering",
      "Forecasting",
      "Random Forest"
    ]
  },
  "bikeshare": {
    "title": [
      "Bike-Sharing Rebalancing: Routing Heuristics",
      "Redistribución de bicicletas: heurísticas de rutas"
    ],
    "kind": "academic",
    "overview": [
      "Individual academic report comparing nearest-neighbor routing and convex-hull insertion under different fleet configurations.",
      "Reporte académico individual que compara vecino más cercano y construcción de rutas con casco convexo bajo distintas configuraciones de flota."
    ],
    "challenge": [
      "Rebalance bicycles between stations while managing vehicle capacity, route length and operating time.",
      "Redistribuir bicicletas entre estaciones considerando capacidad de camiones, distancia y tiempo."
    ],
    "methodology": [
      [
        "Estimate station imbalances from bike entry/exit activity and calculate rebalancing needs.",
        "Estimar desequilibrios por entradas/salidas y calcular necesidades de redistribución."
      ],
      [
        "Build nearest-neighbor routes and compare them with convex-hull routes with insertion.",
        "Construir rutas por vecino más cercano y compararlas con rutas basadas en casco convexo e inserción."
      ],
      [
        "Evaluate 3-, 5- and 7-truck cases and discuss 10-/20-bike vehicle-capacity scenarios.",
        "Evaluar escenarios de 3, 5 y 7 camiones y restricciones de capacidad de 10/20 bicicletas."
      ]
    ],
    "findings": [
      [
        "Nearest neighbor: 3 trucks 14.89 km / 45.5 min; 5 trucks 15.09 km / 60 min; 7 trucks 13.16 km / 71 min.",
        "Vecino más cercano: 3 camiones 14.89 km / 45.5 min; 5 camiones 15.09 km / 60 min; 7 camiones 13.16 km / 71 min."
      ],
      [
        "Convex hull: 3 trucks 17.36 km / 45.5 min; 5 trucks 16.73 km / 30 min; 7 trucks 16.55 km / 30 min.",
        "Casco convexo: 3 camiones 17.36 km / 45.5 min; 5 camiones 16.73 km / 30 min; 7 camiones 16.55 km / 30 min."
      ]
    ],
    "limits": [
      "Distances and times are scenario results from the academic report; they are not real-time route estimates. Methods optimize different trade-offs.",
      "Distancias y tiempos corresponden a escenarios del reporte académico, no a estimaciones actuales. Los métodos favorecen objetivos distintos."
    ],
    "roadmap": [
      [
        "Create a synthetic station network with demand and truck-capacity inputs.",
        "Crear red ficticia de estaciones con demanda y capacidad."
      ],
      [
        "Plot each algorithm’s routes and compare distance, time and feasibility by scenario.",
        "Graficar rutas de cada algoritmo y comparar distancia, tiempo y factibilidad."
      ]
    ],
    "evidence": "A01641407_Etapa 3_MiBici (1).pdf · pp. 4–17",
    "tools": [
      "Routing",
      "Nearest Neighbor",
      "Convex Hull",
      "Heuristics",
      "Scenario Analysis"
    ]
  },
  "gurobi": {
    "title": [
      "Two-Machine Sequencing with Mixed-Integer Optimization",
      "Secuenciación de dos máquinas con optimización entera mixta"
    ],
    "kind": "academic",
    "overview": [
      "Team coursework includes Python/Gurobi source code for sequencing eight jobs across two machines.",
      "Trabajo académico en equipo con código Python/Gurobi para secuenciar ocho tareas en dos máquinas."
    ],
    "challenge": [
      "Minimize the maximum completion time while satisfying sequencing and assignment restrictions.",
      "Minimizar el tiempo máximo de finalización cumpliendo restricciones de secuencia y asignación."
    ],
    "methodology": [
      [
        "Create binary predecessor-successor decisions X[i,j,k], completion times C[j], and makespan W.",
        "Crear decisiones binarias de precedencia X[i,j,k], tiempos C[j] y makespan W."
      ],
      [
        "Include sequence-dependent setup costs, four tasks per machine, forbidden adjacency and forbidden first-job rules.",
        "Incorporar setups dependientes de secuencia, cuatro tareas por máquina, adyacencias prohibidas y restricciones de inicio."
      ],
      [
        "Minimize W using gurobipy and inspect machine assignments and job completion times.",
        "Minimizar W con gurobipy e inspeccionar asignaciones y tiempos de finalización."
      ]
    ],
    "findings": [
      [
        "Reported makespan: 517.98 hours (~22 days); the submission lists the order of four tasks on each machine.",
        "Makespan reportado: 517.98 horas (~22 días); la entrega incluye la secuencia de cuatro tareas en cada máquina."
      ]
    ],
    "limits": [
      "The supplied document is a coursework solution; it does not establish production implementation. Original code needs refactoring and verification before publication.",
      "Es una solución académica; no demuestra implementación productiva. El código original requiere refactorización y verificación antes de publicarse."
    ],
    "roadmap": [
      [
        "Rebuild a clean MILP model with fictional jobs, parameters and tests.",
        "Reconstruir un modelo MILP limpio con tareas, parámetros y pruebas ficticias."
      ],
      [
        "Document objective, constraints, solver status and schedule visualizations.",
        "Documentar función objetivo, restricciones, estado del solver y visualizaciones de secuencia."
      ]
    ],
    "evidence": "Proyecto Optimizacion python.pdf · pp. 2–5",
    "tools": [
      "Python",
      "gurobipy",
      "MILP",
      "Scheduling",
      "Makespan"
    ]
  },
  "lean": {
    "title": [
      "Lean Cutting-Room Redesign & Performance Monitoring",
      "Rediseño Lean de corte y monitoreo de desempeño"
    ],
    "kind": "academic",
    "overview": [
      "Industrial engineering team project studies flow, wasted movement, cutting capacity and operational monitoring.",
      "Proyecto de ingeniería en equipo que estudia flujo, recorridos improductivos, capacidad de corte y monitoreo operativo."
    ],
    "challenge": [
      "Address bottlenecks and excess movement in a cutting department, and improve visibility of output and process performance.",
      "Atender cuellos de botella y movimientos excesivos en corte, mejorando la visibilidad del desempeño."
    ],
    "methodology": [
      [
        "Map the current process with SIPOC and Value Stream Mapping (VSM); conduct time studies and classify value/non-value activities.",
        "Mapear el proceso con SIPOC y VSM; realizar estudios de tiempos y clasificar actividades con/sin valor."
      ],
      [
        "Analyze bottlenecks using Pareto and Ishikawa, redesign the layout and balance workloads.",
        "Analizar cuellos de botella con Pareto e Ishikawa, rediseñar layout y balancear cargas."
      ],
      [
        "Design KPI dashboards and follow-up actions using PDCA and Lean controls.",
        "Diseñar dashboards de KPIs y seguimiento con PDCA y controles Lean."
      ]
    ],
    "findings": [
      [
        "The résumé reports operator travel reduced from 216 m to 166 m: 50 m less, approximately 23.1%.",
        "El CV reporta reducción del recorrido de 216 m a 166 m: 50 m menos, aproximadamente 23.1%."
      ],
      [
        "The report contains proposed layout, workload balancing, time-series analysis and dashboard figures.",
        "El reporte incluye layout propuesto, balanceo, análisis de series de tiempo y figuras de dashboard."
      ]
    ],
    "limits": [
      "Treat the 23% as a reported project result, not independently verified sustained plant impact. Some improvements in the report are proposals.",
      "Presentar el 23% como resultado reportado, no como impacto sostenido verificado. Parte de las mejoras son propuestas."
    ],
    "roadmap": [
      [
        "Recreate simplified before/after layouts with invented distances.",
        "Recrear layouts simplificados antes/después con distancias ficticias."
      ],
      [
        "Show a reproducible walking-distance calculation and anonymized dashboard prototype.",
        "Mostrar cálculo reproducible de recorridos y prototipo de dashboard anonimizado."
      ]
    ],
    "evidence": "Proyecto Scapinno.pdf · pp. 10–52; Santiago_Hernandez_Villa_CV_ENG.pdf · p. 1",
    "tools": [
      "Lean",
      "VSM",
      "SIPOC",
      "Time Study",
      "Layout",
      "KPI",
      "Dashboard"
    ]
  },
  "downtime": {
    "title": [
      "Manufacturing Downtime: Statistical Root-Cause Study",
      "Tiempos muertos industriales: estudio estadístico de causas"
    ],
    "kind": "academic",
    "overview": [
      "Team project examines material-delivery disruptions and production downtime with statistical and Lean methods.",
      "Proyecto en equipo que estudia interrupciones en suministro de materiales y paros mediante estadística y Lean."
    ],
    "challenge": [
      "Prioritize drivers of downtime and evaluate whether observed differences between machine groups are statistically meaningful.",
      "Priorizar causas de tiempo muerto y evaluar si existen diferencias estadísticamente significativas entre grupos de máquinas."
    ],
    "methodology": [
      [
        "Use PDCA, SIPOC, Ishikawa, AMEF/FMEA and Pareto to structure process diagnosis.",
        "Usar PDCA, SIPOC, Ishikawa, AMEF y Pareto para estructurar el diagnóstico."
      ],
      [
        "Analyze distributions using histograms, boxplots, normality checks, Kruskal–Wallis and pairwise Mann–Whitney comparisons.",
        "Analizar distribuciones con histogramas, boxplots, pruebas de normalidad, Kruskal–Wallis y comparaciones Mann–Whitney."
      ],
      [
        "Apply time studies and control charts to frame measurement and follow-up.",
        "Aplicar estudios de tiempos y gráficas de control para medición y seguimiento."
      ]
    ],
    "findings": [
      [
        "The report documents statistical figures, machine-level downtime analysis, and prioritization of causes; no single verified savings figure is established.",
        "El reporte documenta gráficas estadísticas, análisis de tiempos muertos por máquina y priorización de causas; no establece un ahorro único verificado."
      ]
    ],
    "limits": [
      "The report is an academic group deliverable. Findings should not be presented as deployed plant-wide savings.",
      "Es una entrega académica grupal. No presentar hallazgos como ahorros implementados a escala de planta."
    ],
    "roadmap": [
      [
        "Publish synthetic machine downtime events with clearly defined units.",
        "Publicar eventos ficticios de paro con unidades definidas."
      ],
      [
        "Build a notebook showing assumptions, nonparametric tests, effect interpretation and control charts.",
        "Crear notebook con supuestos, pruebas no paramétricas, interpretación y gráficas de control."
      ]
    ],
    "evidence": "Reporte Flex.docx · pp. 2–34",
    "tools": [
      "Statistics",
      "Kruskal–Wallis",
      "Mann–Whitney",
      "Pareto",
      "FMEA",
      "Control Charts"
    ]
  },
  "investment": {
    "title": [
      "Industrial Bakery: Capital Investment Feasibility",
      "Panificadora industrial: viabilidad de inversión"
    ],
    "kind": "academic",
    "overview": [
      "Team financial engineering report evaluates a hypothetical industrial bakery using operating assumptions and discounted cash flows.",
      "Reporte académico en equipo que evalúa una panificadora hipotética mediante supuestos operativos y flujos descontados."
    ],
    "challenge": [
      "Assess whether a planned industrial investment meets financial return criteria under projected demand and cost assumptions.",
      "Evaluar si una inversión industrial satisface criterios de rentabilidad bajo supuestos de demanda y costos."
    ],
    "methodology": [
      [
        "Translate projected demand, capacity, unit selling price and variable costs into annual revenue and expenses.",
        "Convertir demanda, capacidad, precio y costos variables en ingresos y egresos anuales."
      ],
      [
        "Estimate before-/after-tax cash flows, depreciation, minimum acceptable rate of return (MARR), IRR and NPV.",
        "Estimar flujos antes/después de impuestos, depreciación, TMAR/MARR, TIR y VPN."
      ],
      [
        "Discuss the influence of assumptions and operational/market risk on the decision.",
        "Discutir cómo supuestos y riesgos operativos/de mercado afectan la decisión."
      ]
    ],
    "findings": [
      [
        "The report assumes 4,000 units/day demand, 5,000 units/day capacity, selling price 8.00 and variable cost 4.50 per unit.",
        "El reporte supone demanda de 4,000 unidades/día, capacidad de 5,000 unidades/día, precio 8.00 y costo variable 4.50 por unidad."
      ],
      [
        "It states after-tax MARR of 9.66% and concludes the hypothetical investment is financially promising.",
        "Reporta MARR después de impuestos de 9.66% y concluye que la inversión hipotética es prometedora."
      ]
    ],
    "limits": [
      "Inputs are classroom assumptions; currency/market context is not independently verified. Do not treat the conclusion as investment advice.",
      "Los datos son supuestos académicos; moneda/mercado no están verificados. No tratar la conclusión como recomendación de inversión."
    ],
    "roadmap": [
      [
        "Build an editable fictional cash-flow workbook or Python model.",
        "Construir modelo editable de flujos ficticios en Excel o Python."
      ],
      [
        "Add NPV/IRR sensitivity to demand, margins and discount rates.",
        "Agregar sensibilidad de VPN/TIR a demanda, margen y tasa de descuento."
      ]
    ],
    "evidence": "Reporte Economia.pdf · pp. 2–7",
    "tools": [
      "Cash Flow",
      "NPV",
      "IRR",
      "MARR",
      "Scenario Analysis"
    ]
  },
  "quality": {
    "title": [
      "Master–Detail Data Quality Rule Engine",
      "Motor de reglas de calidad de datos maestro–detalle"
    ],
    "kind": "professional",
    "overview": [
      "Public synthetic prototype based on professional data-quality problem patterns; a working Python validator and tests are included.",
      "Prototipo público con datos ficticios basado en patrones profesionales; incluye validador Python y pruebas."
    ],
    "challenge": [
      "Evaluate mandatory detail attributes without multiplying master records when one entity has multiple detail rows.",
      "Evaluar atributos obligatorios sin multiplicar registros maestros cuando existen múltiples detalles."
    ],
    "methodology": [
      [
        "Normalize entity identifiers and aggregate detail presence to one row per entity.",
        "Normalizar identificadores y agregar presencia de detalles a una fila por entidad."
      ],
      [
        "Evaluate requirement-by-requirement flags, missing data and consolidated status.",
        "Evaluar flags por requisito, datos faltantes y estado consolidado."
      ],
      [
        "Use synthetic CSV fixtures and automated tests to verify correctness and output cardinality.",
        "Usar CSV ficticios y pruebas automáticas para verificar resultados y cardinalidad."
      ]
    ],
    "findings": [
      [
        "This portfolio starter contains a functioning Python validator and six tests (rerun locally to verify).",
        "Este portafolio contiene un validador Python y seis pruebas (volver a ejecutarlas localmente)."
      ]
    ],
    "limits": [
      "This is an independently recreated public demonstration, not released employer code.",
      "Es una demostración pública reconstruida, no código liberado del empleador."
    ],
    "roadmap": [
      [
        "Add SQL equivalents, data dictionary, tests for duplicates and Qlik pseudocode.",
        "Agregar equivalentes SQL, diccionario de datos, pruebas de duplicados y pseudocódigo Qlik."
      ]
    ],
    "evidence": "Qlik Experience Geodis.pdf · pp. 1–3; demo-data-quality/",
    "tools": [
      "Python",
      "SQL",
      "Qlik Sense",
      "Data Quality",
      "Automated Tests"
    ]
  },
  "compatibility": {
    "title": [
      "Rule-Matrix Compatibility Validator",
      "Validador de compatibilidad con matriz de reglas"
    ],
    "kind": "professional",
    "overview": [
      "Privacy-safe reconstruction concept for detecting invalid combinations across operational attributes.",
      "Concepto de reconstrucción pública para detectar combinaciones inválidas entre atributos operativos."
    ],
    "challenge": [
      "Two values may each be valid independently but invalid when combined.",
      "Dos valores pueden ser válidos por separado e inválidos al combinarse."
    ],
    "methodology": [
      [
        "Standardize text and missing values before evaluating combinations.",
        "Estandarizar texto y valores faltantes antes de evaluar pares."
      ],
      [
        "Use a synthetic table of prohibited pairs; output valid/invalid/missing with traceable reason.",
        "Usar catálogo ficticio de pares prohibidos y producir estado con motivo trazable."
      ],
      [
        "Test boundary cases, nulls, unexpected values and pair-order assumptions.",
        "Probar nulos, valores inesperados y supuestos sobre orden del par."
      ]
    ],
    "findings": [
      [
        "A design pattern is documented; no runnable public implementation is claimed.",
        "El patrón de diseño está documentado; no se afirma que exista una implementación pública ejecutable."
      ]
    ],
    "limits": [
      "Real employer combinations, identifiers and business rules must not be published.",
      "No publicar combinaciones, identificadores ni reglas reales del empleador."
    ],
    "roadmap": [
      [
        "Create a small standalone SQL/Python demo with invented codes and tests.",
        "Crear demo SQL/Python con códigos inventados y pruebas."
      ]
    ],
    "evidence": "Qlik Experience Geodis.pdf · pp. 2–3",
    "tools": [
      "SQL",
      "Qlik",
      "Lookup Tables",
      "Data Validation"
    ]
  },
  "transit": {
    "title": [
      "Configurable Transit-Time Rules Engine",
      "Motor configurable de reglas de tiempos de tránsito"
    ],
    "kind": "professional",
    "overview": [
      "Public reconstruction concept for priority-based decisions involving mode, distance bands and exceptions.",
      "Concepto de reconstrucción pública para decisiones por prioridad, modalidad, rangos y excepciones."
    ],
    "challenge": [
      "Produce consistent, explainable target transit times from overlapping business rules.",
      "Producir tiempos objetivo consistentes y explicables a partir de reglas que pueden solaparse."
    ],
    "methodology": [
      [
        "Define fictional distance bands, transport modes and exceptional routes.",
        "Definir rangos ficticios de distancia, modalidades y rutas excepcionales."
      ],
      [
        "Prioritize specific exceptions over general rules and include fallback status.",
        "Priorizar excepciones sobre reglas generales e incluir estado de respaldo."
      ],
      [
        "Test band endpoints, overlapping rules, missing mileage and uniqueness per entity.",
        "Probar límites de rangos, reglas solapadas, distancia faltante y unicidad."
      ]
    ],
    "findings": [
      [
        "The logic type is supported by the professional portfolio blueprint; the public engine remains planned.",
        "El tipo de lógica está descrito en el compendio profesional; el motor público está pendiente."
      ]
    ],
    "limits": [
      "No real transit thresholds, lanes or customer SLAs are included.",
      "No se incluyen rangos, rutas ni SLAs reales de clientes."
    ],
    "roadmap": [
      [
        "Implement a configuration-driven Python demo with a fictional network.",
        "Implementar demo Python configurable con red ficticia."
      ]
    ],
    "evidence": "Qlik Experience Geodis.pdf · pp. 2–3",
    "tools": [
      "Qlik",
      "Python",
      "Decision Tables",
      "Boundary Tests"
    ]
  },
  "weight": {
    "title": [
      "Weight Reconciliation with Half-Up Rounding",
      "Conciliación de pesos con redondeo hacia arriba en .5"
    ],
    "kind": "professional",
    "overview": [
      "Public validation concept compares a master weight with the sum of detail-unit weights at integer precision.",
      "Concepto de validación que compara peso maestro con suma de unidades a precisión entera."
    ],
    "challenge": [
      "Avoid false discrepancies caused by detail-level duplication and floating-point representations.",
      "Evitar diferencias falsas por duplicación de detalles y precisión de punto flotante."
    ],
    "methodology": [
      [
        "Aggregate detail weights once per entity before joining the master table.",
        "Sumar pesos de detalle una vez por entidad antes de unir la tabla maestra."
      ],
      [
        "For nonnegative weights, use floor(x + 0.5) to round half upward.",
        "Para pesos no negativos, usar floor(x + 0.5) para redondear .5 hacia arriba."
      ],
      [
        "Emit missing/OK/review status and difference of rounded integer totals.",
        "Emitir estados faltante/OK/revisión y diferencia de totales enteros."
      ]
    ],
    "findings": [
      [
        "Example test cases: 37.49 → 37, 37.50 → 38, 37.51 → 38.",
        "Casos de prueba: 37.49 → 37, 37.50 → 38, 37.51 → 38."
      ]
    ],
    "limits": [
      "The formula assumes nonnegative weights. This is a documented design, not a released production dataset.",
      "La fórmula supone pesos no negativos. Es un diseño documentado, no un dataset productivo publicado."
    ],
    "roadmap": [
      [
        "Publish Python/SQL/Qlik equivalents and edge-case tests with invented data.",
        "Publicar equivalentes Python/SQL/Qlik y pruebas con datos ficticios."
      ]
    ],
    "evidence": "Qlik Experience Geodis.pdf · pp. 2–3; reconstructed example",
    "tools": [
      "Qlik",
      "Aggregation",
      "Rounding",
      "Data Quality"
    ]
  },
  "finance": {
    "title": [
      "Financial Exceptions, Grain & KPI Controls",
      "Excepciones financieras, granularidad y KPIs"
    ],
    "kind": "professional",
    "overview": [
      "Synthetic case-study plan for reconciling measures across one-to-many transaction relationships.",
      "Plan de caso ficticio para conciliar métricas entre relaciones transaccionales uno-a-muchos."
    ],
    "challenge": [
      "Mixed-grain joins can inflate financial amounts and create misleading KPI trends.",
      "Los joins con granularidades distintas pueden inflar importes y distorsionar KPIs."
    ],
    "methodology": [
      [
        "Document the grain of each table and aggregate line items before joining.",
        "Documentar granularidad de cada tabla y agregar líneas antes del join."
      ],
      [
        "Build reason-coded exception flags and traceable reconciliation totals.",
        "Construir flags de excepción con motivos y conciliaciones trazables."
      ],
      [
        "Design a dashboard of exceptions, timeliness and completeness.",
        "Diseñar dashboard de excepciones, puntualidad y completitud."
      ]
    ],
    "findings": [
      [
        "The résumé documents financial and operational data-quality controls; no public performance metrics are verified.",
        "El CV documenta controles operativos y financieros; no hay métricas públicas verificadas."
      ]
    ],
    "limits": [
      "All published transactions, rates and rules must be synthetic.",
      "Toda transacción, tarifa y regla publicada debe ser ficticia."
    ],
    "roadmap": [
      [
        "Publish synthetic relational tables, SQL validations and a dashboard mock-up.",
        "Publicar tablas relacionales ficticias, validaciones SQL y mock-up de dashboard."
      ]
    ],
    "evidence": "Santiago_Hernandez_Villa_CV_ENG.pdf · p. 1; Qlik Experience Geodis.pdf",
    "tools": [
      "SQL",
      "Qlik Sense",
      "KPI",
      "Financial Controls"
    ]
  },
  "automation": {
    "title": [
      "Automated KPI Alerts & Exception Follow-Up",
      "Alertas automatizadas de KPIs y seguimiento de excepciones"
    ],
    "kind": "professional",
    "overview": [
      "Professional experience describes Power Automate alert logs and KPI monitoring; public demo is planned.",
      "La experiencia profesional describe bitácoras de alertas con Power Automate y monitoreo de KPIs; la demo pública está pendiente."
    ],
    "challenge": [
      "Manual exception monitoring creates slow handoffs and inconsistent status history.",
      "El seguimiento manual de excepciones genera demoras e historiales inconsistentes."
    ],
    "methodology": [
      [
        "Design an event-driven flow for a fictional exception list.",
        "Diseñar flujo por eventos para una lista ficticia de excepciones."
      ],
      [
        "Capture timestamps, owner, severity, status and escalation history.",
        "Registrar fechas, responsable, severidad, estado e historial de escalamiento."
      ],
      [
        "Summarize resolution rates and pending alerts in a simple KPI dashboard.",
        "Resumir tasas de resolución y pendientes en un dashboard."
      ]
    ],
    "findings": [
      [
        "The résumé reports an RPA improvement with €13,452 annual savings; this figure is a résumé claim, not independently audited in the supplied materials.",
        "El CV reporta una mejora RPA con ahorro anual de €13,452; es una cifra declarada en el CV, no auditada independientemente en los documentos."
      ]
    ],
    "limits": [
      "Do not expose actual employer flows, tenant details, credentials or production screenshots.",
      "No exponer flujos reales, credenciales, detalles de tenant ni capturas productivas."
    ],
    "roadmap": [
      [
        "Create a demo using sample Excel/SharePoint records and screenshots of a test-only flow.",
        "Crear demo con registros ficticios Excel/SharePoint y capturas de flujo de pruebas."
      ]
    ],
    "evidence": "Santiago_Hernandez_Villa_CV_ENG.pdf · p. 1",
    "tools": [
      "Power Automate",
      "SharePoint",
      "RPA",
      "KPI",
      "Workflow Design"
    ]
  }
};
