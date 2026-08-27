/**
 * Documentos legales.
 *
 * OJO: los datos del titular son un marcador de posición sacado del diseño.
 * Antes de publicar hay que poner el nombre fiscal, el NIF y el domicilio de
 * notificaciones reales, y conviene que un asesor revise los textos: aquí solo
 * está la estructura y el tono de la marca, no un dictamen jurídico.
 */

export const titular = {
  nombre: "Andrea Ruiz Aguilar",
  nif: "00000000A", // TODO: NIF real
  domicilio: "Sevilla", // TODO: domicilio fiscal a efectos de notificaciones
  email: "hola@eterlia.es",
  nota: "Actividad artesanal sin establecimiento abierto al público.",
};

export const ultimaActualizacion = "27 de agosto de 2026";

export interface Bloque {
  titulo: string;
  texto: string;
}

export interface DocumentoLegal {
  slug: string;
  /** Nombre para el índice lateral. */
  label: string;
  /** Nombre corto para el pie de página, donde el espacio manda. */
  labelCorto: string;
  titulo: string;
  entradilla: string;
  bloques: Bloque[];
}

export const documentosLegales: DocumentoLegal[] = [
  {
    slug: "aviso-legal",
    label: "Aviso legal",
    labelCorto: "Aviso legal",
    titulo: "Aviso legal",
    entradilla:
      "Esta web es de Andrea Ruiz Aguilar, artesana, con taller en Sevilla y sin establecimiento abierto al público. Aquí están los datos identificativos y las condiciones de uso del sitio.",
    bloques: [
      {
        titulo: "Titular y contacto",
        texto:
          "Andrea Ruiz Aguilar, NIF 00000000A, domicilio a efectos de notificaciones en Sevilla. Puedes escribirme a hola@eterlia.es y respondo en 24–48 h.",
      },
      {
        titulo: "Uso del sitio",
        texto:
          "Puedes navegar, leer y comprar. No puedes copiar las fotografías, los textos ni el logotipo para usarlos en otra web o en la venta de otros productos.",
      },
      {
        titulo: "Precios y disponibilidad",
        texto:
          "Los precios incluyen IVA. Cada pieza es única, así que puede venderse mientras la estás mirando; si eso pasa, te lo digo y te devuelvo el importe si ya habías pagado.",
      },
      {
        titulo: "Ley aplicable",
        texto:
          "Se aplica la legislación española. Para cualquier conflicto son competentes los juzgados del domicilio del consumidor.",
      },
    ],
  },
  {
    slug: "privacidad",
    label: "Política de privacidad",
    labelCorto: "Privacidad",
    titulo: "Política de privacidad",
    entradilla:
      "Trato tus datos yo misma. No los vendo, no los cedo con fines publicitarios y no uso perfilado automático.",
    bloques: [
      {
        titulo: "Qué datos guardo",
        texto:
          "Nombre, email, teléfono y dirección de envío cuando compras o haces un encargo. Si envías una imagen de referencia, la guardo mientras el encargo esté abierto.",
      },
      {
        titulo: "Para qué",
        texto:
          "Para enviarte la pieza, responder al encargo y cumplir con la obligación fiscal de conservar las facturas cinco años.",
      },
      {
        titulo: "Quién más los ve",
        texto:
          "El transportista (nombre, dirección, teléfono), la pasarela de pago y el proveedor de correo electrónico. Nadie más.",
      },
      {
        titulo: "Tus derechos",
        texto:
          "Puedes pedirme acceso, rectificación, supresión o portabilidad escribiendo a hola@eterlia.es. También puedes reclamar ante la AEPD.",
      },
    ],
  },
  {
    slug: "cookies",
    label: "Política de cookies",
    labelCorto: "Cookies",
    titulo: "Política de cookies",
    entradilla:
      "La web funciona con dos cookies propias y ninguna de publicidad. No hay rastreo entre sitios.",
    bloques: [
      {
        titulo: "Cookies necesarias",
        texto:
          "Una guarda tu carrito y tu sesión; la otra recuerda si ya has respondido al aviso de cookies. Caducan a los 12 meses y no se pueden desactivar sin romper la compra.",
      },
      {
        titulo: "Medición",
        texto:
          "Uso una estadística agregada sin identificadores personales: cuántas visitas y qué páginas se ven. Puedes rechazarla y la web sigue igual.",
      },
      {
        titulo: "Cómo cambiar tu decisión",
        texto:
          "Desde el enlace «Cookies» del pie puedes volver a abrir el aviso y cambiar tu respuesta cuando quieras.",
      },
      {
        titulo: "Terceros",
        texto:
          "No hay píxeles de redes sociales, ni mapas incrustados, ni vídeos externos.",
      },
    ],
  },
  {
    slug: "condiciones",
    label: "Condiciones de venta",
    labelCorto: "Condiciones de venta",
    titulo: "Condiciones de venta",
    entradilla:
      "Compras piezas hechas a mano en un taller de una sola persona. Los plazos son reales, no comerciales.",
    bloques: [
      {
        titulo: "Pieza única",
        texto:
          "Cada artículo existe una sola vez, por eso la cantidad se queda en 1. Cuando se vende, desaparece del catálogo.",
      },
      {
        titulo: "Pago",
        texto:
          "El pago se completa en la pasarela del banco, fuera de esta web. No guardo ningún dato de tu tarjeta.",
      },
      {
        titulo: "Plazos",
        texto:
          "Las piezas del catálogo salen del taller en 24–72 h. Los encargos llevan de dos a cuatro semanas según el curado, y el plazo te lo confirmo en el presupuesto.",
      },
      {
        titulo: "Envíos",
        texto:
          "Península desde 4,50 €; Baleares, Canarias y UE con precio calculado en el checkout. Todos los envíos llevan seguimiento.",
      },
    ],
  },
  {
    slug: "devoluciones",
    label: "Política de devoluciones",
    labelCorto: "Devoluciones",
    titulo: "Política de devoluciones",
    entradilla:
      "Tienes 14 días naturales para devolver una pieza del catálogo sin dar explicaciones.",
    bloques: [
      {
        titulo: "Plazo y estado",
        texto:
          "Cuentan 14 días desde que recibes el paquete. La pieza debe volver sin usar y con su caja.",
      },
      {
        titulo: "Cómo se hace",
        texto:
          "Escríbeme a hola@eterlia.es y te doy la dirección de devolución. El transporte de vuelta lo pagas tú salvo que la pieza llegara defectuosa.",
      },
      {
        titulo: "Devolución del importe",
        texto:
          "Te devuelvo el importe por el mismo medio de pago en un máximo de 14 días desde que recibo la pieza.",
      },
      {
        titulo: "Encargos por medida",
        texto:
          "Los encargos personalizados están excluidos del derecho de desistimiento, salvo defecto del taller. Antes del pulido final te mando foto para confirmar el color y evitar sorpresas.",
      },
    ],
  },
];

export function getDocumentoLegal(slug: string): DocumentoLegal | undefined {
  return documentosLegales.find((d) => d.slug === slug);
}
