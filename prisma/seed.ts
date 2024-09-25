import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
 await prisma.user.create({
    data: {
        email: 'elsa@prisma.io',
        name: 'Elsa Prisma',
        address: {
          street:"RN24",
          city:"BARI",
          state:"shenzen",
          zip:"zip"
        },
      },
 })
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })