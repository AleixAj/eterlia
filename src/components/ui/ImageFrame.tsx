import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Hueco de imagen de producto.
 *
 * Todavía no hay fotografía real, así que el marco muestra la rosa al 12% sobre
 * ocre alterno: un hueco que se reconoce como vacío, no un rectángulo gris que
 * finge ser contenido. Cuando lleguen las fotos basta con pasar `src` y `alt`.
 *
 * Proporciones del sistema: 1/1.2 para el catálogo, 4/3 para proceso,
 * 1/1 para miniaturas.
 */
export type Ratio = "1/1" | "1/1.2" | "1/1.15" | "4/3";

const ratios: Record<Ratio, string> = {
  "1/1": "aspect-square",
  "1/1.2": "aspect-[1/1.2]",
  "1/1.15": "aspect-[1/1.15]",
  "4/3": "aspect-[4/3]",
};

export function ImageFrame({
  ratio = "1/1.2",
  src,
  alt = "",
  /** Ancho de la rosa dentro del marco, en % del marco. */
  markWidth = 34,
  className,
  children,
}: {
  ratio?: Ratio;
  src?: string;
  alt?: string;
  markWidth?: number;
  className?: string;
  /** Para superponer una etiqueta (por ejemplo «Agotado»). */
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative grid place-items-center overflow-hidden rounded-sm",
        "border border-hairline bg-ocre-200",
        ratios[ratio],
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-[420ms] ease-entrance group-hover:scale-[1.02]"
        />
      ) : (
        <Image
          src="/assets/rose-mark.png"
          alt=""
          width={223}
          height={307}
          style={{ width: `${markWidth}%` }}
          className="h-auto opacity-[0.12]"
          aria-hidden
        />
      )}
      {children}
    </div>
  );
}
