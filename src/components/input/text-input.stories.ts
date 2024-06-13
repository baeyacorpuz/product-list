import { Meta, StoryObj } from "@storybook/react";
import TextField from "./text-input";

const meta: Meta = {
	title: "UI/Textfield",
	component: TextField,
	tags: ["autodocs"]
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		color: "default",
		placeholder: "Enter email address",
		name: "email_address",
		input: {
			type: "email",
		},
		label: "Email Address"
	}
}

export const Primary: Story = {
	args: {
		color: "primary",
		placeholder: "Enter email address",
		name: "email_address",
		input: {
			type: "email",
		},
		label: "Email Address"
	}
}

export const Info: Story = {
	args: {
		color: "info",
		placeholder: "Enter email address",
		name: "email_address",
		input: {
			type: "email",
		},
		label: "Email Address"
	}
}

export const Error: Story = {
	args: {
		color: "error",
		placeholder: "Enter password",
		name: "password",
		input: {
			type: "password",
		},
		label: "Password",
		error: "Invalid"
	}
}

export const Success: Story = {
	args: {
		color: "success",
		placeholder: "Enter first name",
		name: "first_name",
		input: {
			type: "text",
		},
		label: "First Name",
	}
}