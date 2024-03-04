import { Inter } from "next/font/google";
import ProtectedRoutes from "@/components/auth/ProtectedRoutes";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
        <ProtectedRoutes>
            <main>{children}</main>
        </ProtectedRoutes>
	);
}


