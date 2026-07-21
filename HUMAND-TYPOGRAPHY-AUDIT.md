# HUMAND TYPOGRAPHY AUDIT

## 1. RESUMEN

Auditoria realizada sobre `https://humand.co/es/` el 2026-07-21. Se descargaron el HTML y 44 hojas CSS publicas de Humand, se cargo una copia local con esos CSS reales en Chrome/Playwright y se extrajeron estilos mediante `getComputedStyle()` en 1440px, 1280px, 768px y 390px.

El sistema tipografico usa principalmente `SF UI` para body, navegacion, botones, cards, estadisticas y footer. Tambien usa `SF Pro Display` en algunos bloques editoriales grandes, especialmente H2 centrados y textos destacados.

## 2. FUENTE PRINCIPAL

CONFIRMADO: `SF UI`

Familia CSS exacta: `"SF UI", sans-serif`

Origen: `@font-face` cargado desde Humand CDN.

## 3. FUENTES SECUNDARIAS

CONFIRMADO: `SF Pro Display`

Familia CSS exacta: `"SF Pro Display", sans-serif`

Origen: `@font-face` cargado desde Humand CDN.

Tambien aparecen fuentes de iconos: `Font Awesome 6 Free`, `Font Awesome 6 Brands`, `eicons`, `swiper-icons`. No forman parte del sistema tipografico textual.

## 4. PESOS

| Fuente | Pesos disponibles | Pesos usados segun getComputedStyle |
|---|---:|---|
| SF UI | 300, 400, 500, 600, 700, 800 | 400 body/display, 500 nav/dropdown, 600 botones/nav utility, 700 cards/estadisticas/footer |
| SF Pro Display | 100, 300, 400, 500, 600, 700 | 400 en H2/editorial destacado |

## 5. ESCALA TIPOGRAFICA

| Elemento | Font Family | Font Size | Font Weight | Line Height | Letter Spacing | Text Transform | Uso | Seccion |
|---|---|---:|---:|---:|---:|---|---|---|
| Body | `"SF UI", sans-serif` | 16px | 400 | 24px | normal | none | Base global | body |
| Navbar principal | `"SF UI", sans-serif` | 16px | 500 | 24px | -0.5px | none | Items principales | header |
| Navbar utility | `"SF UI", sans-serif` | 12px | 600 | 22.8px | 0.2px | none | Soporte/login | header |
| Selector idioma | `"SF UI", sans-serif` | 12px | 600 | 13.2px | -0.2px | none | ES | header |
| Dropdown | `"SF UI", sans-serif` | 16px | 500 | 19.2px | -0.5px | none | Titulos menu | mega menu |
| H1 Hero | `"SF UI", sans-serif` | 92px | 400 | 92px | -5.52px | none | `Tu empresa, mas inteligente.` | hero |
| Hero subtitulo | `"SF UI", sans-serif` | 28px | 400 | 36.4px | -1.68px | none | texto animado/subtitle | hero |
| Eyebrow | `"SF UI", sans-serif` | 12px | 500 | 12px | normal | none | `SERIE A` | topbar |
| Rating/Card mini | `"SF UI", sans-serif` | 16px | 700 | 17.6px | -0.8px | none | `4.9/5...` | hero |
| H2 Display | `"SF Pro Display", sans-serif` | 48px | 400 | 56.016px | -0.96px | none | H2 centrado | logos/section |
| H2 Interior | `"SF UI", sans-serif` | 52px | 400 | 57.2px | -3.12px | none | H2 de seccion | content |
| Body XL | `"SF UI", sans-serif` | 24px | 400 | 31.2px | -1.44px | none | claim/copy grande | hero/cards |
| Body Display | `"SF Pro Display", sans-serif` | 28px | 400 | 32.676px | -0.56px | none | texto destacado | AI section |
| Body Large Bold | `"SF UI", sans-serif` | 20px | 700 | 26px | -1.2px | none | card/title text | cards |
| Body Large | `"SF UI", sans-serif` | 20px | 400 | 26px | -1.2px | none | paragraph descriptivo | cards |
| Button | `"SF UI", sans-serif` | 14px | 600 | 16.8px | -0.5px | none | CTA | header/hero |
| Card Text | `"SF UI", sans-serif` | 18px | 400 | 23.4px | -1.08px | none | labels/descripciones | cards |
| Stat Number XL | `"SF UI", sans-serif` | 80px | 700 | 104px | -4.8px | none | porcentaje | estadisticas |
| Stat Number LG | `"SF UI", sans-serif` | 75px | 700 | 97.5px | -4.5px | none | horas | estadisticas |
| Footer Title | `"SF UI", sans-serif` | 14px | 700 | 18.2px | -0.84px | none | columnas footer | footer |
| Footer Link | `"SF UI", sans-serif` | 14px | 400 | 18.2px | -0.84px | none | enlaces footer | footer |

## 6. RESPONSIVE

| Elemento | 1440px | 1280px | 768px | 390px |
|---|---|---|---|---|
| H1 Hero | 92/92, -5.52 | 92/92, -5.52 | 70/70, -4.2 | 42/42, -2.52 |
| Hero subtitulo | 28/36.4, -1.68 | 28/36.4, -1.68 | 23/29.9, -1.38 | 18/21.6, -1.08 |
| H2 Display | 48/56.016, -0.96 | 48/56.016, -0.96 | 29/33.843, -0.58 | 24/28.008, -0.48 |
| H2 Interior | 52/57.2, -3.12 | 52/57.2, -3.12 | 30/33, -1.8 | 30/33, -1.8 |
| Body XL | 24/31.2, -1.44 | 24/31.2, -1.44 | 16/20.8, -0.96 | 18/23.4, -1.08 |
| Body Large | 20/26, -1.2 | 20/26, -1.2 | 15/19.5, -0.9 | 16/19.2, -0.96 |
| Button | 14/16.8, -0.5 | 14/16.8, -0.5 | 14/16.8, -0.5 | 10-12/12-14.4, -0.5 |
| Stat Number | 75-80/97.5-104 | 75-80/97.5-104 | 45-50/58.5 | 50/60 |
| Footer Title | 14/18.2, -0.84 | 14/18.2, -0.84 | 16/20.8, -0.96 | 18/21.6, -1.08 |

Media queries confirmadas en CSS:

```css
@media(max-width:1100px){...}
@media(max-width:767px){...}
```

## 7. FUENTES Y ARCHIVOS

CONFIRMADO:

```css
@font-face { font-family:"SF UI"; font-weight:300; src:url("https://humandcdn.b-cdn.net/wp-content/uploads/2024/08/sfuitext-light-webfont.woff2") format("woff2"),url("https://humandcdn.b-cdn.net/wp-content/uploads/2024/08/sfuitext-light-webfont.woff") format("woff"); }
@font-face { font-family:"SF UI"; font-weight:400; src:url("https://humandcdn.b-cdn.net/wp-content/uploads/2024/08/sfuitext-regular-webfont.woff2") format("woff2"),url("https://humandcdn.b-cdn.net/wp-content/uploads/2024/08/sfuitext-regular-webfont.woff") format("woff"); }
@font-face { font-family:"SF UI"; font-weight:500; src:url("https://humandcdn.b-cdn.net/wp-content/uploads/2024/08/sfuitext-medium-webfont.woff2") format("woff2"),url("https://humandcdn.b-cdn.net/wp-content/uploads/2024/08/sfuitext-medium-webfont.woff") format("woff"); }
@font-face { font-family:"SF UI"; font-weight:600; src:url("https://humandcdn.b-cdn.net/wp-content/uploads/2024/08/sfuitext-semibold-webfont.woff2") format("woff2"),url("https://humandcdn.b-cdn.net/wp-content/uploads/2024/08/sfuitext-semibold-webfont.woff") format("woff"); }
@font-face { font-family:"SF UI"; font-weight:700; src:url("https://humandcdn.b-cdn.net/wp-content/uploads/2024/08/sfuitext-bold-webfont.woff2") format("woff2"),url("https://humandcdn.b-cdn.net/wp-content/uploads/2024/08/sfuitext-bold-webfont-1.woff") format("woff"); }
@font-face { font-family:"SF UI"; font-weight:800; src:url("https://humandcdn.b-cdn.net/wp-content/uploads/2024/08/sfuitext-heavy-webfont.woff2") format("woff2"),url("https://humandcdn.b-cdn.net/wp-content/uploads/2024/08/sfuitext-heavy-webfont.woff") format("woff"); }
@font-face { font-family:"SF Pro Display"; font-weight:400; src:url("https://humandcdn.b-cdn.net/wp-content/uploads/2026/03/SF-Pro-Display-Regular.ttf") format("truetype"); }
```

## 8. VARIABLES CSS

CONFIRMADO en `.elementor-kit-8`:

```css
--e-global-typography-primary-font-family:"SF UI";
--e-global-typography-primary-font-size:40px;
--e-global-typography-primary-font-weight:700;
--e-global-typography-primary-line-height:1.3em;
--e-global-typography-primary-letter-spacing:-0.5px;
--e-global-typography-secondary-font-size:35px;
--e-global-typography-accent-font-size:23px;
--e-global-typography-text-font-size:17px;
--e-global-typography-text-line-height:1.1em;
--e-global-typography-text-letter-spacing:0.2px;
```

Responsive confirmado:

```css
@media(max-width:1100px){--e-global-typography-primary-font-size:45px;--e-global-typography-secondary-font-size:30px;--e-global-typography-text-font-size:16px;}
@media(max-width:767px){--e-global-typography-primary-font-size:26px;--e-global-typography-secondary-font-size:22px;--e-global-typography-text-font-size:14px;}
```

## 9. TOKENS PROPUESTOS

Ver `typography.css`. Los tokens provienen de valores computados de Humand, no de aproximaciones visuales.

## 10. MAPEO

| Humand | CSS generado |
|---|---|
| H1 Hero | `.text-display-xl` |
| Hero subtitle | `.text-hero-subtitle` |
| H2 grande interior | `.text-h2-xl` |
| H2 con SF Pro Display | `.text-h2-display` |
| Body grande | `.text-body-xl` |
| Body large | `.text-body-lg` |
| Body bold/card title | `.text-body-lg-bold`, `.text-card-title` |
| Navbar | `.text-navbar` |
| Utility nav | `.text-navbar-utility` |
| Button | `.text-button` |
| Card text | `.text-card-body` |
| Estadistica | `.text-stat-xl`, `.text-stat-lg` |
| Footer title | `.text-footer-title` |
| Footer link | `.text-footer-link` |

## 11. NIVEL DE CONFIANZA

CONFIRMADO:

- Familias `SF UI` y `SF Pro Display`.
- `@font-face` y URLs de fuentes listadas.
- Estilos computados de body, navbar, dropdown, H1, H2, parrafos, botones, cards, estadisticas y footer.
- Breakpoints `max-width:1100px` y `max-width:767px`.

INFERIDO:

- Los nombres semanticos de tokens en `typography.css`; los valores son confirmados, los nombres son una organizacion para HTML/CSS.

NO VERIFICADO:

- Estados tipograficos dentro de popups, formularios ocultos o componentes que requieren interaccion/login.
