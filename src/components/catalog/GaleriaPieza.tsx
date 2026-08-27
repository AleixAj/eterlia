"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/cn";

/**
 * Galería de la ficha. Todavía no hay fotos: la vista grande y las miniaturas
 * son huecos con la proporción definitiva (1:1,2 la principal, 1:1 las
 * miniaturas), y el selector ya funciona para cuando lleguen.
 */
export function GaleriaPieza({
  nombre,
  fotos,
  agotada,
}: {
  nombre: string;
  fotos: number;
  agotada?: boolean;
}) {
  const [activa, setActiva] = useState(0);
  const vistas = ["frontal", "perfil", "detalle del pulido", "puesta"].slice(0, fotos);

  return (
    <div className="flex flex-col gap-4">
      <ImageFrame ratio="1/1.2" markWidth={32}>
        {agotada ? (
          <span className="absolute top-4 left-4">
            <Tag tone="solid">Agotado</Tag>
          </span>
        ) : null}
      </ImageFrame>

      <div className="grid grid-cols-4 gap-3">
        {vistas.map((vista, i) => (
          <button
            key={vista}
            type="button"
            onClick={() => setActiva(i)}
            aria-label={`Ver ${nombre}, vista ${vista}`}
            aria-pressed={activa === i}
            className={cn(
              "grid aspect-square cursor-pointer place-items-center rounded-sm bg-ocre-200",
              "transition-colors duration-200 ease-standard",
              activa === i
                ? "border-strong border-granate-900"
                : "border border-hairline",
            )}
          >
            <Image
              src="/assets/rose-mark.png"
              alt=""
              width={223}
              height={307}
              className="h-auto w-[44%] opacity-[0.12]"
              aria-hidden
            />
          </button>
        ))}
      </div>

      <p className="m-0 text-caption text-ink-400">
        Fotografía de producto pendiente — {vistas.length} vistas:{" "}
        {vistas.join(", ")}.
      </p>
    </div>
  );
}
