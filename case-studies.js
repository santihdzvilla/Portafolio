/* Generated from cases.json */
window.caseStudiesData = {
  "retail": {
    "en": {
      "context": "Retail floor space is limited. The academic team sought to assign area to product segments based on expected profitability and projected demand, rather than relying on a fixed allocation.",
      "method": [
        "Group historical sales patterns using Dynamic Time Warping (DTW).",
        "Evaluate five forecasting models for each cluster; Random Forest appears among the most used in the poster.",
        "Derive a forecast index for individual segments, then optimize space subject to minimum and maximum limits using Python/Gurobi.",
        "Compare baseline, optimization-only and forecast-informed modeled scenarios."
      ],
      "result": "The academic poster displays scenario values of 94M, 122.5M and 135.8M and labels the opportunity as +51%. These are model outputs, not verified realized revenue. The displayed values imply a 44.5% increase from 94 to 135.8; the poster’s +51% headline cannot be reconciled with those values and requires clarification.",
      "role": "Team project; the uploaded poster does not isolate each member’s contribution.",
      "caveat": "No public underlying dataset, training notebook or reproducible solver model was provided.",
      "images": [
        "retail-scenarios.png",
        "retail-method.png"
      ],
      "title": "Retail Space Optimization & Forecasting",
      "dataset": "Source report summaries; original raw data are not included.",
      "lesson": "Separate the modeled outcome from measured impact; specify assumptions and validate the unit of analysis."
    },
    "es": {
      "context": "El espacio comercial es limitado. El equipo buscó asignar superficie por segmento considerando rentabilidad esperada y demanda proyectada.",
      "method": [
        "Agrupar patrones de ventas históricas con Dynamic Time Warping (DTW).",
        "Evaluar cinco modelos de pronóstico por clúster; Random Forest figura entre los más utilizados.",
        "Calcular un índice de pronóstico por segmento y optimizar espacio con límites mínimos y máximos mediante Python/Gurobi.",
        "Comparar escenarios modelados base, optimización y optimización con pronóstico."
      ],
      "result": "El póster académico muestra 94M, 122.5M y 135.8M y señala una oportunidad de +51%. Son escenarios modelados, no ingresos realizados verificados. Los valores mostrados implican un aumento de 44.5% de 94 a 135.8; el titular de +51% del póster no coincide con esos valores y requiere aclaración.",
      "role": "Proyecto en equipo; el póster no delimita la contribución individual de cada integrante.",
      "caveat": "No se adjuntaron datos públicos ni un modelo reproducible del solver.",
      "images": [
        "retail-scenarios.png",
        "retail-method.png"
      ],
      "title": "Optimización de espacio comercial y pronósticos",
      "dataset": "Resúmenes del reporte; no se incluyen datos originales.",
      "lesson": "Separar escenarios modelados de impactos medidos; declarar supuestos y validar la unidad de análisis."
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
      "role": "Academic report signed individually; the document does not establish real-world deployment.",
      "caveat": "The report itself notes Euclidean distances do not reflect actual road networks, traffic or vehicle access.",
      "images": [
        "bikeshare-tradeoff.png",
        "bikeshare-technical.svg"
      ],
      "title": "Bike-Sharing Rebalancing Routes",
      "dataset": "Source report summaries; original raw data are not included.",
      "lesson": "Separate the modeled outcome from measured impact; specify assumptions and validate the unit of analysis."
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
      "role": "Reporte académico individual; no hay evidencia de despliegue real.",
      "caveat": "El propio documento advierte que las distancias euclidianas no consideran calles, tráfico o acceso de vehículos.",
      "images": [
        "bikeshare-tradeoff.png",
        "bikeshare-technical.svg"
      ],
      "title": "Optimización de rutas para redistribución de bicicletas",
      "dataset": "Resúmenes del reporte; no se incluyen datos originales.",
      "lesson": "Separar escenarios modelados de impactos medidos; declarar supuestos y validar la unidad de análisis."
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
      "result": "Academic report lists operator/product travel reduction from 216.8 m to 166 m (about 23%). Its proposed layout table estimates 25 to 28 cuts (+12%); a later combined-improvement scenario reports 36 to 63 cuts. These are distinct modeled/proposed results, not interchangeable verified production gains.",
      "role": "Team report credits Santiago with the spaghetti diagram in its Kaizen action table. Other team contributions are shared.",
      "caveat": "Avoid presenting proposed capacity improvements as independently audited realized savings.",
      "images": [
        "lean-layout.png",
        "flex-method.png",
        "lean-technical.svg"
      ],
      "title": "Lean Layout & Cutting Process Improvement",
      "dataset": "Source report summaries; original raw data are not included.",
      "lesson": "Separate the modeled outcome from measured impact; specify assumptions and validate the unit of analysis."
    },
    "es": {
      "context": "Analizar desperdicios, recorridos y cuellos de botella en corte textil para proponer mejoras Lean.",
      "method": [
        "Mapear el proceso con SIPOC, VSM, diagrama spaghetti y estudios de tiempos.",
        "Identificar cuellos de botella, rediseñar layout y balancear cargas contra takt time.",
        "Aplicar Pareto, Ishikawa, PDCA, indicadores y dashboards.",
        "Comparar condiciones actuales y propuestas."
      ],
      "result": "El reporte académico registra una reducción propuesta de 216.8 m a 166 m (≈23%). La tabla de layout estima 25 a 28 cortes (+12%); un escenario posterior de mejoras combinadas reporta 36 a 63 cortes. Son escenarios distintos y no deben confundirse con beneficios operativos auditados.",
      "role": "La tabla Kaizen del trabajo atribuye a Santiago el diagrama spaghetti; el resto fue colaborativo.",
      "caveat": "No presentar incrementos propuestos como ahorros realizados y auditados.",
      "images": [
        "lean-layout.png",
        "flex-method.png",
        "lean-technical.svg"
      ],
      "title": "Mejora Lean de layout y proceso de corte",
      "dataset": "Resúmenes del reporte; no se incluyen datos originales.",
      "lesson": "Separar escenarios modelados de impactos medidos; declarar supuestos y validar la unidad de análisis."
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
      "result": "The report describes nonnormal downtime samples, Kruskal–Wallis evidence of group differences, and six Mann–Whitney comparisons with Bonferroni α=0.00833. Silicones were prioritized based on accumulated downtime and frequency. Failure to detect a difference is not proof of equality; no verified reduction after implementation is documented.",
      "role": "Team academic project; do not attribute every figure or test to one member.",
      "caveat": "Public case should use reconstructed plots or permitted anonymized aggregate results.",
      "images": [
        "flex-method.png",
        "downtime-technical.svg"
      ],
      "title": "Manufacturing Downtime Root-Cause Analysis",
      "dataset": "Source report summaries; original raw data are not included.",
      "lesson": "Separate the modeled outcome from measured impact; specify assumptions and validate the unit of analysis."
    },
    "es": {
      "context": "Comprender patrones de tiempo muerto en un entorno industrial de plásticos y suministro de materiales.",
      "method": [
        "Documentar con SIPOC, PDCA, AMEF e Ishikawa.",
        "Explorar tiempos muertos con histogramas, boxplots y pruebas de distribución.",
        "Comparar grupos con Kruskal–Wallis y pruebas Mann–Whitney.",
        "Priorizar equipos y causas con Pareto y gráficas de control."
      ],
      "result": "El reporte describe muestras no normales, diferencias entre grupos con Kruskal–Wallis y seis comparaciones Mann–Whitney con Bonferroni α=0.00833. Se priorizaron silicones por tiempo muerto acumulado y frecuencia. No detectar una diferencia no prueba igualdad; no se documenta una reducción verificada tras implementar mejoras.",
      "role": "Proyecto académico en equipo; no atribuir todas las pruebas a una sola persona.",
      "caveat": "Usar gráficas reconstruidas o agregados autorizados para publicar.",
      "images": [
        "flex-method.png",
        "downtime-technical.svg"
      ],
      "title": "Análisis de causas raíz de tiempos muertos",
      "dataset": "Resúmenes del reporte; no se incluyen datos originales.",
      "lesson": "Separar escenarios modelados de impactos medidos; declarar supuestos y validar la unidad de análisis."
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
      "result": "The uploaded report contains model code and constraints, but no sufficiently documented, reproducible optimal objective value to publish.",
      "role": "Group academic assignment; source includes code but does not separate individual contributions.",
      "caveat": "A reproducible public repository should rebuild the model with fictional task data and solver licensing notes.",
      "images": [
        "gurobi-method.png",
        "gurobi-technical.svg"
      ],
      "title": "Combinatorial Optimization with Gurobi",
      "dataset": "Source report summaries; original raw data are not included.",
      "lesson": "Separate the modeled outcome from measured impact; specify assumptions and validate the unit of analysis."
    },
    "es": {
      "context": "Secuenciar ocho tareas en dos máquinas con tiempos de proceso, setup y restricciones operativas.",
      "method": [
        "Formular modelo entero mixto en Python con gurobipy.",
        "Definir variables binarias de secuencia y tiempos de terminación.",
        "Minimizar makespan, balancear cuatro tareas por máquina y evitar traslapes.",
        "Respetar restricciones de adyacencia y tareas que no pueden iniciar."
      ],
      "result": "El documento contiene código y restricciones, pero no aporta un valor óptimo final suficientemente documentado y reproducible para publicarlo.",
      "role": "Actividad académica grupal; el código no identifica contribuciones individuales.",
      "caveat": "El repositorio público debe reconstruirse con datos ficticios y explicar licencia del solver.",
      "images": [
        "gurobi-method.png",
        "gurobi-technical.svg"
      ],
      "title": "Optimización combinatoria con Gurobi",
      "dataset": "Resúmenes del reporte; no se incluyen datos originales.",
      "lesson": "Separar escenarios modelados de impactos medidos; declarar supuestos y validar la unidad de análisis."
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
      "result": "The academic report includes a modeled demand of 4,000 units/day and capacity of 5,000 units/day. These are assumptions in a fictionalized investment evaluation, not a real operating business.",
      "role": "Group academic financial evaluation.",
      "caveat": "Do not extrapolate financial feasibility without checking model assumptions and formulas.",
      "images": [
        "investment-capacity.png",
        "bi-method.png",
        "investment-technical.svg"
      ],
      "title": "Industrial Investment Evaluation",
      "dataset": "Source report summaries; original raw data are not included.",
      "lesson": "Separate the modeled outcome from measured impact; specify assumptions and validate the unit of analysis."
    },
    "es": {
      "context": "Evaluar inversión en panadería industrial mediante demanda, capacidad, costos y valor del dinero en el tiempo.",
      "method": [
        "Estimar ventas, costos variables y capacidad con supuestos técnicos y comerciales.",
        "Modelar flujos antes de impuestos, depreciación y escenarios fiscales.",
        "Evaluar tasa mínima aceptable y TIR.",
        "Analizar sensibilidad de supuestos."
      ],
      "result": "El reporte usa demanda modelada de 4,000 unidades/día y capacidad de 5,000 unidades/día. Son supuestos académicos, no operación real comprobada.",
      "role": "Evaluación financiera académica grupal.",
      "caveat": "No extrapolar viabilidad sin verificar supuestos y fórmulas.",
      "images": [
        "investment-capacity.png",
        "bi-method.png",
        "investment-technical.svg"
      ],
      "title": "Evaluación de inversión industrial",
      "dataset": "Resúmenes del reporte; no se incluyen datos originales.",
      "lesson": "Separar escenarios modelados de impactos medidos; declarar supuestos y validar la unidad de análisis."
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
      "result": "The downloadable starter already contains a standalone Python demonstration and tests with synthetic CSV data. This is not released employer code.",
      "role": "Professional skill reconstructed as a privacy-safe independent demonstration.",
      "caveat": "Rules, IDs, amounts and source tables in any public repository must be entirely fictional.",
      "images": [
        "quality-cardinality.png",
        "bi-method.png"
      ],
      "implementation": "demo-data-quality",
      "title": "Data Quality Rules Engine",
      "dataset": "Fictional CSV records are included with the demo.",
      "lesson": "Make missing inputs and unknown rules explicit; verify record grain before aggregating results."
    },
    "es": {
      "context": "Validar un registro maestro frente a múltiples detalles obligatorios sin multiplicar filas.",
      "method": [
        "Definir una fila por servicio/orden antes de unir detalles.",
        "Agregar presencia exacta de atributos con lógica condicional.",
        "Distinguir faltantes de atributos y campos nulos.",
        "Probar duplicados y unicidad de llaves."
      ],
      "result": "El paquete incluye una demostración Python independiente con CSV ficticios y pruebas; no es código liberado del empleador.",
      "role": "Habilidad profesional reconstruida como demostración pública segura.",
      "caveat": "Reglas, identificadores, importes y tablas públicas deben ser inventados.",
      "images": [
        "quality-cardinality.png",
        "bi-method.png"
      ],
      "implementation": "demo-data-quality",
      "title": "Motor de reglas de calidad de datos",
      "dataset": "La demo incluye registros CSV ficticios.",
      "lesson": "Explicitar entradas faltantes y reglas desconocidas; verificar granularidad antes de agregar resultados."
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
      "result": "Included demo normalizes text and distinguishes OK, Invalid, Missing and Unknown against a fictional reference catalog; unknown values are not silently accepted.",
      "role": "Privacy-safe professional case reconstruction.",
      "caveat": "Runnable Python reconstruction using fictional data and rules; does not reproduce an employer system.",
      "images": [
        "bi-method.png",
        "compatibility-technical.svg"
      ],
      "implementation": "demo-compatibility",
      "title": "Attribute Compatibility Validator",
      "dataset": "Fictional CSV records are included with the demo.",
      "lesson": "Make missing inputs and unknown rules explicit; verify record grain before aggregating results."
    },
    "es": {
      "context": "Validar pares de atributos frente a un catálogo permitido o prohibido.",
      "method": [
        "Normalizar mayúsculas y espacios.",
        "Usar matriz de reglas ficticia.",
        "Clasificar faltantes antes de comparar pares.",
        "Probar nulos, valores inesperados y orden de atributos."
      ],
      "result": "La demo incluida normaliza texto y distingue OK, Invalid, Missing y Unknown contra un catálogo ficticio; no acepta silenciosamente valores desconocidos.",
      "role": "Reconstrucción segura de experiencia profesional.",
      "caveat": "Reconstrucción ejecutable en Python con datos y reglas ficticios; no reproduce un sistema del empleador.",
      "images": [
        "bi-method.png",
        "compatibility-technical.svg"
      ],
      "implementation": "demo-compatibility",
      "title": "Validador de compatibilidad de atributos",
      "dataset": "La demo incluye registros CSV ficticios.",
      "lesson": "Explicitar entradas faltantes y reglas desconocidas; verificar granularidad antes de agregar resultados."
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
      "context": "Assign target transit times consistently across transport modes, distance bands and exception routes.",
      "method": [
        "Create priority-ordered rules with fictional geographic labels.",
        "Evaluate interval boundaries and fallback behavior.",
        "Test missing mileage and conflicting rules.",
        "Return a single explainable result per order."
      ],
      "result": "Proposed public demonstration, not a production release.",
      "role": "Professional rule-design pattern reconstructed with synthetic data.",
      "caveat": "Avoid real client SLA commitments, routes and distance thresholds.",
      "images": [
        "bi-method.png"
      ],
      "title": "Transit-Time Decision Rules",
      "dataset": "No public dataset or executable implementation yet.",
      "lesson": "Make missing inputs and unknown rules explicit; verify record grain before aggregating results."
    },
    "es": {
      "context": "Asignar tiempos objetivo de tránsito por modo, rangos de distancia y excepciones.",
      "method": [
        "Crear reglas ordenadas con geografía ficticia.",
        "Evaluar límites de rangos y reglas por defecto.",
        "Probar distancias faltantes y reglas en conflicto.",
        "Regresar un resultado explicable por orden."
      ],
      "result": "Demostración pública propuesta, no versión de producción.",
      "role": "Patrón profesional reconstruido con datos sintéticos.",
      "caveat": "No revelar SLA, rutas o umbrales reales de clientes.",
      "images": [
        "bi-method.png"
      ],
      "title": "Reglas de decisión para tiempos de tránsito",
      "dataset": "Sin dataset público ni implementación ejecutable todavía.",
      "lesson": "Explicitar entradas faltantes y reglas desconocidas; verificar granularidad antes de agregar resultados."
    },
    "metadata": {
      "source": "CV / generic professional problem reconstruction",
      "evidence": "planned-reconstruction",
      "publication": "Original source files excluded; brand/claim permissions pending",
      "tools": [
        "Qlik",
        "SQL",
        "Rule engine"
      ]
    }
  },
  "weight": {
    "en": {
      "context": "Reconcile a declared weight with the sum of component weights while handling binary precision and missing records.",
      "method": [
        "Aggregate detail weight to the master record grain.",
        "Round nonnegative weights using floor(value + 0.5).",
        "Compare rounded integers and expose the difference.",
        "Separate missing master, missing detail and mismatch states."
      ],
      "result": "Included demo aggregates detail weights before decimal half-up rounding. Tests cover .49/.50/.51, repeated units, missing values and invalid weights. Synthetic output is available as CSV.",
      "role": "Professional validation pattern with synthetic numerical examples.",
      "caveat": "Runnable Python reconstruction using fictional data and rules; does not reproduce an employer system.",
      "images": [
        "weight-rounding.png",
        "bi-method.png"
      ],
      "implementation": "demo-weight-reconciliation",
      "title": "Weight Reconciliation & Rounding",
      "dataset": "Fictional CSV records are included with the demo.",
      "lesson": "Make missing inputs and unknown rules explicit; verify record grain before aggregating results."
    },
    "es": {
      "context": "Conciliar peso declarado con suma de componentes manejando precisión y registros faltantes.",
      "method": [
        "Agregar pesos de detalle a la granularidad del maestro.",
        "Redondear pesos no negativos con floor(valor + 0.5).",
        "Comparar enteros y calcular diferencia.",
        "Distinguir peso faltante, detalle faltante y discrepancia."
      ],
      "result": "La demo incluida agrega pesos de detalle antes del redondeo decimal half-up. Las pruebas cubren .49/.50/.51, unidades repetidas, faltantes y pesos inválidos. Incluye salida CSV ficticia.",
      "role": "Patrón profesional con ejemplos numéricos ficticios.",
      "caveat": "Reconstrucción ejecutable en Python con datos y reglas ficticios; no reproduce un sistema del empleador.",
      "images": [
        "weight-rounding.png",
        "bi-method.png"
      ],
      "implementation": "demo-weight-reconciliation",
      "title": "Conciliación de pesos y redondeo",
      "dataset": "La demo incluye registros CSV ficticios.",
      "lesson": "Explicitar entradas faltantes y reglas desconocidas; verificar granularidad antes de agregar resultados."
    },
    "metadata": {
      "source": "CV / generic professional problem reconstruction",
      "evidence": "synthetic-demo-tested",
      "publication": "Original source files excluded; brand/claim permissions pending",
      "tools": [
        "Python",
        "Qlik",
        "Validation"
      ]
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
      "result": "Conceptual public case; no disclosed actual financial savings.",
      "role": "Privacy-safe reconstruction of BI financial controls.",
      "caveat": "Do not publish company financial data, pricing or client-specific tariff rules.",
      "images": [
        "bi-method.png"
      ],
      "title": "Financial Exceptions & KPI Monitoring",
      "dataset": "No public dataset or executable implementation yet.",
      "lesson": "Make missing inputs and unknown rules explicit; verify record grain before aggregating results."
    },
    "es": {
      "context": "Evitar doble conteo financiero al unir tablas con relaciones uno-a-muchos.",
      "method": [
        "Definir granularidad de cada tabla.",
        "Agregar cargos antes de unir entidades maestras.",
        "Auditar cardinalidad y filas antes/después.",
        "Mostrar importes faltantes y diferencias conciliadas."
      ],
      "result": "Caso público conceptual; no se revelan ahorros financieros reales.",
      "role": "Reconstrucción segura de controles financieros BI.",
      "caveat": "No publicar datos financieros, tarifas o reglas internas.",
      "images": [
        "bi-method.png"
      ],
      "title": "Monitoreo de excepciones financieras y KPIs",
      "dataset": "Sin dataset público ni implementación ejecutable todavía.",
      "lesson": "Explicitar entradas faltantes y reglas desconocidas; verificar granularidad antes de agregar resultados."
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
      "result": "The CV documents Power Automate experience. No independently verified public implementation screenshots are included.",
      "role": "Professional experience described in CV; illustration is an independent reconstruction.",
      "caveat": "Do not publish tenant names, real flows, credentials or company dashboards.",
      "images": [
        "rpa-method.png"
      ],
      "title": "Automated Alerts & Reporting Workflow",
      "dataset": "No public dataset or executable implementation yet.",
      "lesson": "Make missing inputs and unknown rules explicit; verify record grain before aggregating results."
    },
    "es": {
      "context": "Automatizar monitoreo y reportes para mantener trazabilidad de excepciones.",
      "method": [
        "Definir disparadores y extracción de fuentes.",
        "Incorporar validaciones y bitácora de eventos.",
        "Canalizar alertas y estados mediante flujo automatizado.",
        "Relacionar resultados con KPIs operativos."
      ],
      "result": "El CV documenta experiencia con Power Automate. No se incluyen capturas públicas verificadas de implementación.",
      "role": "Experiencia profesional declarada; imagen reconstruida de manera independiente.",
      "caveat": "No publicar tenants, flujos internos, credenciales ni dashboards corporativos.",
      "images": [
        "rpa-method.png"
      ],
      "title": "Flujo automatizado de alertas y reportes",
      "dataset": "Sin dataset público ni implementación ejecutable todavía.",
      "lesson": "Explicitar entradas faltantes y reglas desconocidas; verificar granularidad antes de agregar resultados."
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
      "result": "€13,452 reported total annual savings across RPA initiatives, per CV and owner clarification. No initiative-level allocation or independently audited calculation is available.",
      "role": "Professional experience stated in the CV; individual implementation details require confirmation.",
      "caveat": "Do not imply multiple independently verified RPA projects or disclose confidential workflows.",
      "images": [
        "rpa-method.png"
      ],
      "title": "RPA Efficiency & Annual Savings",
      "dataset": "No public dataset or executable implementation yet.",
      "lesson": "Make missing inputs and unknown rules explicit; verify record grain before aggregating results."
    },
    "es": {
      "context": "Reducir esfuerzo manual recurrente mediante automatización robótica de procesos (RPA).",
      "method": [
        "Identificar tareas repetitivas y traspasos manuales.",
        "Automatizar procesamiento rutinario y estandarizar excepciones.",
        "Cuantificar beneficios anualizados estimados.",
        "Documentar controles, responsables y monitoreo."
      ],
      "result": "€13,452 de ahorro anual total reportado entre las iniciativas RPA, según CV y aclaración del titular. No existe desglose por iniciativa ni cálculo auditado disponible.",
      "role": "Experiencia profesional declarada; detalles de implementación individual pendientes de confirmar.",
      "caveat": "No insinuar múltiples proyectos auditados ni revelar flujos internos.",
      "images": [
        "rpa-method.png"
      ],
      "title": "Automatización RPA y ahorros anuales",
      "dataset": "Sin dataset público ni implementación ejecutable todavía.",
      "lesson": "Explicitar entradas faltantes y reglas desconocidas; verificar granularidad antes de agregar resultados."
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
