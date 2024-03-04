'use client'
import { UserSession } from "@/app/account/page";
import { signOut } from "next-auth/react";
import Link from "next/link";

interface HeaderSignIn {
    session: UserSession | null;
}

export default async function HeaderSignIn({session}: HeaderSignIn) {

	console.log('session from header ->', session)

	return (
		<>
        {session ? (
            <button className="px-2" onClick={() => signOut()}>
                <h2>Logout</h2>
            </button>
        ) : (
            <>
                <Link href="/account" className="px-2">Account</Link>
                <Link href="/login" className="px-2">Login</Link>
            </>
        )}
        </>
		
	);
}

// export default HeaderSessionProvider