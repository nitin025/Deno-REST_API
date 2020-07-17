import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
const app = new Application();
const PORT = 3000;

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on port ${PORT}`);

await app.listen({ port: PORT });
