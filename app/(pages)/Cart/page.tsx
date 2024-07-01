import React from 'react'
import SectionHeading from '@/app/components/section-heading'
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import prisma from '@/lib/prisma';
import UserProducts from '@/app/components/UserProducts';
import ErrorInTheShoppingCart from '@/app/components/ErrorInTheShoppingCart';

export default async function Page() {
    const session = await getServerSession(authOptions);
    // Check if user is not logged in 
    if (!session) {
        return (
            <section className='lg:container lg:mx-auto md:container md:mx-auto sm:mx-3'>
                <ErrorInTheShoppingCart 
                title="Please log in to view your shopping cart."
                LinkTitle="Log In"
                Linkhref="login"
                />
            </section>
        );
    }

    const user = await prisma.user.findUnique({
        where: {
            id: session.user.id
        },
        include: {
            orders: {
                include: {
                    items: {
                        include: {
                            preference: true
                        }
                    }
                }
            }
        }
    });

    // Check if user has no orders
    if (!user?.orders || user.orders.length === 0) {
        return (
            <section className='lg:container lg:mx-auto md:container md:mx-auto sm:mx-3'>
                <ErrorInTheShoppingCart 
                title="Your shopping cart looks empty."
                LinkTitle="Check out The Menu"
                Linkhref="Menu"
                />
            </section>
        );
    }

    // Check if any order has items
    const hasItems = user.orders.some(order => order.items.length > 0);

    // User is logged in and has orders, but check for items
    return (
        <section className='lg:container lg:mx-auto md:container md:mx-auto sm:mx-3'>
            {hasItems ? (
                <>
                <SectionHeading>Shopping Cart</SectionHeading>
                <UserProducts
                    userId={user.id}
                    orders={user.orders}
                />
                </>
            ) : (
                <ErrorInTheShoppingCart 
                title="Your shopping cart looks empty."
                LinkTitle="Check out The Menu"
                Linkhref="Menu"
                />
            )}
        </section>
    );
}
