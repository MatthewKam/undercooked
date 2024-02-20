/*
    *** get a recipe by slug ***
*/

export const dynamic = 'force-dynamic' // defaults to auto
import { database as db } from '@/lib/database';
import { get, push, ref, set } from "firebase/database";

export async function GET(request: Request) {
    //@ts-ignore
    const { pathname }: string = request.nextUrl;
    const queryString = pathname.replace('/api/', '')
    const recipeQuery = ref(db, queryString);
    const recipe = await get(recipeQuery)
   
    return Response.json(recipe)
}

