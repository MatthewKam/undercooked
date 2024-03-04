import React, { FC, ReactNode } from 'react'
import { redirect, useRouter } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

interface ProtectedRoutesProps {
    children: ReactNode;
}

const ProtectedRoutes: FC<ProtectedRoutesProps> = async ({children}) => {
	const session = await getServerSession(authOptions);

	console.log('ProtectedRoutes', session)

	if(session === null) {
        redirect('/login')
    }

  return (
    <>{children}</>
  )
}

export default ProtectedRoutes;




