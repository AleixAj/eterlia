import Image from "next/image";
import Link from "next/link";
import { IconCorreo, IconInstagram } from "@/components/ui/Icon";
import { enlacesPie, site } from "@/data/site";

const enlaceSuelto =
  "self-start border-b border-hairline text-sm text-granate-900 transition-colors " +
  "duration-200 ease-standard hover:border-granate-700 hover:text-granate-700";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-hairline bg-page">
      <div className="mx-auto grid max-w-wide grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10 px-5 pt-10 pb-8 md:px-10 md:pt-16">
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/assets/logo-wordmark.png"
            alt="Eterlia"
            width={545}
            height={154}
            className="h-[26px] w-auto"
          />
          <p className="m-0 max-w-[260px] text-sm text-ink-600">{site.descripcion}</p>
        </div>

        {enlacesPie.map((grupo) => (
          <nav key={grupo.titulo} className="flex flex-col gap-3">
            <span className="et-overline text-ink-600">{grupo.titulo}</span>
            {grupo.enlaces.map((e) => (
              <Link key={e.href} href={e.href} className={enlaceSuelto}>
                {e.label}
              </Link>
            ))}
          </nav>
        ))}

        <div className="flex flex-col gap-3">
          <span className="et-overline text-ink-600">Escríbeme</span>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2.5 text-sm text-granate-900 transition-colors duration-200 ease-standard hover:text-granate-700"
          >
            <IconCorreo className="opacity-85" />
            {site.email}
          </a>
          <a
            href={site.instagram.url}
            className="flex items-center gap-2.5 text-sm text-granate-900 transition-colors duration-200 ease-standard hover:text-granate-700"
          >
            <IconInstagram className="opacity-85" />
            {site.instagram.usuario}
          </a>
          <p className="m-0 text-caption text-ink-400">{site.respuesta}</p>
        </div>
      </div>

      <div className="mx-auto max-w-wide border-t border-hairline px-5 pt-6 pb-10 md:px-10">
        <p className="m-0 text-caption text-ink-400">{site.copyright}</p>
      </div>
    </footer>
  );
}
