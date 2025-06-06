import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

import auth from "@/features/auth/server/route";
import workspaces from "@/features/workspaces/server/route";

const app = new Hono().basePath("/api");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app.route("/auth", auth).route("/workspaces", workspaces);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);

export type AppType = typeof routes;
