import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { orderId, itemId } = body;

    if (!orderId || !itemId) {
      return NextResponse.json({ message: 'Order ID and Item ID are required' }, { status: 400 });
    }

    // Fetch the order
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: { items: true },
    });

    if (!order) {
      return NextResponse.json({ message: 'Order not found' }, { status: 404 });
    }

    // Fetch the item
    const item = await prisma.item.findUnique({
      where: { id: itemId },
    });

    if (!item) {
      return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    }

    // Ensure the item belongs to the order
    if (item.orderId !== orderId) {
      return NextResponse.json({ message: 'Item does not belong to the order' }, { status: 400 });
    }

    // Update the item to remove the order relation
    await prisma.item.update({
      where: { id: itemId },
      data: { orderId: null },
    });

    // Update the order's items array
    await prisma.order.update({
      where: { id: orderId },
      data: {
        items: {
          disconnect: { id: itemId },
        },
      },
    });

    return NextResponse.json({ message: 'Item removed from order' }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
