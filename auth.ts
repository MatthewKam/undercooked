import { NextAuthOptions } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import { database as db } from '@/lib/database';
import { get, ref } from "firebase/database";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.AUTHENTICATION_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.AUTHENTICATION_GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('SIGN IN', { user, account, profile, email, credentials })
      const { id: user_id, name: fullName, image } = user;
      const { provider } = account || {};
      const { given_name: first_name, family_name: last_name } = profile;

      // if it exsits, make the user object

      const payload = {
        user_id,
        first_name,
        last_name,
        provider,
        image,
        email, 
      }

      console.log({payload})

      const url = `${process.env.SERVER_URL}/user`


      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify the content type if sending JSON data
          // Add any other headers if needed
        },
        body: JSON.stringify(payload) // Convert your data to JSON format if sending JSON data
      })
      .then(response => {
        // console.log('response', response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // console.log('response', response.json())
        return response.json(); // Parse the response body as JSON
      })

      return true
    },
  }
  
};
