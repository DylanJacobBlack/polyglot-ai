import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  // protectedProcedure,
} from "~/server/api/trpc";

export const lessonRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.lesson.findMany();
  }),
  getById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    if (!input) return;
    return ctx.prisma.lesson.findUnique({
      where: {
        id: input,
      },
    });
  }),
});
