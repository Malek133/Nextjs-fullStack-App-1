'use server'

import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const getProductActions = async () =>{
    return await prisma.product.findMany()
}


export const createProductActions = async (
{title,body}:{title:string,body?:string | undefined}) =>{
    return await prisma.product.create({
        data:{
            title,
            body
        }
    })
}



export const updateProductActions = async () =>{}
export const deleteProductActions = async () =>{}