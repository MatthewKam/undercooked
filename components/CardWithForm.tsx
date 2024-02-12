import * as React from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function CardWithForm() {
	return (
		<div>
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>Create a recipe</CardTitle>
					<CardDescription>
						Start from scratch or upload an image so we can help you.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Name</Label>
								<Input id="name" placeholder="Name of your recipe" />
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="framework">Receipe Category</Label>
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
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button variant="outline">Cancel</Button>
					<Button>Create</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
