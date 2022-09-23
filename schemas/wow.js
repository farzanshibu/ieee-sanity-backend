import { FcLike as icon } from "react-icons/fc";

export default {
	name: "wow",
	title: "Wall of Web",
	type: "document",
	icon,
	fields: [
		{
			name: "order",
			title: "Order",
			type: "number",
			hidden: true,
		},
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
		{
			name: "facebook",
			title: "Facebook Link",
			type: "url",
		},
		{
			name: "instagram",
			title: "Instagram Link",
			type: "url",
		},
		{
			name: "linkedin",
			title: "Linkedin Link",
			type: "url",
		},
	],
};
