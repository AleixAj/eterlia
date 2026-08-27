/** Une clases y descarta lo que sea falsy. Sin dependencias. */
export function cn(...clases: (string | false | null | undefined)[]): string {
  return clases.filter(Boolean).join(" ");
}
