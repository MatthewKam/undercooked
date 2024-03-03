"use client";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export const HeaderSessionProvider = () => {
	return (
		<SessionProvider>
			<Header />
		</SessionProvider>
	)
}

function Header() {
	const { data: session } = useSession();

	console.log('session from header ->', session)

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
				{session ? (
					<button className="px-2" onClick={() => signOut()}>
						<h2>Logout</h2>
					</button>
				) : (
					<>
						<a href="/account" className="px-2">
							<h2>Account</h2>
						</a>
						<a href="/login" className="px-2">
							<h2>Login</h2>
						</a>
					</>
				)}
			</div>
		</header>
	);
}

export default HeaderSessionProvider