# Graph Report - .  (2026-08-10)

## Corpus Check
- Large corpus: 38 files · ~1,024,817 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 179 nodes · 249 edges · 25 communities (22 shown, 3 thin omitted)
- Extraction: 60% EXTRACTED · 39% INFERRED · 1% AMBIGUOUS · INFERRED: 97 edges (avg confidence: 0.79)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Biometric Attendance Kiosk
- Laptop Dashboard & Pricing UI
- Mobile Dashboard & Brand Assets
- Mobile Payroll Dashboard
- HR Portal Self-Service Features
- Control Horario & Liquidación Pages
- Homepage & Company Info Pages
- Product Suite Modules
- Attendance Check-in App
- Integrations & API Connectivity
- Payroll Changes Validation Dashboard
- Leia AI Assistant (Brief Page)
- HR Portal & Login Flow
- Pricing Plans & SMB Page
- Tablet Dashboard Mockup
- Liquidación Product & Argentina Localization
- Overtime Hours & Labor Law Compliance
- Product Architecture Page
- Phone Dashboard Mockup
- Sales Contact & Resources
- Overtime Hours Calculator Page
- Leia AI Chat Conversation
- Team & Company Culture
- Time & Attendance Monitoring
- Leia AI Hero Image

## God Nodes (most connected - your core abstractions)
1. `Control Horario (Página / Módulo)` - 14 edges
2. `Portal Liquidación / Liquidación de sueldos (Página)` - 14 edges
3. `e-Sueldos Homepage (Índice)` - 14 edges
4. `Brief e-Sueldos AI (Página)` - 12 edges
5. `Portal RR.HH. (Página / Módulo)` - 12 edges
6. `Laptop Mockup: e-Sueldos Dashboard (Inicio)` - 10 edges
7. `Planes (Página)` - 8 edges
8. `Hero Image - Control Horario` - 8 edges
9. `Hero RRHH Banner Image` - 8 edges
10. `Hero Suite Image (hero-suite.png)` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Calculadora de Horas Extras (Página)` --semantically_similar_to--> `Control Horario (Página / Módulo)`  [INFERRED] [semantically similar]
  calculadora-horas-extras.html → control-horario-esueldos.html
- `Calculadora de horas extras (herramienta)` --semantically_similar_to--> `Portal Liquidación / Liquidación de sueldos (Página)`  [INFERRED] [semantically similar]
  calculadora-horas-extras.html → e-sueldos-landing-completa.html
- `Comercial (contacto)` --semantically_similar_to--> `Formulario de contacto para demo`  [INFERRED] [semantically similar]
  recursos-esueldos.html → agendar-demo-esueldos.html
- `Leia para colaboradores` --conceptually_related_to--> `Leia (Asistente de IA)`  [INFERRED]
  index-esueldos.html → brief-esueldos.html
- `Leia acompaña cada consulta del equipo` --conceptually_related_to--> `Leia (Asistente de IA)`  [INFERRED]
  producto-esueldos.html → brief-esueldos.html

## Hyperedges (group relationships)
- **Módulos centrales e-Sueldos con promoción cruzada (Liquidación, RR.HH., Control Horario, Leia)** — e_sueldos_landing_completa_page, portal_rrhh_landing_page, control_horario_esueldos_page, brief_esueldos_page [EXTRACTED 0.95]
- **Homepage como hub de navegación del sitio e-Sueldos** — index_esueldos_page, planes_esueldos_page, nosotros_esueldos_page, pymes_esueldos_page, recursos_esueldos_page, agendar_demo_esueldos_page [EXTRACTED 0.95]
- **Flujo de login de portales e-Sueldos** — log_in_index_page, log_in_liquidacion_page, log_in_recursos_humanos_page [INFERRED 0.75]

## Communities (25 total, 3 thin omitted)

### Community 0 - "Biometric Attendance Kiosk"
Cohesion: 0.23
Nodes (14): Control Kiosk Device Screens (Facial Recognition Check-In), Hero Image - Control Horario, Attendance Checklist / Status Dashboard UI, Attendance Kiosk Device (Tablet-on-Stand Hardware), Biometric Attendance Terminal (Kiosk Device), Control Horario (Time & Attendance Tracking), Employee List & Attendance Analytics Panel, Employee ID Record (+6 more)

### Community 1 - "Laptop Dashboard & Pricing UI"
Cohesion: 0.21
Nodes (14): Hero Image - Pricing Plans Page (hero-planes.png), Empleados por tipo de contrato Donut Chart (Indeterminado, Tiempo determinado, Eventual, Pasantía, Otros), Estado de liquidaciones Donut Chart (Pagadas, Pendientes, Rechazadas, Borradores), e-Sueldos Brand (cloud logo), Laptop Mockup: e-Sueldos Dashboard (Inicio), KPI Summary Cards (Empleados activos, Liquidaciones, Total pagado, Ausencias hoy), Próximas tareas List (Confirmar ausencias, Revisar liquidaciones, Aprobar reportes de ausencias), Sidebar Navigation (Inicio, Empleados, Liquidaciones, Recibos de sueldo, Conceptos, Ausencias, Reportes, Contratación) (+6 more)

### Community 2 - "Mobile Dashboard & Brand Assets"
Cohesion: 0.19
Nodes (14): Bottom Navigation Bar (Inicio/Planillas/RRHH/Mas), celular.png - e-Sueldos Mobile App Dashboard Mockup, Control Horario (Time Tracking) Widget, Cumplimiento (Compliance) Metric 97%, Decorative White-on-White Watermark Background Pattern, Empleados (Employees) Feature, e-Sueldos Brand/Product, fondo.png (e-Sueldos Logo) (+6 more)

### Community 3 - "Mobile Payroll Dashboard"
Cohesion: 0.20
Nodes (11): Alertas de Convenio Widget, Aprobaciones and Asistencia Cards, Bottom Navigation Bar (Inicio, Sueldos, RRHH, Mas), Calendario de Pagos Widget, e-Sueldos Brand (cloud logo), celular2.png - e-Sueldos Mobile Dashboard Mockup, Liquidacion Mensual Progress Widget (Marzo 2024), Panel de Control (Dashboard) Screen (+3 more)

### Community 4 - "HR Portal Self-Service Features"
Cohesion: 0.33
Nodes (10): Hero RRHH Banner Image, Digital Signature Approval UI Element, Document Approval UI Element, e-Sueldos Payroll/HR SaaS Brand, Employee Profile Card UI Element, Leave/Attendance Calendar UI Element, Mobile-First HR Self-Service UX, Salary/Payment Confirmation UI Element (+2 more)

### Community 5 - "Control Horario & Liquidación Pages"
Cohesion: 0.24
Nodes (10): Datos listos para liquidar, Integraciones de fichaje, e-Sueldos Kiosk (fichaje), Multi-sede, visibilidad total, Control Horario (Página / Módulo), Novedades y convenios, Portal Liquidación / Liquidación de sueldos (Página), Recibos digitales (+2 more)

### Community 6 - "Homepage & Company Info Pages"
Cohesion: 0.22
Nodes (9): Agenda una Demo (Página), Aumentá la productividad y la colaboración en toda tu organización, e-Sueldos App (fichaje), La app para conectar, Datos para liquidar mejor, Leia para colaboradores, e-Sueldos Homepage (Índice), Estamos revolucionando la industria de la gestión laboral (misión) (+1 more)

### Community 7 - "Product Suite Modules"
Cohesion: 0.39
Nodes (9): Analytics / Reporting Charts Module, Hero Suite Image (hero-suite.png), Calendar / Scheduling Module, Employee Directory / Team Management Module, e-Sueldos Product Suite (multi-module SaaS), HR/Payroll Dashboard UI (laptop screen), Multi-device Presentation (laptop + tablet), Payroll / Salary Profile Module (+1 more)

### Community 8 - "Attendance Check-in App"
Cohesion: 0.46
Nodes (8): Control App Fichada Screenshot, Biometric (Fingerprint) Check-In Authentication, Control de Fichada (Time-Clock Check-In), Geolocation-Based Attendance Validation, Asistencia (Attendance) Module, Calendario (Calendar) Module, Nómina (Payroll) Module, Reportes (Reports) Module

### Community 9 - "Integrations & API Connectivity"
Cohesion: 0.57
Nodes (7): Cloud API Integration, Biometric Fingerprint Time Clock Device, Employee Profile / Record, control-integraciones.png (Biometric Time Clock Integrations Diagram), Payroll Calendar / Payment Schedule, QR Code Check-in, Time / Attendance Tracking

### Community 10 - "Payroll Changes Validation Dashboard"
Cohesion: 0.33
Nodes (7): Novedades Liquidación Dashboard (Validación de novedades), Dashboard Sidebar Navigation Pattern (Novedades, Liquidación, Empleados, Reportes, Auditoría, Configuración), e-Sueldos Payroll/HR SaaS Product, Período de Liquidación (Settlement Period) Concept, Novedades (Payroll Changes) Validation Workflow, Approval Status Badge UI Pattern (Aprobado/Pendiente), Summary Stat Tiles Pattern (Empleados, Horas 50%, Horas 100%, Novedades aprobadas)

### Community 11 - "Leia AI Assistant (Brief Page)"
Cohesion: 0.43
Nodes (7): Diseñado para un acceso seguro, Aprende de cada interacción, Preguntas frecuentes (Leia/Brief), Leia (Asistente de IA), Brief e-Sueldos AI (Página), Obtené respuestas al instante con una simple conversación, Transforma documentos en respuestas confiables

### Community 12 - "HR Portal & Login Flow"
Cohesion: 0.29
Nodes (7): Circuitos de RR.HH., Iniciar Sesión (Página raíz / redirect), Login Portal RR.HH. / Comunidad, Firma digital, Legajo digital, Portal RR.HH. (Página / Módulo), Solicitudes

### Community 13 - "Pricing Plans & SMB Page"
Cohesion: 0.29
Nodes (7): Plan Corporate, Plan Emprendedor, Plan Empresa, Planes (Página), Liquidación simple para crecer, Sueldos y RR.HH. para PyMEs (Página), RR.HH. y asistencia en una misma plataforma

### Community 14 - "Tablet Dashboard Mockup"
Cohesion: 0.43
Nodes (7): Bottom Navigation Bar (Inicio, Planillas, RR.HH., Horarios), Control Horario Widget (42 retrasos hoy), e-Sueldos Logo/Brand, Gestión RR.HH. Widget (Empleado destacado Carmen López), e-Sueldos Dashboard Tablet Mockup, Planilla de Sueldos Widget (97% paid, 15 febrero 2024), Todo en orden Status Banner (payroll operational status)

### Community 15 - "Liquidación Product & Argentina Localization"
Cohesion: 0.60
Nodes (6): Hero Banner - Liquidación (Payroll Settlement), Analytics Dashboard UI Mockup (charts, tables, KPIs), Argentina Market Localization (flag, local branding), Employee List / HR Records Management UI, Liquidación de Sueldos (Payroll Settlement) Product, Mobile Document Approval Workflow (accept/reject)

### Community 16 - "Overtime Hours & Labor Law Compliance"
Cohesion: 0.70
Nodes (5): Overtime Approval Workflow (Solicitud > Revisión > Aprobación > Liquidación), Horas Extra Dashboard Screenshot, Overtime Hours (Horas Extra) Management Feature, Argentine Ley de Contrato de Trabajo Compliance (50%/100% overtime surcharge), Nómina Portal (HR/Payroll navigation shell)

### Community 17 - "Product Architecture Page"
Cohesion: 0.40
Nodes (5): Arquitectura para gestión laboral, Una base conectada para toda la operación, Leia acompaña cada consulta del equipo, Cada módulo suma control al cierre, Suite e-Sueldos / Producto (Página)

### Community 18 - "Phone Dashboard Mockup"
Cohesion: 0.60
Nodes (5): Bottom Navigation Bar (Inicio, Planillas, RR.HH., Horarios), e-Sueldos App Home Dashboard Screen, Telefono - e-Sueldos Mobile App Mockup (iPhone), Planilla de Sueldos Progress Widget (97% paid), Gestion RR.HH. and Control Horario Summary Cards

### Community 19 - "Sales Contact & Resources"
Cohesion: 0.50
Nodes (4): Formulario de contacto para demo, Comercial (contacto), Centro de Recursos / Ayuda (Página), Soporte (contacto)

### Community 20 - "Overtime Hours Calculator Page"
Cohesion: 0.50
Nodes (4): Calculadora de horas extras (herramienta), Datos del trabajador (input calculadora), Calculadora de Horas Extras (Página), Resultado estimado (output calculadora)

### Community 21 - "Leia AI Chat Conversation"
Cohesion: 0.83
Nodes (4): Leia AI Chat Conversation UI, Leia AI Intelligent Assistant, Quick Action Shortcuts (Recibos, Solicitudes, Vacaciones), Vacation Days Query Feature

## Ambiguous Edges - Review These
- `Portal Liquidación / Liquidación de sueldos (Página)` → `Login Portal Liquidación (fragmento incompleto)`  [AMBIGUOUS]
  log-in/liquidacion.html · relation: conceptually_related_to
- `Login Portal RR.HH. / Comunidad` → `Portal RR.HH. (Página / Módulo)`  [AMBIGUOUS]
  log-in/recursos-humanos.html · relation: conceptually_related_to

## Knowledge Gaps
- **50 isolated node(s):** `Aumentá la productividad y la colaboración en toda tu organización`, `Diseñado para un acceso seguro`, `Preguntas frecuentes (Leia/Brief)`, `Datos del trabajador (input calculadora)`, `Resultado estimado (output calculadora)` (+45 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Portal Liquidación / Liquidación de sueldos (Página)` and `Login Portal Liquidación (fragmento incompleto)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Login Portal RR.HH. / Comunidad` and `Portal RR.HH. (Página / Módulo)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `e-Sueldos Homepage (Índice)` connect `Homepage & Company Info Pages` to `Control Horario & Liquidación Pages`, `Leia AI Assistant (Brief Page)`, `HR Portal & Login Flow`, `Pricing Plans & SMB Page`, `Sales Contact & Resources`, `Overtime Hours Calculator Page`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `Portal Liquidación / Liquidación de sueldos (Página)` connect `Control Horario & Liquidación Pages` to `Homepage & Company Info Pages`, `Leia AI Assistant (Brief Page)`, `HR Portal & Login Flow`, `Pricing Plans & SMB Page`, `Product Architecture Page`, `Overtime Hours Calculator Page`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `Brief e-Sueldos AI (Página)` connect `Leia AI Assistant (Brief Page)` to `Pricing Plans & SMB Page`, `HR Portal & Login Flow`, `Control Horario & Liquidación Pages`, `Homepage & Company Info Pages`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `Control Horario (Página / Módulo)` (e.g. with `Calculadora de Horas Extras (Página)` and `Reportes y cierres`) actually correct?**
  _`Control Horario (Página / Módulo)` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 5 inferred relationships involving `Portal Liquidación / Liquidación de sueldos (Página)` (e.g. with `Calculadora de horas extras (herramienta)` and `Datos listos para liquidar`) actually correct?**
  _`Portal Liquidación / Liquidación de sueldos (Página)` has 5 INFERRED edges - model-reasoned connections that need verification._