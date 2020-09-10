import { Person } from "./interfaces.ts";

export function isAdult(person: Person): boolean {
  return person.age >= 18;
}
