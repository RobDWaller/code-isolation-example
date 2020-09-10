import { readJsonSync } from "https://deno.land/std@0.65.0/fs/mod.ts";
import { fromFileUrl } from "https://deno.land/std@0.65.0/path/mod.ts";

export function adults(): object {
  const file = fromFileUrl(
    new URL("../../assets/people.json", import.meta.url),
  );
  const json = readJsonSync(file);

  if (json instanceof Array) {
    return json.filter((person: any) => {
      if (person.age !== undefined) {
        return person.age >= 18;
      }
      return false;
    });
  }

  return {};
}
