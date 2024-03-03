"use client";

import { CardWithForm } from "@/components/CardWithForm";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
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
	recipe_name: z.string().min(2).max(50),
	recipe_type: z.string(),
});

export default function Home() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			recipe_name: "",
			recipe_type: "main",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		const url = "http://localhost:3000/api/recipe";
		console.log(values);
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json", // Specify the content type if sending JSON data
				// Add any other headers if needed
			},
			body: JSON.stringify(values), //
		}).then((response) => {
			console.log("response", response);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			// console.log('response', response.json())
			return response.json(); // Parse the response body as JSON
		});

		return true;
	}
	return (
		<main className="flex h-full flex-col items-center justify-center">
			<div className="space-y-6">
				<CardWithForm
					cardTitle="Create a recipe"
					cardDescription="Start from scratch or upload an image so we can help you."
					onSubmit={onSubmit}>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<div className="grid w-full items-center gap-4">
								<FormField
									control={form.control}
									name="recipe_name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Name</FormLabel>
											<FormControl>
												<Input
													id="recipe_name"
													placeholder="Name of your recipe"
													{...field}
												/>
											</FormControl>
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="recipe_type"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Receipe Category</FormLabel>
											<FormControl>
												<Select
													onValueChange={field.onChange}
													defaultValue={field.value}>
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
							</div>
							<div className="flex justify-between pt-5">
								<Button variant="outline">Cancel</Button>
								<Button type="submit">Create</Button>
							</div>
						</form>
					</Form>
				</CardWithForm>
			</div>
		</main>
	);
}
