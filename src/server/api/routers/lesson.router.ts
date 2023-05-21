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
  createNewLesson: publicProcedure
    .input(
      z.object({
        title: z.string(),
        text: z.string(),
        level: z.number(),
        imageId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (!input) return;
      await ctx.prisma.lesson.create({
        data: {
          title: input.title,
          text: input.text,
          level: input.level,
          imageId: input.imageId,
        },
      });
    }),
  deleteLesson: publicProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      if (!input) return;
      await ctx.prisma.lesson.delete({
        where: {
          id: input,
        },
      });
    }),
});
