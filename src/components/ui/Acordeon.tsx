"use client";

import { useState } from "react";
import type { Faq } from "@/data/contenido";

/**
 * Preguntas frecuentes. El signo + / − es tipografía, no un icono, y solo hay
 * una pregunta abierta a la vez.
 */
export function Acordeon({ items }: { items: Faq[] }) {
  const [abierta, setAbierta] = useState(0);

  return (
    <div className="flex flex-col border-t border-hairline">
      {items.map((item, i) => {
        const estaAbierta = abierta === i;
        return (
          <div key={item.pregunta} className="border-b border-hairline">
            <button
              type="button"
              onClick={() => setAbierta(estaAbierta ? -1 : i)}
              aria-expanded={estaAbierta}
              className="flex w-full cursor-pointer items-baseline justify-between gap-5 py-5 text-left"
            >
              <h3 className="m-0 text-h4">{item.pregunta}</h3>
              <span aria-hidden className="shrink-0 text-base text-granate-900">
                {estaAbierta ? "−" : "+"}
              </span>
            </button>
            {estaAbierta ? (
              <p className="m-0 max-w-[560px] pb-[22px] text-sm">{item.respuesta}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
