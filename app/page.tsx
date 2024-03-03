"use client";
import { CardWithForm } from "@/components/CardWithForm";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex h-full flex-col items-center justify-center">
			<div className="space-y-6">
				<CardWithForm
					cardTitle="Create a recipe"
					cardDescription="Start from scratch or upload an image so we can help you.">
					<Link href="./recipes/new">Get started</Link>
				</CardWithForm>
			</div>
		</main>
	);
}
