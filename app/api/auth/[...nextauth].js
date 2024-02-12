import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export const authOptions = {
	providers: [
		Providers.Google({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],
};

export default NextAuth(authOptions);
