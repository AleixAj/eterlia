import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalNav } from "@/components/legal/LegalNav";
import { Section } from "@/components/layout/Section";
import { documentosLegales, getDocumentoLegal, titular } from "@/data/legal";

type Props = { params: Promise<{ doc: string }> };

export function generateStaticParams() {
  return documentosLegales.map((d) => ({ doc: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { doc } = await params;
  const documento = getDocumentoLegal(doc);
  if (!documento) return {};
  return { title: documento.titulo, description: documento.entradilla };
}

export default async function Legal({ params }: Props) {
  const { doc } = await params;
  const documento = getDocumentoLegal(doc);
  if (!documento) notFound();

  return (
    <Section size="tight">
      <div className="flex flex-wrap items-start gap-7 md:gap-14">
        <LegalNav />

        <article className="flex max-w-narrow flex-1 basis-[460px] flex-col gap-5 md:gap-6">
          <span className="et-overline text-ink-600">Información legal</span>
          <h1 className="display-italic m-0 text-[clamp(30px,3.4vw,42px)] leading-[1.12]">
            {documento.titulo}
          </h1>
          <p className="m-0 text-base">{documento.entradilla}</p>

          {documento.bloques.map((bloque) => (
            <section
              key={bloque.titulo}
              className="flex flex-col gap-2.5 border-t border-hairline pt-5"
            >
              <h2 className="m-0 text-h4">{bloque.titulo}</h2>
              <p className="m-0 text-sm">{bloque.texto}</p>
            </section>
          ))}

          <div className="mt-3 flex flex-col gap-2 rounded-sm bg-ocre-200 p-6">
            <span className="et-overline text-ink-600">Titular</span>
            <p className="m-0 text-sm">
              {titular.nombre} · NIF {titular.nif} · {titular.domicilio} ·{" "}
              {titular.email}. {titular.nota}
            </p>
          </div>
        </article>
      </div>
    </Section>
  );
}
