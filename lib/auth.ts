import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXT_AUTH,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "MCoffee@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        // Fetch user including related data using Prisma
        const user:any = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
          include: {
            profile: true,
            addresses: true,
            orders: true
          }
        });

        if (!user || user.password !== credentials.password) {
          throw new Error("Invalid email or password");
        }

        // Return user data including profile, addresses, and orders
        return {
          id: user.id,
          name: user.fullName,
          email: user.email,
          profile: user.profile,
          addresses: user.addresses,
          orders: user.orders
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
          email: token.email,
          profile: token.profile,
          addresses: token.addresses,
          orders: token.orders
        }
      };
    },
  }
};
