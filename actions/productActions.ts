
'use server'

import { IProduct } from "@/interface";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export const getProductActions = async ({ userId }: { userId: string | null }) => {
  return await prisma.product.findMany({
      where: userId ? { user_id: userId } : {}, // Utilisez 'user_id' au lieu de 'userId'
      orderBy: {
          createdAd: "desc" // Utilisez 'createdAt' si c'est la bonne colonne pour la date de création
      }
  });
}


export const getAllProductActions = async () => {
  return await prisma.product.findMany({});
}



export const createProductActions = async ({
    title,
    body,
    completed,
    price,
    image,
    userId,
  }: {
    title: string;
    body?: string;
    completed: boolean;
    price: number;
    image?:string;
    userId: string | null;
  }) => {
    try {
      await prisma.product.create({
        data: {
          title,
          body,
          completed,
          price,
          image,
          user_id: userId as string,
        },
      });
      // Revalidate after the create operation
      revalidatePath('/');
    } catch (error) {
      console.error("Error creating product: ", error);
      throw error; // Renvoyer l'erreur pour la gérer dans le composant
    }
  };
  

export const deleteProductActions = async ({ id }: { id: string }) => {
    await prisma.product.delete({
        where: {
            id,
        },
    });
    // Revalidate after the delete operation
    revalidatePath('/');
}

// export const updateProductActions = async (
//     {title,body,completed,id,price,image}:IProduct) =>{
//     await prisma.product.update({
//         where:{
//             id,
//         },
//         data:{
//             title,
//             body,
//             price,
//             image,
//             completed
//         }
//     })
//     revalidatePath('/');
// }

export const updateProductActions = async ({
  id,
  title,
  body,
  completed,
  price,
  image,
}: IProduct) => {
  try {
    await prisma.product.update({
      where: { id },
      data: {
        title,
        body,
        completed,
        price,
        image,
      },
    });
    // Revalidate the path after updating the product
    revalidatePath('/');
  } catch (error) {
    console.error("Error updating product: ", error);
    throw error;
  }
};
