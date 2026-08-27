# ETERLIA

![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs&logoColor=fff)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=111)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=fff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss&logoColor=fff)

Escaparate online de Eterlia, una marca de bisutería artesanal de resina: collares, pendientes y llaveros colados a mano en un taller de una sola persona en Sevilla. No hay tienda física, así que la web es el único sitio donde se ven y se compran las piezas.

El proyecto parte de un design system completo hecho en Claude Design y lo traduce a componentes React limpios: los tokens de marca se extraen a CSS, el contenido editorial se separa del código, y las pantallas se reconstruyen desde cero en lugar de copiar el HTML del diseño.

## Alcance del Proyecto

Este repositorio contiene la web pública. El diseño de origen está en un proyecto de [Claude Design](https://claude.ai/design/p/a7a99c89-fc87-4093-b99b-51fa59730695).

Implementado:

- Inicio con portada, piezas destacadas, proceso del taller y dos llamadas a la acción.
- Catálogo de 12 piezas con filtro por categoría y recuento en vivo.
- Ficha de pieza con galería, tabla de materiales y medidas, y variante de pieza agotada.
- Encargos por medida: los cuatro pasos, tabla de plazos y formulario con validación.
- Página del taller, con la historia y las fotos de proceso.
- Contacto con formulario y acordeón de preguntas frecuentes.
- Cinco documentos legales bajo `/legal/[doc]`, con índice lateral.
- Página 404 propia, con la voz de la marca.
- Todas las páginas prerenderizadas en build (26 rutas estáticas).
- 18 archivos de componentes: los 8 del design system original, reescritos en React, más los que pedía el sitio (cabecera, pie, `Section`, acordeón e índice legal).
- Contenido editable sin tocar componentes: catálogo, textos y legales viven en `src/data/`.
- Layout responsive hasta móvil, con menú desplegable en la cabecera.

## Stack Técnico

| Capa | Elección | Motivo |
|---|---|---|
| Framework | Next.js 15 (App Router) | Prerenderizado estático de todo el catálogo; una tienda de escaparate no necesita servidor. |
| UI | React 19 | Server Components por defecto: solo los filtros, la galería y los formularios bajan JS. |
| Lenguaje | TypeScript 5 | El catálogo es un modelo tipado, así que una pieza mal formada no llega al build. |
| Estilos | Tailwind CSS 4 | En v4 la config es CSS: los tokens de marca y las utilidades salen de la misma fuente. |
| Tipografías | `next/font` (Playfair Display + Inter) | Autoalojadas: sin petición al CDN de Google ni salto de layout. |
| Imágenes | `next/image` | Los huecos de producto ya reservan proporción, así que no habrá reflow cuando lleguen las fotos. |
| Contenido | Módulos TS en `src/data/` | Editar precios o textos no toca JSX; sin CMS que mantener para 12 piezas. |
| Estado | `useState` local | Filtros, galería, acordeón y formularios. Nada que compartir entre páginas todavía. |

## Design System

Todo el sistema vive en un único archivo, [`src/app/globals.css`](src/app/globals.css), dentro de `@theme`. En Tailwind 4 la configuración es CSS y cada entrada genera a la vez la variable y su utilidad, así que no hay `tailwind.config.ts` que mantener en paralelo:

```txt
--color-granate-900: #3a0e1b;
      |
      +--> variable CSS   var(--color-granate-900)
      +--> utilidad       bg-granate-900 / text-granate-900 / border-granate-900
```

**Color.** Seis valores de marca, usados exactos y nunca aproximados: papel `#F5EDE0`, banda alterna `#E9DCC5`, granate `#3A0E1B`, hover `#5C1A2E`, texto `#1A1A1A`, filete `#D6C6AA`. Dos neutros derivados (`ink-600`, `ink-400`) solo para texto apagado. El blanco aparece en un único sitio de toda la web: el fondo de los campos de formulario.

**Tipografía.** Playfair Display para titulares, siempre en 400 y nunca en negrita; la cursiva es la voz display de la marca, así que todos los `h1` y `h2` van en cursiva. Inter para el resto, con base de 17px y interlineado 1.62. La caligrafía del logotipo es artwork, no una tipografía: no entra ninguna fuente script en el sistema.

**Reglas que el código respeta.** Sin sombras (salvo `--shadow-lift`, que casi no se ve), sin degradados, sin desenfoques. Radios de 2px con techo en 3px. Máximo dos colores de fondo por página, alternando ocre y ocre alterno al bajar. El hover cambia color pero no mueve, levanta ni agranda nada.

Dos utilidades propias completan el sistema: `.et-overline` (versalitas con tracking 0.18em) y `.display-italic` (Playfair cursiva). La primera no se llama `overline` porque Tailwind ya usa ese nombre para `text-decoration: overline`.

## Arquitectura

El contenido no vive en los componentes. Cada pantalla lee de un módulo de datos y solo se ocupa de la disposición:

```txt
src/data/
  - piezas.ts       (catálogo, precios, materiales, medidas)
  - contenido.ts    (proceso, plazos, textos del taller, FAQ)
  - legal.ts        (los cinco documentos + datos del titular)
  - site.ts         (navegación, correo, enlaces del pie)
      |
Páginas en src/app/
      |
Componentes de src/components/ (nunca leen datos: reciben props)
```

Así, cambiar un precio, retirar una pieza vendida o corregir un plazo es editar una línea de un array. Y el grupo «Legal» del pie se genera desde `documentosLegales`, de modo que añadir o quitar un documento no puede dejar un enlace roto.

### Huecos de imagen

Todavía no hay fotografía de producto. En lugar de un rectángulo gris que finge ser contenido, `ImageFrame` dibuja la rosa de la marca al 12% sobre ocre alterno: un hueco que se reconoce como vacío. Reserva ya la proporción definitiva — 1:1,2 en catálogo y ficha, 4:3 en las fotos de taller, 1:1 en las miniaturas — así que cuando lleguen las fotos basta con pasarle `src` y `alt` y nada se mueve de sitio.

### Componentes cliente

Casi todo es Server Component. Solo bajan JavaScript al navegador estas cinco piezas, y por un motivo concreto cada una:

| Componente | Por qué es cliente |
|---|---|
| `SiteHeader` | Menú desplegable en móvil y enlace activo según la ruta. |
| `CatalogoFiltrable` | Filtro por categoría sin recargar. |
| `GaleriaPieza` | Selector de miniatura. |
| `Acordeon` | Abrir y cerrar preguntas. |
| `FormularioEncargo` / `FormularioContacto` | Validación y confirmación en pantalla. |

## Estructura del Proyecto

```txt
src/
├── app/
│   ├── globals.css        # tokens del design system + reset. Es la "config" de Tailwind
│   ├── layout.tsx         # tipografías, cabecera y pie
│   ├── page.tsx           # inicio
│   ├── catalogo/          # listado y ficha ([slug])
│   ├── encargos/
│   ├── taller/
│   ├── contacto/
│   ├── legal/             # [doc] + redirección desde /legal
│   └── not-found.tsx
├── components/
│   ├── layout/            # SiteHeader, SiteFooter, Section
│   ├── ui/                # Button, Tag, SectionHeading, RoseDivider, ImageFrame,
│   │                      # Field, Acordeon, Icon
│   ├── catalog/           # ProductCard, ProductGrid, CatalogoFiltrable, GaleriaPieza
│   ├── forms/             # FormularioEncargo, FormularioContacto
│   └── legal/             # LegalNav
├── data/                  # todo el contenido editable
└── lib/                   # cn()

public/assets/             # logotipo, nombre y rosa (los que sirve la web)
design/logo/               # arte original del cliente, con su propio README
```

## Setup Local

```powershell
cd C:\Users\Kylen\Desktop\Projects\Eterlia
npm install
npm run dev
```

Next debería estar disponible en `http://localhost:3000`.

No hace falta ningún `.env`: no hay base de datos, ni API, ni claves. Todo el contenido está en el repositorio.

## Scripts

```bash
npm run dev        # arranca Next en desarrollo
npm run build      # build de producción
npm run start      # sirve el build
npm run typecheck  # comprueba TypeScript sin emitir archivos
npm run lint       # ESLint
```

Verificado:

- `npm run typecheck` pasa.
- `npm run lint` pasa.
- `npm run build` pasa y prerenderiza las 26 rutas.
- Las seis páginas públicas y las cinco legales devuelven 200; `/legal` redirige.
- Los cinco enlaces legales del pie apuntan a rutas que existen.
- Colores, tipografía y componentes comprobados contra los valores del design system con estilos computados en el navegador.

## Iconografía

La marca no tiene set de iconos propio. Se usan cuatro glifos dibujados a mano con el trazo de [Lucide](https://lucide.dev) — bolsa, correo, Instagram y flecha — porque su línea de peso único es la que más se acerca al trazo de la rosa. Nada más: donde una palabra hace el trabajo se usa la palabra, así que la navegación y los filtros son texto. Sin emoji, en ningún sitio. Los pasos del proceso se enumeran con cifras serif grandes (01 / 02 / 03) en lugar de iconos.

Dos caracteres Unicode aparecen como pura tipografía y no cuentan como icono: `▾` en el desplegable y `+` / `−` en el acordeón.

## Legales

Los cinco documentos viven en [`src/data/legal.ts`](src/data/legal.ts) y se sirven desde `/legal/[doc]`.

> **Antes de publicar.** Los datos del titular (`titular` en ese archivo) son un marcador de posición heredado del diseño: el NIF `00000000A` no es real. Nombre fiscal, NIF y domicilio de notificaciones hay que ponerlos de verdad, y los textos deberían pasar por un asesor. Lo que hay es la estructura y el tono de la marca, no un dictamen jurídico.

## Lo que todavía no está

- **Compra.** Falta el carrito y todo el flujo (`/carrito`, checkout, confirmación). El icono de bolsa de la cabecera está montado pero marca 0 y no lleva a ningún sitio.
- **Cuenta y admin.** Diseñadas en Claude Design, sin implementar.
- **Envío de formularios.** Encargos y contacto validan y confirman en pantalla, pero no hay endpoint detrás.
- **Fotografía de producto.** Los huecos están reservados con su proporción.
- **Despliegue.** Todavía no hay entorno de producción.
