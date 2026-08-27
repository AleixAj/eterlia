import { redirect } from "next/navigation";
import { documentosLegales } from "@/data/legal";

/** `/legal` a secas no es un documento: lleva al primero del índice. */
export default function LegalIndice() {
  redirect(`/legal/${documentosLegales[0].slug}`);
}
