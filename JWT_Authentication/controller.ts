import { Context } from "https://deno.land/x/oak@v5.4.0/mod.ts";
import { validateJwt } from "https://deno.land/x/djwt/validate.ts";
import { users } from "./users.ts";
import {
  makeJwt,
  setExpiration,
  Jose,
  Payload,
} from "https://deno.land/x/djwt/create.ts";
const key = "deno-token-key";
const header: Jose = {
  alg: "HS256",
  typ: "JWT",
};

const login = async (ctx: Context) => {
  const { value } = await ctx.request.body();
  for (const user of users) {
    if (user.username === value.username && user.password === value.password) {
      const payload: Payload = {
        iss: user.username,
        exp: setExpiration(new Date().getTime() + 60000),
      };

      const jwt = await makeJwt({ key, header, payload });

      if (!jwt) {
        ctx.response.status = 500;
        ctx.response.body = {
          message: "Internal Server error",
        };
        return;
      }
      ctx.response.status = 200;
      ctx.response.body = {
        username: user.username,
        jwt,
      };
      return;
    }
  }
  ctx.response.status = 422;
  ctx.response.body = {
    message: "Invalid user",
  };
};

const guest = (ctx: Context) => {
  ctx.response.body = "Guest Success";
};

const auth = (ctx: Context) => {
  ctx.response.body = "Auth Success";
};

const authMiddleware = async (ctx: Context, next: any) => {
  const headers: Headers = ctx.request.headers;
  const authorization = headers.get("Authorization");
  if (!authorization) {
    ctx.response.status = 401;
    ctx.response.body = {
      message: "Auth Token Not found",
    };
    return;
  }
  const jwt = authorization.split(" ")[1];
  if (!jwt) {
    ctx.response.status = 401;
    return;
  }
  if ((await validateJwt(jwt, key, { algorithm: "HS256" })).isValid) {
    await next();
    return;
  }
  ctx.response.status = 401;
  ctx.response.body = {
    message: "Invalid jwt token",
  };
};

export { login, guest, auth, authMiddleware };
