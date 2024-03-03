'use client'

import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

export default function Account() {
	const { data: session } = useSession();
	// const session = await getServerSession(authOptions);

	console.log({session})
	return <pre>{JSON.stringify(session, null, 2)}</pre>
	return (
		<div>
			<h1>Account</h1>
			<LoginButton>
				<Button>Log in</Button>
			</LoginButton>
		</div>
	);
}
