import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {

    const body = await req.json();
    const { orderId, itemId } = body;

    const order = await prisma.order.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      return NextResponse.json({ message: 'Order not found' }, { status: 404 });
    }

    const updatedItem = await prisma.item.update({
      where: { id: itemId },
      data: {
        orderId: orderId,
      },
      
    });
    return NextResponse.json({ message: 'Item added to order', updatedItem }, { status: 200 });

  } 
  catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
