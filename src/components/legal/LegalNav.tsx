"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { documentosLegales, ultimaActualizacion } from "@/data/legal";
import { cn } from "@/lib/cn";

/**
 * Índice lateral de los documentos legales. El documento activo se marca con un
 * filete granate de 1,5px a la izquierda; el resto, con el hairline de abajo.
 */
export function LegalNav() {
  const pathname = usePathname();

  return (
    <nav className="flex w-full shrink-0 basis-[240px] flex-col border-t border-hairline md:w-auto md:max-w-[240px] md:flex-1">
      {documentosLegales.map((doc) => {
        const activo = pathname === `/legal/${doc.slug}`;
        return (
          <Link
            key={doc.slug}
            href={`/legal/${doc.slug}`}
            aria-current={activo ? "page" : undefined}
            className={cn(
              "border-b border-hairline py-3.5 pl-3.5 text-sm transition-colors duration-200 ease-standard",
              "border-l-strong",
              activo
                ? "border-l-granate-900 text-granate-900"
                : "border-l-transparent text-ink-600 hover:text-granate-700",
            )}
          >
            {doc.label}
          </Link>
        );
      })}
      <p className="mt-6 mb-0 text-caption text-ink-400">
        Última actualización: {ultimaActualizacion}.
      </p>
    </nav>
  );
}
