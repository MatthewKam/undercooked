import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Account() {
	return (
		<div>
			<h1>Account</h1>
			<LoginButton>
				<Button>Log in</Button>
			</LoginButton>
		</div>
	);
}
