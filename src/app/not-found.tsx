import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { RoseDivider } from "@/components/ui/RoseDivider";

export default function NoEncontrado() {
  return (
    <Section width="narrow">
      <div className="flex flex-col items-start gap-5">
        <span className="et-overline text-ink-600">Página no encontrada</span>
        <h1 className="display-italic m-0 text-h1">Aquí no hay nada</h1>
        <p className="m-0 text-base">
          El enlace que has seguido no lleva a ninguna parte. Puede que la pieza ya
          se haya vendido y la haya retirado del catálogo.
        </p>
        <RoseDivider width={140} className="my-2" />
        <ButtonLink href="/catalogo">Ver el catálogo</ButtonLink>
      </div>
    </Section>
  );
}
