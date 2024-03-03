import * as React from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface Props {
	children?: React.ReactElement;
	cardTitle: string;
	cardDescription: string;
}
export function CardWithForm({ children, cardTitle, cardDescription }: Props) {
	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>{cardTitle}</CardTitle>
				<CardDescription>{cardDescription}</CardDescription>
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	);
}
