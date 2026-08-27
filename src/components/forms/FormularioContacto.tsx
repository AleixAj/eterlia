"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Checkbox, Input, Textarea } from "@/components/ui/Field";

/**
 * Contacto general. Como el de encargos, todavía no envía a ningún sitio:
 * confirma en pantalla hasta que haya endpoint.
 */
export function FormularioContacto() {
  const [enviado, setEnviado] = useState(false);
  const [consiento, setConsiento] = useState(false);

  if (enviado) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-sm border border-hairline p-6 md:p-8">
        <h2 className="display-italic m-0 text-h2">Mensaje enviado</h2>
        <p className="m-0 max-w-[440px] text-base">
          Lo leo yo. Te contesto en 24–48 h al correo que me has dejado.
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-4 md:gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        setEnviado(true);
      }}
    >
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

      <Textarea
        label="Mensaje"
        name="mensaje"
        rows={5}
        required
        placeholder="Dime en qué puedo ayudarte."
      />

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
            y acepto que uses mis datos para responderme.
          </>
        }
      />

      <div className="flex flex-wrap items-center gap-5">
        <Button type="submit" size="lg">
          Enviar mensaje
        </Button>
        <span className="text-caption text-ink-400">
          Para encargos, mejor el formulario de encargos.
        </span>
      </div>
    </form>
  );
}
