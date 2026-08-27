import Link from "next/link";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Tag } from "@/components/ui/Tag";
import { formatPrecio, type Pieza } from "@/data/piezas";

/**
 * Tarjeta de catálogo: marco 1:1,2, nombre en Playfair redonda (la cursiva
 * costaría legibilidad a este tamaño), material y precio. Al pasar el ratón
 * solo cambia el color del nombre y la foto sube un 2% dentro del marco.
 */
export function ProductCard({ pieza }: { pieza: Pieza }) {
  return (
    <Link
      href={`/catalogo/${pieza.slug}`}
      className="group flex flex-col gap-4 text-inherit"
    >
      <ImageFrame ratio="1/1.2" markWidth={38}>
        {pieza.agotada ? (
          <span className="absolute top-3 left-3">
            <Tag tone="solid">Agotado</Tag>
          </span>
        ) : null}
      </ImageFrame>

      <div className="flex flex-col gap-1.5">
        <span className="font-serif text-h4 tracking-heading text-granate-900 transition-colors duration-200 ease-standard group-hover:text-granate-700">
          {pieza.nombre}
        </span>
        <span className="text-caption text-ink-400">{pieza.material}</span>
        <span className="text-sm text-ink-900">{formatPrecio(pieza.precio)}</span>
      </div>
    </Link>
  );
}
