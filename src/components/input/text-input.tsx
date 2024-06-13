import { VariantProps, cva } from "class-variance-authority";
import { FieldInputProps, FieldRenderProps } from "react-final-form";

import { cn } from "../../lib/cn";

const textfieldStyles = cva(
	["w-full max-h-[56px] flex p-3 border-neutral border focus:outline-none"],
	{
		variants: {
			color: {
				default: ["border-grey-300 focus:border-orange-500 focus:ring-orange-500 "],
				primary: ["focus:border-primary"],
				info: ["border-info focus:border-info focus:ring-info"],
				error: ["border-error focus:border-error focus:ring-error"],
				success: ["border-success focus:border-success focus:ring-success"],
				sm: ["focus:border-sm"],
			}
		}
	}
)

const labelStyles = cva(
	["text-sm font-medium uppercase"],
	{
		variants: {
			color: {
				default: [""],
				primary: ["text-primary"],
				info: ["text-info"],
				error: ["text-error"],
				success: ["text-success"],
			}
		}
	}
)

export interface TextfieldProps extends
	FieldRenderProps<string, any, string>,
	VariantProps<typeof textfieldStyles> {
	id: string;
	label: string;
	name: string;
	input: FieldInputProps<string, any>;
	color?: "default" | "primary" | "info" | "error" | "success";
	placeholder: string;
}

const Textfield = (props: TextfieldProps) => {
	const {
		color,
		id,
		input,
		label,
		name,
		placeholder,
	} = props;

	return (
		<div className="w-full flex flex-col gap-1">
			<label
				htmlFor={id}
				className={cn(labelStyles({ color }))}
			>{label}</label>
			<input
				{...input}
				placeholder={placeholder}
				id={id}
				name={name}
				type="text"
				className={cn(textfieldStyles({ color }))}
			/>
			{/* Helper text */}
		</div>
	);
}

export default Textfield;