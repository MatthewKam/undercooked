'use client';

import React, { FC, ReactNode } from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

interface ProtectedRoutesProps {
    children: ReactNode;
}

const ProtectedRoutes: FC<ProtectedRoutesProps> = ({children}) => {
    const router = useRouter()
	const { data: session } = useSession();
	console.log('ProtectedRoutes', session)
	if(session === undefined) {
		return <h1>loading...</h1>
	}

	if(session === null) {
        router.push('/')
        return null;
    }

  return (
    <>{children}</>
  )
}

export default ProtectedRoutes;




