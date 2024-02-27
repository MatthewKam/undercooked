export const dynamic = 'force-dynamic' // defaults to auto
import { database as db } from '@/lib/database';
import { push, ref, child, set } from "firebase/database";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: Request) {
    // @TODO we will need some validations and sanitizations before we push to db.
    const body = await request.json();
    const { user_id } = body;
    const userRef = ref(db, `users/${user_id}`)
    set(userRef, body)
    return NextResponse.json({ body }, { status: 200 })
}