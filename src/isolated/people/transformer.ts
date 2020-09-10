import { Person, People } from "./interfaces.ts";

export function toPeople(data: unknown): People {
  if (data instanceof Array) {
    return data.filter((person): person is Person => {
      return (
        person instanceof Object &&
        person.hasOwnProperty("id") &&
        person.hasOwnProperty("name") &&
        person.hasOwnProperty("age")
      );
    });
  }

  throw new Error("Could not transform data to people.");
}
