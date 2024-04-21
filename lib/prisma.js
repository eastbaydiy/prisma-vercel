import { PrismaClient } from '@prisma/client'

// Avoid instantiating too many instances of Prisma in development
// https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices#problem
let prisma


const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ log: ['info'] });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma
