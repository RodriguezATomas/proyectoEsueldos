# e-Sueldos — Rediseño Web

Sitio web de marketing y portal de acceso de **e-Sueldos**, una plataforma SaaS de gestión laboral que integra **liquidación de sueldos, control horario/asistencia y RR.HH. self-service**, con un asistente de inteligencia artificial (**Leia**) embebido en la experiencia.

Es un proyecto de páginas estáticas en HTML/CSS/JS (sin build ni framework), pensado para mostrar el producto, capturar leads y dar acceso a los portales internos de cada módulo.

## Estructura del proyecto

```
├── index-esueldos.html              # Home / landing principal
├── producto-esueldos.html           # Página de producto / arquitectura de la suite
├── planes-esueldos.html             # Planes y precios
├── pymes-esueldos.html              # Landing enfocada en PyMEs
├── nosotros-esueldos.html           # Página institucional "Nosotros"
├── recursos-esueldos.html           # Centro de recursos / ayuda / contacto
├── control-horario-esueldos.html    # Landing del módulo de Control Horario
├── calculadora-horas-extras.html    # Herramienta: calculadora de horas extras
├── portal-rrhh-landing.html         # Landing del Portal RR.HH.
├── e-sueldos-landing-completa.html  # Landing del Portal de Liquidación
├── agendar-demo-esueldos.html       # Formulario para agendar una demo
├── brief-esueldos.html              # Brief/landing del asistente de IA "Leia"
├── log-in/
│   ├── index.html                   # Página raíz de inicio de sesión (selector/redirect)
│   ├── liquidacion.html             # Login del Portal de Liquidación
│   └── recursos-humanos.html        # Login del Portal RR.HH.
├── assets/                          # Imágenes de producto, mockups y diagramas
├── images/testimonials/             # Imágenes de testimonios
└── graphify-out/                    # Grafo de conocimiento del proyecto (generado con graphify)
```

## Funcionalidades por sección

### Home ([index-esueldos.html](index-esueldos.html))
Landing principal de la marca: presenta la propuesta de valor ("Aumentá la productividad y la colaboración en toda tu organización"), accesos a los módulos (fichaje, liquidación, RR.HH.), mención del asistente Leia para colaboradores y llamadas a la acción hacia demo y planes.

### Producto ([producto-esueldos.html](producto-esueldos.html))
Explica la arquitectura de la suite: una base de datos conectada para toda la operación, cómo cada módulo (fichaje, liquidación, RR.HH.) "suma control al cierre" y cómo Leia acompaña cada consulta del equipo.

### Planes ([planes-esueldos.html](planes-esueldos.html))
Presenta los planes comerciales — **Emprendedor**, **Empresa** y **Corporate** — con mockups de dashboard (KPIs de empleados activos, liquidaciones, total pagado, ausencias) y gráficos (dona de empleados por tipo de contrato, estado de liquidaciones).

### PyMEs ([pymes-esueldos.html](pymes-esueldos.html))
Landing segmentada para pequeñas y medianas empresas, con foco en "RR.HH. y asistencia en una misma plataforma" y liquidación simple para crecer.

### Nosotros ([nosotros-esueldos.html](nosotros-esueldos.html))
Página institucional de la empresa (misión, equipo, propuesta de marca).

### Recursos ([recursos-esueldos.html](recursos-esueldos.html))
Centro de recursos/ayuda con accesos a contacto **Comercial** y **Soporte**, y material de referencia para clientes y prospectos.

### Control Horario ([control-horario-esueldos.html](control-horario-esueldos.html))
Landing del módulo de fichaje y asistencia:
- Fichaje biométrico (huella dactilar) y por **código QR**
- **Kiosco** dedicado (tablet) con reconocimiento facial
- Validación de asistencia por **geolocalización**
- Multi-sede con visibilidad total
- Integraciones de fichaje vía API en la nube (reloj biométrico, calendario de pagos, ficha de empleado)
- Datos que alimentan directamente la liquidación ("Datos listos para liquidar")

### Calculadora de Horas Extras ([calculadora-horas-extras.html](calculadora-horas-extras.html))
Herramienta interactiva que toma datos del trabajador (salario, horas trabajadas) como input y devuelve un resultado estimado de horas extra, contemplando los recargos del 50%/100% de la Ley de Contrato de Trabajo argentina. Incluye flujo de aprobación de horas extra (Solicitud → Revisión → Aprobación → Liquidación).

### Portal RR.HH. ([portal-rrhh-landing.html](portal-rrhh-landing.html))
Landing del portal self-service de Recursos Humanos:
- **Legajo digital** del empleado
- **Firma digital** de documentos y aprobaciones
- Gestión de **solicitudes** (vacaciones, licencias, ausencias)
- Calendario de asistencia/licencias y perfil del empleado
- UX mobile-first

### Portal de Liquidación ([e-sueldos-landing-completa.html](e-sueldos-landing-completa.html))
Landing del portal de liquidación de sueldos:
- Validación de **novedades y convenios** antes del cierre
- **Recibos digitales**
- Reportes y cierres de período
- Dashboard de validación de novedades con estados (Aprobado/Pendiente), auditoría y configuración
- Localización para Argentina (moneda, normativa laboral)

### Agendar Demo ([agendar-demo-esueldos.html](agendar-demo-esueldos.html))
Formulario de contacto para agendar una demo comercial del producto (captura de leads).

### Leia — Asistente de IA ([brief-esueldos.html](brief-esueldos.html))
Página que presenta al asistente conversacional **Leia**, integrado en toda la plataforma:
- Respuestas instantáneas por conversación en lenguaje natural
- Transforma documentos en respuestas confiables
- Aprende de cada interacción
- Accesos rápidos desde el chat (recibos, solicitudes, consulta de días de vacaciones)
- Diseñado con foco en acceso seguro
- Sección de preguntas frecuentes

### Login / Acceso ([log-in/](log-in/))
- **`index.html`** — página raíz de inicio de sesión, punto de entrada/selector hacia los portales
- **`liquidacion.html`** — login específico del Portal de Liquidación
- **`recursos-humanos.html`** — login específico del Portal RR.HH.

## Assets

- `assets/` — screenshots y mockups de producto (kiosco, app de fichada, dashboards de laptop/tablet/celular, integraciones, novedades de liquidación, horas extra)
- `images/testimonials/` — imágenes de testimonios de clientes
- `hero-esueldos.mp4`, `leia-esueldos.mp4` — videos institucionales/de producto usados en las landings
- `fondo.png`, `fondoBlanco.png`, `celular.png`, `celular2.png`, `tablet.png`, `computadora.png`, `telefono.png`, `conversacion.png` — recursos gráficos y mockups de dispositivos

## Mapa de conocimiento (graphify)

El directorio [graphify-out/](graphify-out/) contiene un grafo de conocimiento generado sobre este proyecto (nodos, comunidades temáticas y relaciones entre páginas y assets). Puede explorarse con:

```bash
graphify query "<pregunta sobre el proyecto>"
```

o abriendo `graphify-out/graph.html` en el navegador para la visualización interactiva.
