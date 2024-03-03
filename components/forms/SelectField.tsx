import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
} from "@/components/ui/form";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";

type Items = { name: string; value: string };
type SelectOptions = Items[];

interface SelectFieldProps {
	control: any;
	name: string;
	label?: string;
	options: SelectOptions;
}

const SelectField: React.FC<SelectFieldProps> = ({
	control,
	name,
	label,
	options = [{ name: "", value: "" }],
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					{label && <FormLabel>{label}</FormLabel>}
					<FormControl>
						<Select onValueChange={field.onChange} defaultValue={field.value}>
							<SelectTrigger id={`${name}-trigger`}>
								<SelectValue placeholder="Select" />
							</SelectTrigger>
							<SelectContent position="popper">
								{options.map((i) => {
									return <SelectItem value={i.value}>{i.name}</SelectItem>;
								})}
							</SelectContent>
						</Select>
					</FormControl>
				</FormItem>
			)}
		/>
	);
};

export default SelectField;
