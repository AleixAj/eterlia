/**
 * Textos largos de las páginas: proceso, taller y preguntas frecuentes.
 * Se editan aquí, no dentro de los componentes.
 */

export interface Paso {
  numero: string;
  titulo: string;
  texto: string;
}

/** Portada: cómo se hace una pieza. */
export const procesoTaller: Paso[] = [
  {
    numero: "01",
    titulo: "Molde y color",
    texto:
      "Preparo el molde de silicona y mezclo el pigmento a mano. Anoto la proporción para poder acercarme otra vez, nunca para clonarla.",
  },
  {
    numero: "02",
    titulo: "Curado",
    texto:
      "La resina tarda entre 24 y 72 h en curar según el grosor de la pieza. Durante ese tiempo el molde no se toca.",
  },
  {
    numero: "03",
    titulo: "Lijado y pulido",
    texto:
      "Cinco granos de lija y pulido final. Es la parte lenta y la que decide si la pieza sale del taller o vuelve a empezar.",
  },
];

/** Encargos: los cuatro pasos de un encargo por medida. */
export const procesoEncargo: Paso[] = [
  {
    numero: "01",
    titulo: "La idea",
    texto:
      "Me cuentas qué quieres, para cuándo y si hay un material que deba entrar en la pieza. Una foto de referencia ayuda mucho.",
  },
  {
    numero: "02",
    titulo: "Presupuesto",
    texto:
      "Te escribo en 24–48 h con una propuesta, el precio y el plazo. Sin compromiso: si no encaja, se queda ahí.",
  },
  {
    numero: "03",
    titulo: "Elaboración",
    texto:
      "Molde, colada, curado, lijado y pulido. Te mando una foto antes del pulido final para confirmar el color.",
  },
  {
    numero: "04",
    titulo: "Envío",
    texto:
      "Sale envuelta a mano con certificado de pieza única. Península en 24–72 h con seguimiento.",
  },
];

export const plazosEncargo: { concepto: string; plazo: string }[] = [
  { concepto: "Presupuesto", plazo: "24–48 h" },
  { concepto: "Colada y curado", plazo: "3–7 días" },
  { concepto: "Lijado y pulido", plazo: "2–4 días" },
  { concepto: "Envío península", plazo: "24–72 h" },
];

export const tiposDeEncargo = [
  { value: "", label: "Elige una opción" },
  { value: "collar", label: "Collar" },
  { value: "pendientes", label: "Pendientes" },
  { value: "llavero", label: "Llavero" },
  { value: "anillo", label: "Anillo" },
  { value: "otro", label: "Otra cosa / no lo sé aún" },
];

/** Página del taller. */
export const taller = {
  entradilla:
    "Me llamo Andrea y hago todas las piezas de Eterlia yo sola, en una habitación de casa con dos mesas: una para colar y otra para lijar.",
  fotos: [
    { pie: "La mesa de colada, con los moldes de silicona y los pigmentos." },
    { pie: "Flores secándose entre papel antes de entrar en resina." },
  ],
  parrafos: [
    "Empecé en 2021 secando flores del jardín de mi madre porque no quería tirarlas. Las primeras piezas salieron con burbujas y torcidas; guardo una en la estantería para acordarme. Ahora seco casi todo lo que uso: estatice, hortensia, verbena, hojas de olivo y de higuera.",
    "Trabajo con resina epoxi de dos componentes, sin aceleradores. Cada colada tarda entre 24 y 72 horas en curar según el grosor, y ese tiempo no se puede recortar. Después vienen cinco granos de lija, del 400 al 3000, y el pulido. Es la parte que más tiempo lleva y la que decide si la pieza sale del taller.",
    "No hay tienda física ni mercadillos fijos: todo se vende aquí. Los cierres, las cadenas y las anillas son de acero inoxidable o latón, y los compro a dos proveedores pequeños de Andalucía. Cuando una pieza se rompe, escríbeme antes de tirarla: casi siempre se puede arreglar.",
  ],
  cita: "La resina cura a su ritmo. Aprendí antes a esperar que a lijar.",
};

/** Contacto. */
export interface Faq {
  pregunta: string;
  respuesta: string;
}

export const faqs: Faq[] = [
  {
    pregunta: "¿Cuánto tarda en llegar un pedido?",
    respuesta:
      "Las piezas del catálogo salen del taller en 24–72 h y la península tarda otras 24–48 h. Baleares y Canarias, algo más.",
  },
  {
    pregunta: "¿Puedo pedir una pieza igual que una agotada?",
    respuesta:
      "Puedo hacer otra con la misma técnica, pero no será igual: la flor y la mezcla de resina cambian en cada colada.",
  },
  {
    pregunta: "¿Se puede sellar una flor de mi ramo?",
    respuesta:
      "Sí. Escríbeme antes de que se estropee y te digo cómo secarla y enviarla al taller.",
  },
  {
    pregunta: "¿La resina se pone amarilla?",
    respuesta:
      "Uso resina con filtro UV, pero conviene guardar la pieza fuera del sol directo y quitársela para nadar o ducharse.",
  },
  {
    pregunta: "¿Qué pasa si se rompe?",
    respuesta:
      "Escríbeme antes de tirarla. Muchas roturas se arreglan y solo cobro el material y el envío.",
  },
  {
    pregunta: "¿Puedo devolver una pieza?",
    respuesta:
      "Tienes 14 días para devolver una pieza del catálogo. Los encargos por medida no se pueden devolver salvo defecto del taller.",
  },
];
