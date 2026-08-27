/** Datos fijos del sitio: navegación, contacto y textos de pie. */

import { documentosLegales } from "@/data/legal";

export const site = {
  nombre: "Eterlia",
  descripcion:
    "Bisutería de resina hecha a mano en un taller de Sevilla. Venta solo online.",
  email: "hola@eterlia.es",
  instagram: { usuario: "@eterlia", url: "https://instagram.com/eterlia" },
  respuesta: "Respondo en 24–48 h.",
  copyright: "© 2026 Eterlia. Taller en Sevilla.",
} as const;

export const navegacion = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/encargos", label: "Encargos" },
  { href: "/taller", label: "El taller" },
  { href: "/contacto", label: "Contacto" },
] as const;

export interface GrupoPie {
  titulo: string;
  enlaces: { href: string; label: string }[];
}

export const enlacesPie: GrupoPie[] = [
  {
    titulo: "Tienda",
    enlaces: [
      { href: "/catalogo", label: "Catálogo" },
      { href: "/encargos", label: "Encargos por medida" },
      { href: "/taller", label: "El taller" },
      { href: "/contacto", label: "Contacto" },
    ],
  },
  {
    titulo: "Legal",
    // Sale de los propios documentos: si se añade o se quita uno, el pie sigue.
    enlaces: documentosLegales.map((d) => ({
      href: `/legal/${d.slug}`,
      label: d.labelCorto,
    })),
  },
];
