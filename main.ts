import { Application, Router } from "https://deno.land/x/oak@v6.1.0/mod.ts";
import { adults } from "./src/complicated/people.ts";
import { adults as adultsIs } from "./src/isolated/people/mod.ts";

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/complicated", (context) => {
    context.response.body = adults();
  })
  .get("/isolated", (context) => {
    context.response.body = adultsIs();
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ hostname: "0.0.0.0", port: 80 });
