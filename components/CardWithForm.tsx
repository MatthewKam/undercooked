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

interface Props {
	children?: React.ReactElement;
	cardTitle?: string;
	cardDescription?: string;
}
export function CardWithForm({ children, cardTitle, cardDescription }: Props) {
	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>{cardTitle}</CardTitle>
				<CardDescription>{cardDescription}</CardDescription>
			</CardHeader>
			<CardContent>{children}</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="outline">Cancel</Button>
				<Button>Create</Button>
			</CardFooter>
		</Card>
	);
}
