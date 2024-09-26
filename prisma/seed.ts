import { PrismaClient } from '@prisma/client'
import {faker} from '@faker-js/faker'
const prisma = new PrismaClient()

async function main() {
  // await prisma.user.createMany({
  //   data: Array.from({ length: 25 }, () => ({
  //     email: faker.internet.email(),
  //     name: faker.internet.userName(),
  //   })),
  // });

  await prisma.product.createMany({
    data: Array.from({ length: 25 }, () => ({
      title:faker.word.adjective(5),
      body:faker.word.adjective(100),
    })),
  });
}


main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })