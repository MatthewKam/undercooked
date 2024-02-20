/*
    *** POST a recipe ***
*/



export const dynamic = 'force-dynamic' // defaults to auto
import { database as db } from '@/lib/database';
import { get, onValue, push, ref, set } from "firebase/database";

export async function POST(request: Request) {

    // @TODO we will need some validations and sanitizations before we push to db.
    const userId = '12346'
    const payload = {
        userId,
        title: 'pancakes',
        ingredients: [
            {sugar: {
                    unit: 'g',
                    amount: '75'
                }
            },
            {flour: {
                unit: 'g',
                amount: '240'
            }},
        ],
        description: 'the superbowl of sunday morning pancakes.'

    }

    await push(ref(db, 'recipes/'), payload)
    
    return Response.json({status: 200})
    

    
}