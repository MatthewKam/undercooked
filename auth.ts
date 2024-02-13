import { NextAuthOptions } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.AUTHENTICATION_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.AUTHENTICATION_GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};
