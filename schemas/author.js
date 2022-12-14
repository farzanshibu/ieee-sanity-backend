import { BsFillPersonFill as icon } from "react-icons/bs";

export default {
	name: "author",
	title: "Author",
	type: "document",
	icon,
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "designation",
			title: "Designation",
			type: "string",
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
	],
	preview: {
		select: {
			title: "name",
			media: "image",
		},
	},
};
