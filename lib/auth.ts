import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.AUTHENTICATION_GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.AUTHENTICATION_GOOGLE_CLIENT_SECRET as string,
		}),
	],
	// session: {
	// 	strategy: 'jwt',
	// },
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			return true
			const { id: user_id, name: fullName, image } = user;
			const { provider } = account || {};
			const { given_name: first_name, family_name: last_name } = profile as any; // @TODO fix this typescript type
			const url = `${process.env.SERVER_URL}/user`;

			// if it exsits, make the user object

			if(!user) return false;

			const payload = {
				user_id,
				first_name,
				last_name,
				provider,
				image,
				email,
			};

			try {
				const setUserInDb = await fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json", // Specify the content type if sending JSON data
						// Add any other headers if needed
					},
					body: JSON.stringify(payload), // Convert your data to JSON format if sending JSON data
				}).then((response) => {
					if (!response.ok) {
						throw new Error("Network response was not ok");
					}
					return response.json(); // Parse the response body as JSON
				}).catch(err => {
					// something happened with the write, lets make the user try logging in again
					return false
				});
	
				console.log('setUserInDb', setUserInDb)
				if(setUserInDb) {
					return true;
				}
			} catch {
				return false;
			}
			
		},
		async redirect({ url, baseUrl }) {
			// console.log({url, baseUrl})
			return `${baseUrl}/account`
		},
		async jwt({ token, user, session }) {
			// the processing of JWT occurs before handling sessions. 
			console.log("jwt callback ", { token, user, session });
	  
			if (user) {
			  token.id = user.id;
			}
	  
			return token;
		  },
	  
		  //  The session receives the token from JWT
		  async session({ session, token, user }) {
			console.log("session callback ", { token, user, session });
	  
			return {
			  ...session,
			  user: {
				...session.user,
				accessToken: token.accessToken as string,
				refreshToken: token.refreshToken as string,
				role: token.role,
				id: token.id,
			  },
			  error: token.error,
			};
		  },
	},
};

// Use it in server contexts
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
	return getServerSession(...args, authOptions)
}