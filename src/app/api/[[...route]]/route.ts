import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = 'edge';

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello Next.JS. I AM THE HONO'
  })
})

export const GET = handle(app)