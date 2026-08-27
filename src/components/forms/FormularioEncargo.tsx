"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Checkbox, Input, Select, Textarea } from "@/components/ui/Field";
import { tiposDeEncargo } from "@/data/contenido";
import { site } from "@/data/site";

/**
 * Formulario de encargo.
 *
 * Todavía no hay backend: al enviar se muestra la confirmación en el sitio.
 * Cuando exista un endpoint, basta con reemplazar el cuerpo de `enviar`.
 */
export function FormularioEncargo() {
  const [enviado, setEnviado] = useState(false);
  const [consiento, setConsiento] = useState(false);

  if (enviado) {
    return (
      <div className="flex flex-col items-start gap-5 rounded-sm border border-hairline p-6 md:p-8">
        <h2 className="display-italic m-0 text-h2">Encargo recibido</h2>
        <p className="m-0 max-w-[440px] text-base">
          Te escribo en 24–48 h con una propuesta, el precio y el plazo. Si tienes
          fotos de referencia, respóndeme al correo y las miro.
        </p>
        <Link
          href="/catalogo"
          className="border-b border-hairline text-sm text-granate-900 transition-colors duration-200 ease-standard hover:border-granate-700 hover:text-granate-700"
        >
          Seguir viendo piezas
        </Link>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-5 md:gap-7"
      onSubmit={(e) => {
        e.preventDefault();
        setEnviado(true);
      }}
    >
      <h2 className="display-italic m-0 text-h2">Cuéntame tu encargo</h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input label="Nombre" name="nombre" placeholder="Cómo te llamas" required />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Para responderte"
          required
        />
      </div>

      <Select label="Tipo de pieza" name="tipo" options={tiposDeEncargo} />

      <Textarea
        label="Descripción"
        name="descripcion"
        rows={6}
        required
        placeholder="Color, largo, si hay una flor o un material que deba entrar en la pieza, y para cuándo la necesitas."
      />

      <div className="flex flex-col gap-2">
        <span className="et-overline text-ink-600">Imagen de referencia</span>
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-sm border border-hairline bg-field p-5">
          <p className="m-0 text-sm text-ink-400">JPG o PNG, hasta 5 MB. Opcional.</p>
          <Button variant="secondary" size="sm" disabled>
            Seleccionar archivo
          </Button>
        </div>
      </div>

      <Checkbox
        name="consentimiento"
        checked={consiento}
        onChange={(e) => setConsiento(e.target.checked)}
        required
        label={
          <>
            He leído la{" "}
            <Link href="/legal/privacidad" className="border-b border-hairline">
              política de privacidad
            </Link>{" "}
            y acepto que uses mis datos para responder a este encargo.
          </>
        }
      />

      <div className="flex flex-wrap items-center gap-5">
        <Button type="submit" size="lg">
          Enviar encargo
        </Button>
        <span className="text-caption text-ink-400">{site.respuesta}</span>
      </div>
    </form>
  );
}
