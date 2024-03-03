import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";

interface InputProps {
	placeholder?: string;
	name: string;
	control: any;
	label: string;
}
export default function InputField({
	placeholder,
	name,
	control,
	label,
}: InputProps) {
	return (
		<>
			<FormField
				control={control}
				name={name}
				render={({ field }) => (
					<FormItem>
						<FormLabel>{label}</FormLabel>
						<FormControl>
							<Input
								id={`${name}-input`}
								placeholder={placeholder}
								{...field}
							/>
						</FormControl>
					</FormItem>
				)}
			/>
		</>
	);
}
