
'use server'

import { IProduct } from "@/interface";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export const getProductActions = async ({userId}:{userId:string | null}) => {
    return await prisma.product.findMany({
        where:{
          user_id:userId as string
        },
        orderBy:{
            createdAd:"desc"
        }
    });
}

export const getAllProductActions = async () => {
  return await prisma.product.findMany({});
}

// export const createProductActions = async (
// { title, body, completed,price,
//     userId
//  }: { title: string; body?: string; 
//     completed: boolean;
//     price:number;
//     userId:string | null
//  }) => {
//     await prisma.product.create({
//         data: {
//             title,
//             body,
//             completed,
//             price,
//             user_id:userId as string
//         }
//     });
//     // Revalidate after the create operation
//     revalidatePath('/')
// }

export const createProductActions = async ({
    title,
    body,
    completed,
    price,
    userId,
  }: {
    title: string;
    body?: string;
    completed: boolean;
    price: number | null;
    userId: string | null;
  }) => {
    try {
      await prisma.product.create({
        data: {
          title,
          body,
          completed,
          price,
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

export const updateProductActions = async (
    {title,body,completed,id,price}:IProduct) =>{
    await prisma.product.update({
        where:{
            id,
        },
        data:{
            title,
            body,
            price,
            completed
        }
    })
    revalidatePath('/');
}
