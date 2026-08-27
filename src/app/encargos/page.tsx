import type { Metadata } from "next";
import Image from "next/image";
import { FormularioEncargo } from "@/components/forms/FormularioEncargo";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { plazosEncargo, procesoEncargo } from "@/data/contenido";

export const metadata: Metadata = {
  title: "Encargos",
  description:
    "Encargos de bisutería de resina por medida: color, tamaño y material se eligen contigo. Presupuesto en 24–48 h.",
};

export default function Encargos() {
  return (
    <>
      <Section size="tight" className="pb-8 md:pb-12">
        <div className="flex flex-col gap-4 md:gap-7">
          <span className="et-overline text-ink-600">Encargos por medida</span>
          <h1 className="display-italic m-0 max-w-[800px] text-[clamp(34px,4.5vw,58px)] leading-[1.08]">
            Una pieza pensada contigo
          </h1>
          <p className="m-0 max-w-prose text-lead">
            Cerca de la mitad de lo que sale del taller es un encargo. Si tienes una
            flor de un ramo que quieres conservar, se puede sellar en resina;
            escríbeme antes de que se estropee.
          </p>
        </div>
      </Section>

      <Section tone="alt" size="tight">
        <div className="flex flex-col gap-7 md:gap-12">
          <SectionHeading overline="Cómo funciona" title="Cuatro pasos" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-10 lg:grid-cols-4">
            {procesoEncargo.map((paso) => (
              <div key={paso.numero} className="flex flex-col gap-2.5">
                <span className="font-serif text-[clamp(38px,3.6vw,56px)] leading-none text-granate-900 opacity-55">
                  {paso.numero}
                </span>
                <h3 className="m-0 text-h4">{paso.titulo}</h3>
                <p className="m-0 text-sm">{paso.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-start gap-8 md:gap-16">
          <div className="max-w-prose flex-1 basis-[380px]">
            <FormularioEncargo />
          </div>

          <aside className="flex max-w-[360px] flex-1 basis-[260px] flex-col gap-5 md:gap-7">
            <div className="flex flex-col gap-[18px] rounded-sm border border-hairline p-5 md:p-8">
              <h3 className="m-0 text-h4">Plazos aproximados</h3>
              <div className="flex flex-col border-t border-hairline">
                {plazosEncargo.map((p) => (
                  <div
                    key={p.concepto}
                    className="flex justify-between gap-4 border-b border-hairline py-3"
                  >
                    <span className="text-sm">{p.concepto}</span>
                    <span className="text-sm text-ink-600">{p.plazo}</span>
                  </div>
                ))}
              </div>
              <p className="m-0 text-caption text-ink-400">
                En noviembre y diciembre el taller va más lento: cuenta con una
                semana más.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-sm bg-ocre-200 p-5 md:p-8">
              <Image
                src="/assets/rose-mark.png"
                alt=""
                width={223}
                height={307}
                className="h-[26px] w-auto self-start opacity-60"
                aria-hidden
              />
              <p className="m-0 text-sm">
                Los encargos con material propio (una flor, un pétalo, arena de un
                sitio concreto) se envían al taller antes de empezar. Te explico cómo
                en el presupuesto.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
