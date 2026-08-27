import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { RoseDivider } from "@/components/ui/RoseDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { procesoTaller } from "@/data/contenido";
import { piezas, piezasDestacadas } from "@/data/piezas";

const enlaceVersalitas =
  "et-overline border-b border-hairline pb-1.5 text-granate-900 transition-colors " +
  "duration-200 ease-standard hover:border-granate-700 hover:text-granate-700";

export default function Inicio() {
  return (
    <>
      {/* Portada: copia a la izquierda, hueco de imagen a la derecha, 1:1 */}
      <Section size="tight">
        <div className="flex flex-wrap items-center gap-8 md:gap-16">
          <div className="flex flex-1 basis-[340px] flex-col items-start gap-5 md:gap-7">
            <Image
              src="/assets/logo-lockup.png"
              alt="Eterlia"
              width={464}
              height={383}
              priority
              className="h-[70px] w-auto md:h-24"
            />
            <span className="et-overline text-ink-600">Taller en Sevilla</span>
            <h1 className="display-italic m-0 text-[clamp(40px,6vw,78px)] leading-display">
              Hecho a mano, pieza a pieza
            </h1>
            <p className="m-0 max-w-[480px] text-lead">
              Collares, pendientes y llaveros colados en resina. Cada pieza se lija y
              se pule a mano, así que no hay dos iguales.
            </p>
            <div className="mt-2 flex flex-wrap gap-4">
              <ButtonLink href="/catalogo" size="lg">
                Ver catálogo
              </ButtonLink>
              <ButtonLink href="/encargos" variant="secondary" size="lg">
                Encargar una pieza
              </ButtonLink>
            </div>
          </div>

          <div className="flex flex-1 basis-[320px] flex-col gap-3">
            <ImageFrame ratio="1/1.2" />
            <p className="m-0 text-caption text-ink-400">
              Fotografía de producto pendiente — «Aurora», collar de resina y flor
              seca.
            </p>
          </div>
        </div>
      </Section>

      <div className="bg-page px-5 md:px-10">
        <RoseDivider width={180} />
      </div>

      {/* Piezas disponibles */}
      <Section>
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              overline="En el taller ahora mismo"
              title="Piezas disponibles"
              description="Lo que hay ahora mismo en el taller. Cuando una pieza se va, se va."
            />
            <Link href="/catalogo" className={enlaceVersalitas}>
              Ver las {piezas.length} piezas
            </Link>
          </div>
          <ProductGrid piezas={piezasDestacadas} />
        </div>
      </Section>

      {/* Proceso */}
      <Section tone="alt">
        <div className="flex flex-col gap-8 md:gap-14">
          <SectionHeading
            overline="Cómo se hace"
            title="El proceso no se puede acelerar"
            description="La resina cura a su ritmo. Ese ritmo marca los plazos del taller y los tuyos."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
            {procesoTaller.map((paso) => (
              <div key={paso.numero} className="flex flex-col gap-3">
                {/* Los pasos se enumeran con cifras serif, nunca con iconos. */}
                <span className="font-serif text-[clamp(40px,4vw,62px)] leading-none text-granate-900 opacity-55">
                  {paso.numero}
                </span>
                <h3 className="m-0 text-h4">{paso.titulo}</h3>
                <p className="m-0 text-sm">{paso.texto}</p>
              </div>
            ))}
          </div>
          <Link href="/taller" className={`${enlaceVersalitas} self-start`}>
            Conocer el taller
          </Link>
        </div>
      </Section>

      {/* Dos caminos: comprar o encargar */}
      <Section>
        <div className="flex flex-wrap gap-7 md:gap-12">
          <div className="flex flex-1 basis-[300px] flex-col items-start gap-4 rounded-sm border border-hairline p-6 md:p-8">
            <span className="et-overline text-ink-600">Piezas listas</span>
            <h3 className="m-0 text-h3">Lo que hay en el taller</h3>
            <p className="m-0 text-sm">
              {piezas.length} piezas terminadas, con sus medidas y su precio. Salen
              del taller en 24–72 h.
            </p>
            <ButtonLink href="/catalogo">Ver catálogo</ButtonLink>
          </div>
          <div className="flex flex-1 basis-[300px] flex-col items-start gap-4 rounded-sm border border-hairline p-6 md:p-8">
            <span className="et-overline text-ink-600">Encargos por medida</span>
            <h3 className="m-0 text-h3">Una pieza pensada contigo</h3>
            <p className="m-0 text-sm">
              Cuéntame el color, la medida o la flor que quieres conservar. Sin
              compromiso: primero te paso presupuesto.
            </p>
            <ButtonLink href="/encargos" variant="secondary">
              Hacer un encargo
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
