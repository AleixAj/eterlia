import type { Metadata } from "next";
import { FormularioContacto } from "@/components/forms/FormularioContacto";
import { Section } from "@/components/layout/Section";
import { Acordeon } from "@/components/ui/Acordeon";
import { IconCorreo, IconInstagram } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/contenido";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbeme a hola@eterlia.es. Contesto yo, en 24–48 h. No hay tienda física ni recogida en el taller.",
};

const enlaceContacto =
  "flex items-center gap-3 text-base text-granate-900 transition-colors " +
  "duration-200 ease-standard hover:text-granate-700";

export default function Contacto() {
  return (
    <>
      <Section size="tight" className="pb-8 md:pb-12">
        <div className="flex flex-col gap-4 md:gap-7">
          <span className="et-overline text-ink-600">Escríbeme</span>
          <h1 className="display-italic m-0 text-[clamp(34px,4.5vw,58px)] leading-[1.08]">
            Contacto
          </h1>
          <p className="m-0 max-w-prose text-lead">
            Contesto yo, no hay nadie más. Si escribes por la noche lo verás por la
            mañana.
          </p>
        </div>
      </Section>

      <Section size="flush">
        <div className="flex flex-wrap items-start gap-8 md:gap-16">
          <div className="flex max-w-[380px] flex-1 basis-[280px] flex-col gap-5 md:gap-7">
            <div className="flex flex-col gap-3.5 border-t border-hairline pt-5">
              <a href={`mailto:${site.email}`} className={enlaceContacto}>
                <IconCorreo size={17} className="opacity-85" />
                {site.email}
              </a>
              <a href={site.instagram.url} className={enlaceContacto}>
                <IconInstagram size={17} className="opacity-85" />
                {site.instagram.usuario}
              </a>
            </div>

            <div className="flex flex-col gap-2.5 rounded-sm bg-ocre-200 p-6">
              <span className="et-overline text-ink-600">Horario del taller</span>
              <p className="m-0 text-sm">
                Lunes a viernes, mañanas. Respondo en 24–48 h. No hay tienda física
                ni recogida en el taller.
              </p>
            </div>
          </div>

          <div className="max-w-prose flex-1 basis-[380px]">
            <FormularioContacto />
          </div>
        </div>
      </Section>

      <Section tone="alt" width="narrow">
        <div className="flex flex-col gap-6 md:gap-9">
          <SectionHeading
            overline="Preguntas frecuentes"
            title="Lo que más me preguntáis"
          />
          <Acordeon items={faqs} />
        </div>
      </Section>
    </>
  );
}
