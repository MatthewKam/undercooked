'use client';

import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { SessionProvider, useSession } from "next-auth/react"
import ProtectedRoutes from "@/components/auth/ProtectedRoutes";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
        <SessionProvider>
            <ProtectedRoutes>
            <html lang="en">
                <body className={inter.className}>
                    <Header />
                    <main>{children}</main>
                </body>
            </html>
            </ProtectedRoutes>
        </SessionProvider>
	);
}


