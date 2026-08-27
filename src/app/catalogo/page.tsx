import type { Metadata } from "next";
import { CatalogoFiltrable } from "@/components/catalog/CatalogoFiltrable";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { contarPiezas, piezas } from "@/data/piezas";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Piezas de resina terminadas y listas para salir del taller. Cada pieza es única.",
};

export default function Catalogo() {
  return (
    <>
      <Section size="tight" className="pb-6 md:pb-8">
        <div className="flex flex-col gap-5 md:gap-8">
          <span className="et-overline text-ink-600">
            {contarPiezas(piezas.length)} en el taller
          </span>
          <h1 className="display-italic m-0 text-[clamp(34px,4vw,50px)] leading-[1.1]">
            Catálogo
          </h1>
          <p className="m-0 max-w-prose text-base">
            Todo lo que ves está terminado y listo para salir. Cada pieza es única:
            cuando se va, se va.
          </p>
        </div>
      </Section>

      <Section size="flush">
        <CatalogoFiltrable />
      </Section>

      <Section tone="alt" size="tight">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex max-w-[520px] flex-col gap-2.5">
            <h2 className="display-italic m-0 text-h2">¿No está lo que buscas?</h2>
            <p className="m-0 text-sm">
              Puedo hacerla a medida: color, largo y material se eligen contigo. Sin
              compromiso: primero te paso presupuesto.
            </p>
          </div>
          <ButtonLink href="/encargos" size="lg">
            Hacer un encargo
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
