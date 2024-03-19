"use client";
import Header from "@/components/Header";
import Link from "next/link";

export default function Recipes() {
	return (
		<section>
			<ul>
				<li><Link href="/recipes/create">CREATE A RECIPE</Link></li>
			</ul>
		</section>
	)
	
}
