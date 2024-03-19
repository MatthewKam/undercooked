import { UserSession } from "@/app/account/page";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import HeaderSignIn from "./HeaderSignIn";

export default async function Header() {

	const session: UserSession | null = await getServerSession(authOptions);

	return (
		<header className="flex justify-between p-6">
			<a href="/">
				<h1 className="text-2xl">Undercooked</h1>
			</a>
			<div className="flex">
				<a href="/recipes" className="px-2">
					<h2>Recipes</h2>
				</a>
				<a href="/recipes/categories" className="px-2">
					<h2>Recipe Categories</h2>
				</a>
				<HeaderSignIn session={session} />
			</div>
		</header>
	);
}

// export default HeaderSessionProvider