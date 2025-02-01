import type { MiddlewareHandler, Context } from 'hono';

export const loggingMiddleware: MiddlewareHandler = async (ctx: Context, next: () => Promise<void>) => {
  console.log(`Request: ${ctx.req.method} ${ctx.req.url}`);
  const response = await next();
  return response ?? new Response();
};
