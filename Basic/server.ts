import { serve } from "https://deno.land/std/http/server.ts";
const server = serve({ port: 4000 });
console.log("http://localhost:4000/");
for await (const req of server) {
  req.respond({ body: "Hello World\n" });
}