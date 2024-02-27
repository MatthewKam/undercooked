"use client";
import { CardWithForm } from "@/components/CardWithForm";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";

const formSchema = z.object({
	name: z.string().min(2).max(50),
	recipe_category: z.string().min(2).max(50),
});

export default async function Home() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			recipe_category: "",
		},
	});
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<main className="flex h-full flex-col items-center justify-center">
			<div className="space-y-6">
				<CardWithForm
					cardTitle="Create a recipe"
					cardDescription="Start from scratch or upload an image so we can help you.">
					<Form {...form}>
						<FormField
							control={form.control}
							name="name"
							render={() => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input id="name" placeholder="Name of your recipe" />
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="recipe_category"
							render={() => (
								<FormItem>
									<FormLabel>Receipe Category</FormLabel>
									<FormControl>
										<Select>
											<SelectTrigger id="framework">
												<SelectValue placeholder="Select" />
											</SelectTrigger>
											<SelectContent position="popper">
												<SelectItem value="main">Main</SelectItem>
												<SelectItem value="side_dish">Side dish</SelectItem>
												<SelectItem value="dessert">Dessert</SelectItem>
												<SelectItem value="other">Other</SelectItem>
												<SelectItem value="draft">Draft(R&D)</SelectItem>
											</SelectContent>
										</Select>
									</FormControl>
								</FormItem>
							)}
						/>
					</Form>
				</CardWithForm>
			</div>
		</main>
	);
}
