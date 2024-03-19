import { UserSession } from '@/app/account/page';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function Page() {
    const session: UserSession | null = await getServerSession(authOptions);

	if(!session) redirect('/login')

    const { userId } = session ;


	return (
        <h1>{userId}</h1>
    );
}
