import { PrismaClient } from "@prisma/client";

export const OrmClient = new PrismaClient({log: ['query']});