import { Application, Router } from "https://deno.land/x/oak@v5.4.0/mod.ts";
import { login, guest, auth, authMiddleware } from "./controller.ts";
const router = new Router();
const app = new Application();
const PORT = 5000;

router
  .post("/login", login)
  .get("/guest", guest)
  .get("/auth", authMiddleware, auth);

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on port ${PORT}`);

await app.listen({ port: PORT });
