export const dynamic = "force-dynamic"; // defaults to auto
import { database as db } from "@/lib/database";
import { get, push, ref } from "firebase/database";

export async function GET(request: Request) {
	const { pathname }: string = request.nextUrl;
	const queryString = pathname.replace("/api/", "");

	const userQuery = ref(db, queryString);
	const user = await get(userQuery);

	return Response.json({ user });
}
