// 'use server'

// import { PrismaClient } from "@prisma/client";
// import { revalidatePath } from 'next/cache'



// const prisma = new PrismaClient();

// export const getProductActions = async () =>{
//     return await prisma.product.findMany()
// }


// export const createProductActions = async (
// {title,body,completed,
//     // price
// }:{title:string,
//  body?:string | undefined,completed:boolean,
// //  price?:number | undefined
// }) =>{
//     return await prisma.product.create({
//         data:{
//             title,
//             body,
//             // price,
//             completed
//         }
//     })
//     revalidatePath('/')
// }


// export const deleteProductActions = async ({id}:{id:string}) =>{
//     return await prisma.product.delete({
//         where:{
//             id,
//         }
        
//     });
//     revalidatePath('/')
   
// }

'use server'

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export const getProductActions = async () => {
    return await prisma.product.findMany({
        orderBy:{
            createdAd:"desc"
        }
    });
}

export const createProductActions = async (
{ title, body, completed,
    // price
 }: { title: string; body?: string; 
    completed: boolean;
    // price?:number
 }) => {
    await prisma.product.create({
        data: {
            title,
            body,
            // price,
            completed,
        }
    });
    // Revalidate after the create operation
    revalidatePath('/');
}

export const deleteProductActions = async ({ id }: { id: string }) => {
    await prisma.product.delete({
        where: {
            id,
        },
    });
    // Revalidate after the delete operation
    revalidatePath('/');
}



export const updateProductActions = async () =>{}
