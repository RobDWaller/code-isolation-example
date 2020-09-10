import { readJson } from "../filesystem/mod.ts";
import { toPeople } from "./transformer.ts";
import { People } from "./interfaces.ts";
import { isAdult } from "./helper.ts";

export function adults(): People {
  const people = readJson("../../../assets/people.json");
  return toPeople(people).filter((person) => isAdult(person));
}
