import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const taskRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.task.findMany();
  }),
});
