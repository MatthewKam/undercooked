export const dynamic = 'force-dynamic' // defaults to auto
import { database as db } from '@/lib/database';
import { push, ref } from "firebase/database";

export async function POST(request: Request) {

    // @TODO we will need some validations and sanitizations before we push to db.
    const userId = '12346'
    const payload = {
        userId,
        first_name: 'Stanley',
        last_name: 'Hudson',
    }

    const pushRef = push(ref(db, 'users/'), payload)

    console.log('pushRef', pushRef)
    
    return Response.json({status: 200})
    

    
}