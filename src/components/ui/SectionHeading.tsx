import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Antetítulo en versalitas + título en Playfair cursiva + descripción.
 * La columna de texto no pasa de 620px, como manda el sistema.
 */
export function SectionHeading({
  overline,
  title,
  description,
  as: Tag = "h2",
  align = "left",
  className,
}: {
  overline?: string;
  title: ReactNode;
  description?: ReactNode;
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <header
      className={cn(
        "flex max-w-prose flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {overline ? <span className="et-overline text-ink-600">{overline}</span> : null}
      <Tag className="display-italic m-0 text-h2">{title}</Tag>
      {description ? (
        <p className="m-0 text-base text-ink-900">{description}</p>
      ) : null}
    </header>
  );
}
