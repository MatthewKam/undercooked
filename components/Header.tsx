"use client";
import { signIn, useSession } from "next-auth/react";

export default function Header() {
	// const { data: session } = useSession();

	return (
		<header className="flex justify-between p-6">
			<a href="/">
				<h1 className="text-2xl">Undercooked</h1>
			</a>
			<div className="flex">
				<a href="/recipes/" className="px-2">
					<h2>Recipes</h2>
				</a>
				<a href="/recipes/categories" className="px-2">
					<h2>Recipe Categories</h2>
				</a>
				<a href="/account" className="px-2">
					<h2>Account</h2>
				</a>
				<a href="/login" className="px-2">
					<h2>Login</h2>
				</a>
			</div>
		</header>
	);
}
