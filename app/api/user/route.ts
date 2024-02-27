export const dynamic = 'force-dynamic' // defaults to auto
import { database as db } from '@/lib/database';
import { push, ref } from "firebase/database";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: Request) {

    console.log('request', request)
    // @TODO we will need some validations and sanitizations before we push to db.
    const body = await request.json();
    const pushRef = push(ref(db, 'users/'), body)

    const key = pushRef._path.pieces_[1]

    console.log('pushRef', pushRef)
    console.log('key', key)

    return NextResponse.json({ key }, { status: 200 })
    

    
}