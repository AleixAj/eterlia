import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Banda horizontal a ancho completo con el contenedor de 1200px dentro.
 *
 * `tone="alt"` pinta el ocre alterno. Regla del sistema: como mucho dos colores
 * de fondo por página, alternando ocre y ocre alterno al bajar. Nunca tres.
 */
export function Section({
  children,
  tone = "page",
  size = "normal",
  width = "wide",
  className,
  as: Tag = "section",
}: {
  children: ReactNode;
  tone?: "page" | "alt";
  /** `tight` = 72px de aire; `normal` = 96px; `flush` = sin aire arriba. */
  size?: "normal" | "tight" | "flush";
  width?: "wide" | "narrow";
  className?: string;
  as?: ElementType;
}) {
  const padding = {
    normal: "py-12 md:py-24",
    tight: "py-10 md:py-[72px]",
    flush: "pt-0 pb-12 md:pb-24",
  }[size];

  return (
    <Tag
      className={cn(
        "w-full px-5 md:px-10",
        tone === "alt" ? "bg-ocre-200" : "bg-page",
        padding,
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto w-full",
          width === "narrow" ? "max-w-narrow" : "max-w-wide",
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
