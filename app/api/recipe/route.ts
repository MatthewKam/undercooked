/*
 *** POST a recipe ***
 */
export const dynamic = "force-dynamic"; // defaults to auto
import { database as db } from "@/lib/database";
import { ref, set } from "firebase/database";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	// @TODO we will need some validations and sanitizations before we push to db.
	const unique_id = new Date().getTime();
	const body = await request.json();
	const recipeRef = ref(db, `recipes/${unique_id}`);
	set(recipeRef, body);
	return NextResponse.json({ body }, { status: 200 });
}
