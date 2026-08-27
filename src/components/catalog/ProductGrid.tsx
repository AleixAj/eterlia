import { ProductCard } from "@/components/catalog/ProductCard";
import type { Pieza } from "@/data/piezas";
import { cn } from "@/lib/cn";

/** Rejilla del sistema: 3 en escritorio, 2 en tablet, 1 en móvil. */
export function ProductGrid({
  piezas,
  className,
}: {
  piezas: Pieza[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8",
        className,
      )}
    >
      {piezas.map((p) => (
        <ProductCard key={p.slug} pieza={p} />
      ))}
    </div>
  );
}
