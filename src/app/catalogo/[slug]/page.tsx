import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GaleriaPieza } from "@/components/catalog/GaleriaPieza";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { Section } from "@/components/layout/Section";
import { Button, ButtonLink } from "@/components/ui/Button";
import { IconFlechaIzquierda } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import {
  categorias,
  formatPrecio,
  getPieza,
  piezas,
  piezasRelacionadas,
} from "@/data/piezas";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return piezas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pieza = getPieza(slug);
  if (!pieza) return {};
  return { title: pieza.nombre, description: pieza.descripcion };
}

export default async function Ficha({ params }: Props) {
  const { slug } = await params;
  const pieza = getPieza(slug);
  if (!pieza) notFound();

  const categoria = categorias.find((c) => c.id === pieza.categoria)?.label;
  const relacionadas = piezasRelacionadas(pieza);

  const filas: [string, string][] = [
    ["Materiales", pieza.ficha.materiales],
    ["Medidas", pieza.ficha.medidas],
    ["Envío", pieza.ficha.envio],
  ];

  return (
    <>
      <Section size="flush" className="pt-5 pb-0 md:pt-8 md:pb-0">
        <Link
          href="/catalogo"
          className="et-overline inline-flex items-center gap-2 text-granate-900 transition-colors duration-200 ease-standard hover:text-granate-700"
        >
          <IconFlechaIzquierda className="opacity-85" />
          Volver al catálogo
        </Link>
      </Section>

      <Section size="tight">
        <div className="flex flex-wrap items-start gap-8 md:gap-16">
          <div className="flex-1 basis-[360px]">
            <GaleriaPieza
              nombre={pieza.nombre}
              fotos={pieza.fotos}
              agotada={pieza.agotada}
            />
          </div>

          <div className="flex max-w-[520px] flex-1 basis-[340px] flex-col items-start gap-5 md:gap-7">
            <div className="flex flex-wrap gap-2.5">
              <Tag tone="brand">Pieza única</Tag>
              {categoria ? <Tag>{categoria}</Tag> : null}
            </div>

            <h1 className="display-italic m-0 text-[clamp(34px,4vw,50px)] leading-[1.1]">
              {pieza.nombre}
            </h1>
            <span className="font-serif text-h4 tracking-heading text-ink-900">
              {formatPrecio(pieza.precio)}
            </span>
            <p className="m-0 text-base">{pieza.descripcion}</p>

            <dl className="m-0 flex w-full flex-col border-t border-hairline">
              {filas.map(([clave, valor]) => (
                <div
                  key={clave}
                  className="flex flex-col gap-1 border-b border-hairline py-3.5 sm:flex-row sm:gap-6"
                >
                  <dt className="et-overline m-0 text-ink-600 sm:basis-[130px] sm:shrink-0">
                    {clave}
                  </dt>
                  <dd className="m-0 text-sm">{valor}</dd>
                </div>
              ))}
            </dl>

            <div className="flex items-start gap-3.5 rounded-sm border border-hairline bg-ocre-200 p-5">
              <Image
                src="/assets/rose-mark.png"
                alt=""
                width={223}
                height={307}
                className="h-6 w-auto shrink-0 opacity-60"
                aria-hidden
              />
              <p className="m-0 text-sm">
                Solo existe esta. La flor y la mezcla de resina no se repiten, así
                que una pieza parecida nunca será igual.
              </p>
            </div>

            {pieza.agotada ? (
              <div className="flex w-full flex-col items-start gap-3.5">
                <p className="m-0 text-sm text-ink-600">
                  Esta pieza ya se ha vendido. Puedo hacer otra con la misma técnica
                  y otra flor; el color y el dibujo cambiarán.
                </p>
                <ButtonLink href="/encargos" size="lg" fullWidth>
                  Encargar una parecida
                </ButtonLink>
                <ButtonLink href="/contacto" variant="ghost">
                  Avisarme si repito el modelo
                </ButtonLink>
              </div>
            ) : (
              <div className="flex w-full flex-col items-start gap-3.5">
                {/* El carrito llega con las páginas de compra; de momento el
                    botón está montado pero sin destino. */}
                <Button size="lg" fullWidth disabled>
                  Añadir al carrito
                </Button>
                <ButtonLink href="/encargos" variant="ghost">
                  Encargar una pieza parecida
                </ButtonLink>
              </div>
            )}
          </div>
        </div>
      </Section>

      <Section tone="alt" size="tight">
        <div className="flex flex-col gap-6 md:gap-10">
          <SectionHeading
            overline="También en el taller"
            title="Otras piezas disponibles"
          />
          <ProductGrid piezas={relacionadas} />
        </div>
      </Section>
    </>
  );
}
