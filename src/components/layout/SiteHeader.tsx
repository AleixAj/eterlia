"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconBolsa } from "@/components/ui/Icon";
import { navegacion } from "@/data/site";
import { cn } from "@/lib/cn";

/**
 * Único elemento fijo del sitio: pegajoso, filete de arena abajo, sin sombra
 * ni desenfoque. La navegación son palabras, no iconos.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [menuAbierto, setMenuAbierto] = useState(false);

  // El menú de móvil se cierra al cambiar de página.
  useEffect(() => setMenuAbierto(false), [pathname]);

  const esActiva = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline bg-page">
      <div className="mx-auto flex max-w-wide items-center justify-between gap-6 px-5 py-4 md:gap-10 md:px-10 md:py-[22px]">
        <button
          type="button"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto((v) => !v)}
          className="flex w-5 shrink-0 cursor-pointer flex-col gap-[5px] md:hidden"
        >
          <span className="block h-px w-full bg-granate-900" />
          <span className="block h-px w-full bg-granate-900" />
          <span className="block h-px w-full bg-granate-900" />
        </button>

        <Link href="/" className="shrink-0" aria-label="Eterlia, ir al inicio">
          <Image
            src="/assets/logo-wordmark.png"
            alt="Eterlia"
            width={545}
            height={154}
            priority
            className="h-6 w-auto md:h-[30px]"
          />
        </Link>

        <nav className="hidden items-center gap-[34px] md:flex">
          {navegacion.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={esActiva(item.href) ? "page" : undefined}
              className={cn(
                "et-overline border-b pb-1 transition-colors duration-200 ease-standard",
                esActiva(item.href)
                  ? "border-granate-900 text-granate-900"
                  : "border-transparent text-granate-900 hover:text-granate-700",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* La bolsa aún no lleva a ningún sitio: el carrito no forma parte de
            las páginas públicas de esta primera entrega. */}
        <span
          className="flex shrink-0 items-center gap-2 text-granate-900"
          aria-label="Bolsa, 0 piezas"
        >
          <IconBolsa className="opacity-85" />
          <span className="et-overline">0</span>
        </span>
      </div>

      {menuAbierto ? (
        <nav className="border-t border-hairline px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navegacion.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={esActiva(item.href) ? "page" : undefined}
                  className={cn(
                    "et-overline",
                    esActiva(item.href) ? "text-granate-900" : "text-ink-600",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
