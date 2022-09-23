import { FcGallery as icon } from "react-icons/fc";

export default {
	name: "gallery",
	title: "Gallery Page",
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
			name: "description",
			title: "Description",
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
};
