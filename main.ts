import { Application, Router } from "https://deno.land/x/oak@v5.3.1/mod.ts";

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/complicated", (context) => {
    context.response.body = "Complicated";
  })
  .get("/isolated", (context) => {
    context.response.body = "Isolated";
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ hostname: "0.0.0.0", port: 80 });