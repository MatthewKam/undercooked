interface StackProps {
	children: React.ReactNode;
}
export default function Stack({ children }: StackProps) {
	return <div className="flex flex-col m-auto max-w-5xl p-6">{children}</div>;
}
