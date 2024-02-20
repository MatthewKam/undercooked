/* 

**** GET ALL RECIPES

@TODO - we probably need to add pagination or something here. there will be too many recipes to query at once. 

*/

export const dynamic = 'force-dynamic' // defaults to auto
import { database as db } from '@/lib/database';
import { get, ref } from "firebase/database";

export async function GET(request: Request) {
    const recipeQuery = ref(db, 'recipes');
    const recipes = await get(recipeQuery)
   
    return Response.json(recipes)
}

