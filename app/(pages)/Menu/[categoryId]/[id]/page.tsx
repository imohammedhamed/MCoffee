import React from 'react'
import prisma from '@/lib/prisma'
import Preference from '../../../../components/Preference';

export default async function ItemPreference({ params }: { params: { id: string; categoryId: string } }) {
    async function getuniqueItem(){
        try{
            const uniqueItem = await prisma.item.findUnique({
                where:{id:params.id,categoryId:params.categoryId}
            });
            return uniqueItem ;
        }catch(error)
        {
            console.error("Error fetching uniqueItem:", error);
            return null;
        }
    }
    const uniqueItem = await getuniqueItem();
  return (
    <>
        <Preference 
        title={uniqueItem?.title} 
        picture={uniqueItem?.picture}
        price ={uniqueItem?.price}
        categoryId ={params.categoryId}
        />
    </>
  )
}
