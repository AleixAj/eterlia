import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { RoseDivider } from "@/components/ui/RoseDivider";
import { taller } from "@/data/contenido";

export const metadata: Metadata = {
  title: "El taller",
  description:
    "Cómo se hacen las piezas de Eterlia: resina epoxi, flores secas y cinco granos de lija, en un taller de una persona en Sevilla.",
};

export default function Taller() {
  return (
    <>
      <Section size="tight" width="narrow" className="pb-8 md:pb-12">
        <div className="flex flex-col gap-4 md:gap-7">
          <span className="et-overline text-ink-600">Taller en Sevilla</span>
          <h1 className="display-italic m-0 text-[clamp(34px,4.5vw,58px)] leading-[1.08]">
            El taller
          </h1>
          <p className="m-0 text-lead">{taller.entradilla}</p>
        </div>
      </Section>

      {/* Proceso: proporción 4:3, la del sistema para fotos de taller */}
      <Section size="flush" className="pb-10 md:pb-[72px]">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
          {taller.fotos.map((foto) => (
            <figure key={foto.pie} className="m-0 flex flex-col gap-2.5">
              <ImageFrame ratio="4/3" markWidth={26} />
              <figcaption className="text-caption text-ink-400">{foto.pie}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section size="flush" width="narrow">
        <div className="flex flex-col gap-5 md:gap-7">
          <h2 className="display-italic m-0 text-h2">Cómo trabajo</h2>
          {taller.parrafos.map((p) => (
            <p key={p.slice(0, 24)} className="m-0 text-base">
              {p}
            </p>
          ))}

          <RoseDivider className="my-2" width={180} />

          <p className="display-italic m-0 text-[clamp(22px,2.4vw,30px)] leading-tight text-granate-900">
            {taller.cita}
          </p>
        </div>
      </Section>

      <Section tone="alt" size="tight">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex max-w-[520px] flex-col gap-2.5">
            <h2 className="display-italic m-0 text-h2">Del taller a tu casa</h2>
            <p className="m-0 text-sm">
              Mira lo que hay terminado ahora mismo o cuéntame qué pieza tienes en la
              cabeza.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/catalogo" size="lg">
              Ver catálogo
            </ButtonLink>
            <ButtonLink href="/encargos" variant="secondary" size="lg">
              Hacer un encargo
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
