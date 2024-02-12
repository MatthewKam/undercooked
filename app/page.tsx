"use client";
import { CardWithForm } from "@/components/CardWithForm";

export default function Home() {
	return (
		<main className="flex h-full flex-col items-center justify-center">
			<div className="space-y-6 text-center">
				<CardWithForm />
			</div>
		</main>
	);
}
