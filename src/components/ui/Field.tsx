"use client";

import { useId } from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Campos de formulario. El blanco aparece aquí y en ningún otro sitio del sitio.
 * Etiqueta en versalitas arriba, filete de arena que pasa a granate al enfocar.
 */

const control =
  "w-full rounded-sm border border-hairline bg-field px-[14px] py-3 text-base " +
  "text-ink-900 outline-none transition-colors duration-200 ease-standard " +
  "placeholder:text-ink-400 focus:border-granate-900";

function Wrapper({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label?: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      {label ? (
        <label htmlFor={id} className="et-overline text-ink-600">
          {label}
        </label>
      ) : null}
      {children}
      {error || hint ? (
        <span
          className={cn("text-caption", error ? "text-granate-700" : "text-ink-400")}
        >
          {error ?? hint}
        </span>
      ) : null}
    </div>
  );
}

type Común = { label?: string; hint?: string; error?: string };

export function Input({
  label,
  hint,
  error,
  className,
  id,
  ...rest
}: Común & ComponentPropsWithoutRef<"input">) {
  const auto = useId();
  const fieldId = id ?? auto;
  return (
    <Wrapper id={fieldId} label={label} hint={hint} error={error}>
      <input
        {...rest}
        id={fieldId}
        aria-invalid={error ? true : undefined}
        className={cn(control, error && "border-granate-700", className)}
      />
    </Wrapper>
  );
}

export function Textarea({
  label,
  hint,
  error,
  className,
  id,
  rows = 4,
  ...rest
}: Común & ComponentPropsWithoutRef<"textarea">) {
  const auto = useId();
  const fieldId = id ?? auto;
  return (
    <Wrapper id={fieldId} label={label} hint={hint} error={error}>
      <textarea
        {...rest}
        id={fieldId}
        rows={rows}
        aria-invalid={error ? true : undefined}
        className={cn(control, "resize-y", error && "border-granate-700", className)}
      />
    </Wrapper>
  );
}

export function Select({
  label,
  hint,
  error,
  className,
  id,
  options,
  ...rest
}: Común & { options: { value: string; label: string }[] } & ComponentPropsWithoutRef<"select">) {
  const auto = useId();
  const fieldId = id ?? auto;
  return (
    <Wrapper id={fieldId} label={label} hint={hint} error={error}>
      <div className="relative">
        <select
          {...rest}
          id={fieldId}
          className={cn(control, "appearance-none pr-10", className)}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        {/* El triángulo es tipografía, no un icono. */}
        <span
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-[14px] -translate-y-1/2 text-[10px] text-granate-900"
        >
          ▾
        </span>
      </div>
    </Wrapper>
  );
}

/** Casilla y radio comparten marca: cuadrada la primera, redonda la segunda. */
export function Checkbox({
  label,
  type = "checkbox",
  className,
  id,
  ...rest
}: { label: ReactNode; type?: "checkbox" | "radio" } & Omit<
  ComponentPropsWithoutRef<"input">,
  "type"
>) {
  const auto = useId();
  const fieldId = id ?? auto;
  return (
    <label
      htmlFor={fieldId}
      className={cn(
        "group inline-flex items-start gap-3",
        rest.disabled ? "cursor-not-allowed opacity-45" : "cursor-pointer",
        className,
      )}
    >
      <span className="relative mt-[3px] flex size-[17px] shrink-0 items-center justify-center">
        <input
          {...rest}
          id={fieldId}
          type={type}
          className={cn(
            "peer size-[17px] appearance-none border border-hairline bg-field",
            "transition-colors duration-200 ease-standard",
            "checked:border-granate-900",
            type === "radio" ? "rounded-full" : "rounded-sm",
          )}
        />
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute hidden size-[9px] bg-granate-900 peer-checked:block",
            type === "radio" && "rounded-full",
          )}
        />
      </span>
      <span className="text-sm text-ink-900">{label}</span>
    </label>
  );
}
