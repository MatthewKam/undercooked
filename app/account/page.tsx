import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export interface UserSession {
	user: {
		name: string;
		email: string;
		image: string;
		picture: string;
		sub: string;
		iat: number;
		exp: number;
		jti: string;
	},
	userId: string;

}

export default async function Account() {
	const session: UserSession | null = await getServerSession(authOptions);

	if(!session) redirect('/login')
	const { userId } = session ;
	const { name, email, image, picture } = session.user;

	console.log({session})
	
	return (
		<div>
			<h1 className="text-4xl">hey, {name}</h1>
			<p>email: {email}</p>
			<Image src={image} alt={name} height="200" width="200"/>
		</div>
	);
}
