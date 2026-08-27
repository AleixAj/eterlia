import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Separador de sección: dos filetes de arena con la rosa en medio al 75%.
 * Es uno de los cuatro usos permitidos de la rosa, y como mucho dos por página.
 */
export function RoseDivider({
  width = 220,
  className,
}: {
  /** Largo máximo de cada filete, en px. */
  width?: number;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full items-center justify-center gap-4", className)}>
      <span
        className="h-px shrink bg-sand-300"
        style={{ flexBasis: width }}
        aria-hidden
      />
      <Image
        src="/assets/rose-mark.png"
        alt=""
        width={223}
        height={307}
        className="h-[26px] w-auto opacity-75"
        aria-hidden
      />
      <span
        className="h-px shrink bg-sand-300"
        style={{ flexBasis: width }}
        aria-hidden
      />
    </div>
  );
}
