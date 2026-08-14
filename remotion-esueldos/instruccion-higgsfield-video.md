# Instrucción para Claude Code — Hero video con Seedance 2.0

Copiá y pegá todo el bloque de abajo tal cual en una sesión de Claude Code (con la cuenta de Higgsfield que tiene los 9 créditos disponibles).

---

```
Trabajá sobre el repo proyectoEsueldos, rama feature/Remotion, en la carpeta
remotion-esueldos/ que ya existe ahí (proyecto Remotion con la landing de
e-Sueldos: escenas de logo cinético, tarjetas de producto flotantes, stats
animadas y CTA, con paleta #2355E8 / #5C82F5 / #8FADFC / ink #081A4D,
tipografía Nunito Sans).

Quiero reproducir el nivel de producción de estos dos videos de referencia
(mismo estilo que ya venimos usando: Higgsfield + motion graphics dirigidos
por código, no After Effects):
- https://youtu.be/l1__YJ2cGdE
- https://youtu.be/3GlRCBqx1Gc

Generá UN clip de video real con Higgsfield (no imagen estática) para
reemplazar el fondo actual (que hoy es una imagen con Ken Burns simulado por
CSS) por un fondo en movimiento genuino, usando EXACTAMENTE estos parámetros
para no pasarme del presupuesto de créditos:

  higgsfield generate cost seedance_2_0 \
    --prompt "<prompt de fondo, ver abajo>" \
    --aspect-ratio 16:9 --resolution 480p --duration 6 --mode fast \
    --generate-audio false

  (confirmá el costo antes de crear el job — debe dar 9 créditos; si da más,
  parate y avisame antes de gastar)

Prompt sugerido para el clip (ajustalo si hace falta, pero mantené "sin
cubos, sin objetos, sin texto"):
  "Slow-motion abstract flowing liquid light background, deep navy to
  electric blue silk ribbons undulating smoothly through empty space, soft
  glow trails, seamless loop, ultra premium fintech SaaS aesthetic, no text,
  no logos, no objects, no cubes, no crystals, cinematic camera drift"

Una vez generado el clip:
1. Descargalo a remotion-esueldos/public/bg-video.mp4
2. En remotion-esueldos/src/Background.tsx, reemplazá el <Img> de la
   textura estática por un <OffthreadVideo> de Remotion apuntando a ese
   archivo (loop si el clip de 6s es más corto que la duración total de la
   composición), manteniendo encima el mesh de gradientes animado, la red
   de nodos, las partículas y el grano que ya están.
3. No toques el resto de la lógica (CameraRig, transiciones con aberración
   cromática, ParticleAssembly, SonarRings, DeviceFrame) — esa parte ya
   quedó bien, el problema era solo que el fondo era estático.
4. Renderizá con: npx remotion render src/index.ts EsueldosHero
   out/hero-esueldos-remotion.mp4
5. Mandame el resultado para revisar antes de tocar el sitio real
   (index-esueldos.html tiene el hero-video actual embebido en base64
   dentro del HTML — no lo edites sin que te lo confirme explícitamente).

Antes de generar nada con Higgsfield, mostrame el costo exacto en créditos
y esperá mi OK.
```

---

### Por qué estos parámetros
- **Seedance 2.0, `--mode fast`, `--resolution 480p`, `--duration 6`** → el combo más barato que arma un clip de video real (no imagen animada por CSS) usando el mismo modelo que aparece en los dos videos de referencia.
- **9 créditos exactos** confirmado con `higgsfield generate cost` — con una cuenta free de 10 créditos, deja margen de 1 crédito de sobra.
- El resto de la instrucción reutiliza el proyecto Remotion que ya armamos en esta rama, así Claude no repite trabajo ni reinventa la estructura — solo enchufa el clip real donde hoy hay una imagen estática.
