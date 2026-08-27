import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap " +
  "font-medium shadow-none transition-colors duration-200 ease-standard";

/* Las versalitas van en el tamaño y no en `base`: Tailwind emite `.uppercase`
   después de `.normal-case`, así que en la misma cadena siempre ganaría. */
const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-caption uppercase tracking-button",
  md: "px-7 py-3.5 text-sm uppercase tracking-button",
  lg: "px-9 py-4 text-base uppercase tracking-button",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "rounded-sm border border-granate-900 bg-granate-900 text-ocre-100 " +
    "hover:border-granate-700 hover:bg-granate-700",
  secondary:
    "rounded-sm border border-granate-900 bg-transparent text-granate-900 hover:bg-ocre-200",
  // El fantasma no es una caja: es un enlace con subrayado permanente de arena.
  ghost:
    "border-b border-hairline bg-transparent text-granate-900 " +
    "hover:border-granate-700 hover:text-granate-700",
};

function classes(
  variant: ButtonVariant,
  size: ButtonSize,
  fullWidth: boolean,
  disabled: boolean,
  className?: string,
) {
  return cn(
    base,
    variant === "ghost" ? "px-0 py-2 text-sm normal-case" : sizes[size],
    variants[variant],
    fullWidth && "w-full",
    disabled && "cursor-not-allowed opacity-40",
    className,
  );
}

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonProps = SharedProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      className={classes(variant, size, fullWidth, Boolean(rest.disabled), className)}
    >
      {children}
    </button>
  );
}

type ButtonLinkProps = SharedProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "children">;

/** Mismo aspecto que Button, pero navega. */
export function ButtonLink({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link {...rest} className={classes(variant, size, fullWidth, false, className)}>
      {children}
    </Link>
  );
}
