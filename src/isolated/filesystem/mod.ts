import { readJsonSync } from "https://deno.land/std@0.65.0/fs/mod.ts";
import { fromFileUrl } from "https://deno.land/std@0.65.0/path/mod.ts";

export function readJson(path: string): unknown {
  const file = fromFileUrl(new URL(path, import.meta.url));
  return readJsonSync(file);
}
