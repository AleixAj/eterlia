"use client";

import { useState } from "react";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import {
  categorias,
  contarPiezas,
  piezasPorCategoria,
  type CategoriaId,
} from "@/data/piezas";
import { cn } from "@/lib/cn";

/** Filtros del catálogo. Son palabras, no botones con caja ni desplegables. */
export function CatalogoFiltrable() {
  const [activa, setActiva] = useState<CategoriaId | "todo">("todo");
  const visibles = piezasPorCategoria(activa);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-baseline justify-between gap-4 border-y border-hairline py-[18px]">
        <nav className="flex flex-wrap items-baseline gap-5 md:gap-8">
          {categorias.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiva(c.id)}
              aria-pressed={activa === c.id}
              className={cn(
                "et-overline cursor-pointer border-b pb-1.5 transition-colors duration-200 ease-standard",
                activa === c.id
                  ? "border-granate-900 text-granate-900"
                  : "border-transparent text-ink-600 hover:text-granate-700",
              )}
            >
              {c.label}
            </button>
          ))}
        </nav>
        <span className="text-caption text-ink-400">
          {contarPiezas(visibles.length)}
        </span>
      </div>

      <ProductGrid piezas={visibles} />
    </div>
  );
}
