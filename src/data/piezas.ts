/**
 * Catálogo de Eterlia.
 *
 * Este archivo es el único sitio donde se toca el contenido de las piezas:
 * añadir, quitar o cambiar precios y descripciones no requiere abrir ningún
 * componente. Las fotos aún no existen; `fotos` dice cuántos huecos de imagen
 * reserva la ficha para cuando lleguen.
 */

export type CategoriaId = "collares" | "pendientes" | "llaveros";

export interface Pieza {
  slug: string;
  nombre: string;
  /** Euros. Se formatea con `formatPrecio`. */
  precio: number;
  /** Línea corta bajo el nombre en la tarjeta. */
  material: string;
  categoria: CategoriaId;
  agotada?: boolean;
  /** Aparece en la portada. */
  destacada?: boolean;
  /** Un párrafo: el material y de dónde viene. */
  descripcion: string;
  ficha: {
    materiales: string;
    medidas: string;
    envio: string;
  };
  /** Huecos de imagen previstos: frontal, perfil, detalle del pulido y puesta. */
  fotos: number;
}

export const categorias: { id: CategoriaId | "todo"; label: string }[] = [
  { id: "todo", label: "Todo" },
  { id: "collares", label: "Collares" },
  { id: "pendientes", label: "Pendientes" },
  { id: "llaveros", label: "Llaveros" },
];

const ENVIO_CATALOGO = "Sale del taller en 24–72 h. Península 4,50 €";

export const piezas: Pieza[] = [
  {
    slug: "aurora",
    nombre: "Aurora",
    precio: 42,
    material: "Resina y flor seca",
    categoria: "collares",
    destacada: true,
    descripcion:
      "Colgante colado en resina transparente con una flor de estatice recogida en agosto en la sierra norte de Sevilla. El borde se lijó a mano hasta dejarlo mate y el pulido final se hizo con la pieza ya montada.",
    ficha: {
      materiales: "Resina epoxi, flor seca, cadena de acero inoxidable",
      medidas: "Colgante 3,2 × 2,4 cm. Cadena 45 cm",
      envio: ENVIO_CATALOGO,
    },
    fotos: 4,
  },
  {
    slug: "bruma",
    nombre: "Bruma",
    precio: 38,
    material: "Resina y pigmento blanco",
    categoria: "collares",
    agotada: true,
    destacada: true,
    descripcion:
      "Resina teñida con pigmento blanco en dos coladas, de forma que el color queda más denso abajo que arriba. Cada pieza sale con esa transición en un sitio distinto.",
    ficha: {
      materiales: "Resina epoxi, pigmento mineral, cadena de acero inoxidable",
      medidas: "Colgante 2,8 × 2,8 cm. Cadena 45 cm",
      envio: ENVIO_CATALOGO,
    },
    fotos: 4,
  },
  {
    slug: "nocturna",
    nombre: "Nocturna",
    precio: 45,
    material: "Resina y pan de plata",
    categoria: "collares",
    descripcion:
      "Colada oscura con lámina de pan de plata rota a mano antes de entrar en el molde. La plata se oxida despacio, así que la pieza se va apagando con los años.",
    ficha: {
      materiales: "Resina epoxi, pan de plata, cadena de acero inoxidable",
      medidas: "Colgante 3,4 × 2,2 cm. Cadena 50 cm",
      envio: ENVIO_CATALOGO,
    },
    fotos: 4,
  },
  {
    slug: "rocio",
    nombre: "Rocío",
    precio: 28,
    material: "Resina transparente y acero",
    categoria: "collares",
    descripcion:
      "La pieza más limpia del taller: resina sin pigmento, pulida hasta dejarla como un cristal. Se nota cualquier marca, así que se descarta más de la mitad de lo que se cuela.",
    ficha: {
      materiales: "Resina epoxi, cadena de acero inoxidable",
      medidas: "Colgante 2,2 × 2,2 cm. Cadena 45 cm",
      envio: ENVIO_CATALOGO,
    },
    fotos: 3,
  },
  {
    slug: "petalo",
    nombre: "Pétalo",
    precio: 22,
    material: "Resina y pan de oro",
    categoria: "pendientes",
    destacada: true,
    descripcion:
      "Dos gotas de resina con una lámina de pan de oro suspendida en el centro. Al ser lámina y no purpurina, cada pendiente coge la luz de una manera.",
    ficha: {
      materiales: "Resina epoxi, pan de oro, ganchos de acero quirúrgico",
      medidas: "2,6 × 1,2 cm cada pendiente",
      envio: ENVIO_CATALOGO,
    },
    fotos: 3,
  },
  {
    slug: "vilano",
    nombre: "Vilano",
    precio: 18,
    material: "Resina y semilla de diente de león",
    categoria: "pendientes",
    descripcion:
      "Un vilano de diente de león entero, sellado en dos coladas para que no se aplaste. Es la pieza que más veces sale mal: el aire de la semilla forma burbujas.",
    ficha: {
      materiales: "Resina epoxi, semilla seca, ganchos de acero quirúrgico",
      medidas: "1,8 cm de diámetro cada pendiente",
      envio: ENVIO_CATALOGO,
    },
    fotos: 3,
  },
  {
    slug: "marea",
    nombre: "Marea",
    precio: 26,
    material: "Resina, pigmento azul y latón",
    categoria: "pendientes",
    agotada: true,
    descripcion:
      "Pigmento azul mezclado a mano hasta dejar vetas, montado sobre aro de latón. La proporción está anotada, pero el dibujo de las vetas no se repite.",
    ficha: {
      materiales: "Resina epoxi, pigmento mineral, aro de latón",
      medidas: "Aro de 2,4 cm",
      envio: ENVIO_CATALOGO,
    },
    fotos: 3,
  },
  {
    slug: "ambar",
    nombre: "Ámbar",
    precio: 24,
    material: "Resina teñida a mano",
    categoria: "pendientes",
    descripcion:
      "Resina teñida en tono miel con tinte de alcohol, gota a gota. El color va de más claro a más oscuro dentro de la misma pieza.",
    ficha: {
      materiales: "Resina epoxi, tinte de alcohol, ganchos de acero quirúrgico",
      medidas: "2,2 × 1,4 cm cada pendiente",
      envio: ENVIO_CATALOGO,
    },
    fotos: 3,
  },
  {
    slug: "duna",
    nombre: "Duna",
    precio: 14,
    material: "Resina y arena",
    categoria: "llaveros",
    destacada: true,
    descripcion:
      "Arena de la playa de Bolonia colada dentro de la resina en capas finas. Si quieres arena de un sitio concreto, se puede enviar al taller.",
    ficha: {
      materiales: "Resina epoxi, arena, anilla de acero inoxidable",
      medidas: "4,2 × 2,6 cm",
      envio: ENVIO_CATALOGO,
    },
    fotos: 3,
  },
  {
    slug: "sal",
    nombre: "Sal",
    precio: 12,
    material: "Resina y pigmento crudo",
    categoria: "llaveros",
    descripcion:
      "Pigmento crudo sin disolver del todo, así que quedan grumos visibles dentro de la resina. Es un defecto que se dejó a propósito.",
    ficha: {
      materiales: "Resina epoxi, pigmento mineral, anilla de acero inoxidable",
      medidas: "4 × 2,4 cm",
      envio: ENVIO_CATALOGO,
    },
    fotos: 3,
  },
  {
    slug: "hoja",
    nombre: "Hoja",
    precio: 16,
    material: "Resina y hoja de olivo",
    categoria: "llaveros",
    descripcion:
      "Una hoja de olivo prensada entre papel durante tres semanas antes de entrar en resina. Con el tiempo el verde se va hacia el marrón.",
    ficha: {
      materiales: "Resina epoxi, hoja prensada, anilla de acero inoxidable",
      medidas: "5 × 2,2 cm",
      envio: ENVIO_CATALOGO,
    },
    fotos: 3,
  },
  {
    slug: "ceniza",
    nombre: "Ceniza",
    precio: 13,
    material: "Resina y pigmento gris",
    categoria: "llaveros",
    descripcion:
      "Gris opaco, sin brillo dentro. Es el llavero que menos se raya, así que es el que más se pide para las llaves de casa.",
    ficha: {
      materiales: "Resina epoxi, pigmento mineral, anilla de acero inoxidable",
      medidas: "4 × 2,4 cm",
      envio: ENVIO_CATALOGO,
    },
    fotos: 3,
  },
];

export const piezasDestacadas = piezas.filter((p) => p.destacada);

export function getPieza(slug: string): Pieza | undefined {
  return piezas.find((p) => p.slug === slug);
}

export function piezasPorCategoria(categoria: CategoriaId | "todo"): Pieza[] {
  return categoria === "todo"
    ? piezas
    : piezas.filter((p) => p.categoria === categoria);
}

/** Para el pie de la ficha: primero de la misma categoría, siempre disponibles. */
export function piezasRelacionadas(pieza: Pieza, limite = 3): Pieza[] {
  const disponibles = piezas.filter((p) => p.slug !== pieza.slug && !p.agotada);
  const misma = disponibles.filter((p) => p.categoria === pieza.categoria);
  const resto = disponibles.filter((p) => p.categoria !== pieza.categoria);
  return [...misma, ...resto].slice(0, limite);
}

/** Espacio antes del símbolo, sin decimales cuando el precio es entero. */
export function formatPrecio(euros: number): string {
  const valor = Number.isInteger(euros)
    ? String(euros)
    : euros.toFixed(2).replace(".", ",");
  return `${valor} €`;
}

export function contarPiezas(n: number): string {
  return n === 1 ? "1 pieza" : `${n} piezas`;
}
