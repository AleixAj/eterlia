import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type TagTone = "default" | "brand" | "solid";

const tones: Record<TagTone, string> = {
  default: "border-hairline bg-transparent text-ink-600",
  brand: "border-granate-900 bg-transparent text-granate-900",
  solid: "border-granate-900 bg-granate-900 text-ocre-100",
};

export function Tag({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode;
  tone?: TagTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "et-overline inline-flex items-center rounded-sm border px-2.5 py-[5px]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
