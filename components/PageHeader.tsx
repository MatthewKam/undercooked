interface PageHeaderProps {
	children?: React.ReactNode;
	headerLabel: string;
	headerDescription?: string;
}

export const PageHeader = ({
	headerLabel,
	headerDescription,
	children,
}: PageHeaderProps) => {
	return (
		<div className="mb-8">
			<h1 className="text-2xl font-extrabold mb-3">{headerLabel}</h1>
			<p>{headerDescription}</p>
			{children}
		</div>
	);
};
