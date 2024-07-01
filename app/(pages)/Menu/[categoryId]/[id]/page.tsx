import React from 'react';
import prisma from '@/lib/prisma';
import Preference from '../../../../components/Preference';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function ItemPreference({ params }: { params: { id: string; categoryId: string } }) {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id;

    async function getUniqueItem() {
        try {
            const uniqueItem = await prisma.item.findUnique({
                where: { id: params.id, categoryId: params.categoryId },
            });
            return uniqueItem;
        } catch (error) {
            console.error("Error fetching uniqueItem:", error);
            return null;
        }
    }

    async function getUserOrder() {
        try {
            let order = await prisma.order.findFirst({
                where: { userId: userId },
            });

            if (!order) {
                order = await prisma.order.create({
                    data: { userId: userId||'' },
                });
            }
            return order;
        } catch (error) {
            console.error("Error fetching/creating order:", error);
            return null;
        }
    }

    const uniqueItem = await getUniqueItem();
    const order = await getUserOrder();

    return (
        <>
            <Preference
                userId={userId}
                ItemID={params.id}
                title={uniqueItem?.title}
                picture={uniqueItem?.picture}
                price={uniqueItem?.price}
                categoryId={params.categoryId}
                orderId={order?.id}
            />
        </>
    );
}
