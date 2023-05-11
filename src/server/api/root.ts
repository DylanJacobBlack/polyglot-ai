import { createTRPCRouter } from "~/server/api/trpc";
import { lessonRouter } from "./routers/lesson.router";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  lesson: lessonRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
