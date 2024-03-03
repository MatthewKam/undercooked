"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Stack from "@/components/Stack";
import { PageHeader } from "@/components/PageHeader";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { useState } from "react";

const formSchema = z.object({
	recipe_name: z.string().min(2).max(50),
	recipe_type: z.string(),
});

export default function NewRecipe() {
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
				// Specify the content type if sending JSON data
				"Content-Type": "application/json",
				// Add any other headers if needed
			},
			body: JSON.stringify(values), //
		}).then((response) => {
			console.log("response", response);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json(); // Parse the response body as JSON
		});

		return true;
	}

	const RecipeTypes = [
		{ value: "main", name: "Main" },
		{ value: "side_dish", name: "Side dish" },
		{ value: "dessert", name: "Dessert" },
		{ value: "other", name: "Other" },
		{ value: "draft", name: "Draft(R&D)" },
	];
	const MeasurementTypes = [
		{ value: "fluid_ounces", name: "Fluid Ounce(s)" },
		{ value: "ounces", name: "Ounce(s)" },
		{ value: "liters", name: "Liter(s)" },
		{ value: "milliliters", name: "Milliliter(s)" },
		{ value: "cups", name: "Cup(s)" },
		{ value: "tsps", name: "Teaspoons(s)" },
		{ value: "tbsps", name: "Tablespoon(s)" },
		{ value: "dash", name: "Dash(es)" },
	];

	const [ingredientFields, setIngredientFields] = useState([
		{
			name: "ingredient-1",
			label: "Ingredient 1",
			placeholder: "",
			quantity: "",
			measurement_type: "",
		},
	]);
	const [ingredientNumber, setIngredientNumber] = useState(2);

	const [recipeStepFields, setRecipeStepFields] = useState([
		{
			name: "step-1",
			label: "Step 1",
			placeholder: "",
		},
	]);
	const [recipeStepNumber, setRecipeStepNumber] = useState(2);
	return (
		<Stack>
			<PageHeader
				headerLabel="Create a recipe"
				headerDescription="Start from scratch or upload an image so we can help you."
			/>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="grid w-full items-center gap-4">
						<h1 className="font-bold underline">Recipe Info</h1>
						<InputField
							control={form.control}
							placeholder="Name of your recipe"
							name="recipe_name"
							label="Name"
						/>
						<SelectField
							// sophia chang icons for type
							control={form.control}
							name="recipe_type"
							label="Recipe Category"
							options={RecipeTypes}
						/>
						<div className="ingredients-list">
							{ingredientFields.length > 0 && (
								<h1 className="font-bold underline">Ingredients</h1>
							)}
							{ingredientFields.length > 0 &&
								ingredientFields.map((i) => (
									<>
										<h1>{i.label}</h1>
										<div className="flex flex-row gap-2">
											<InputField
												control={form.control}
												placeholder={i.placeholder}
												name={i.quantity}
												label="Quantity"
											/>
											<SelectField
												control={form.control}
												name={i.measurement_type}
												label="Type"
												options={MeasurementTypes}
											/>
											<InputField
												control={form.control}
												placeholder={i.placeholder}
												name={i.name}
												label="Ingredient name"
											/>
										</div>
									</>
								))}
							<Button
								className="mt-5"
								onClick={(e) => {
									e.preventDefault();
									setIngredientNumber(ingredientNumber + 1);
									setIngredientFields([
										...ingredientFields,
										{
											name: `ingredient-${ingredientNumber}`,
											label: `Ingredient ${ingredientNumber}`,
											placeholder: "",
											quantity: "",
											measurement_type: "",
										},
									]);
								}}>
								+ Add ingredient
							</Button>
						</div>

						<div className="steps-list">
							{recipeStepFields.length > 0 && (
								<h1 className="font-bold underline">Steps</h1>
							)}
							{recipeStepFields.length > 0 &&
								recipeStepFields.map((i) => (
									<>
										<div className="flex flex-row gap-2">
											<InputField
												control={form.control}
												placeholder={i.placeholder}
												name={i.name}
												label={i.label}
											/>
										</div>
									</>
								))}
							<Button
								className="mt-5"
								onClick={(e) => {
									e.preventDefault();
									setRecipeStepNumber(recipeStepNumber + 1);
									setRecipeStepFields([
										...recipeStepFields,
										{
											name: `step-${recipeStepNumber}`,
											label: `Step ${recipeStepNumber}`,
											placeholder: "",
										},
									]);
								}}>
								+ Add step
							</Button>
						</div>
					</div>
					<div className="flex justify-end pt-5">
						<Button variant="outline">Cancel</Button>
						<Button className="ml-4" type="submit">
							Create
						</Button>
					</div>
				</form>
			</Form>
		</Stack>
	);
}
