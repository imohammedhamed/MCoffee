// types.d.ts
import { User as NextAuthUser } from "next-auth";

interface Profile {
  id: string;
  userId: string;
  picture: string | null;
}

interface Address {
  id: string;
  userId: string;
  area: string;
  streetName: string | null;
  buildingType: string | null;
  buildingNumber: string;
  floorNumber: string | null;
  apartmentNumber: string;
  mobileNumber: string;
}

interface Order {
  id: string;
  userId: string;
  product: string;
  quantity: number;
  price: number;
}

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    name?: string;
    profile?: Profile | null;
    addresses?: Address[];
    orders?: Order[];
  }

  interface Session {
    user: User;
  }
}
