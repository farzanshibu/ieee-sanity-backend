import { FcConferenceCall as icon } from "react-icons/fc";

export default {
	name: "team",
	title: "Team Page",
	type: "document",
	icon,
	groups: [
		{
			name: "homepage",
			title: "Home Screen",
		},
	],
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
			name: "category",
			title: "Category",
			type: "string",
			options: {
				list: [
					{ title: "Other", value: "other" },
					{ title: "Execom", value: "execom" },
					{ title: "CS", value: "cs" },
					{ title: "PES", value: "pes" },
					{ title: "RAS", value: "ras" },
					{ title: "SPS", value: "sps" },
					{ title: "EMBS", value: "embs" },
					{ title: "SIGHT", value: "sight" },
					{ title: "WIE", value: "wie" },
				],
				layout: "radio",
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
		{
			name: "homepage",
			title: "Show on Homepage",
			type: "boolean",
			description: "If checked, this member will be shown on the homepage",
			group: "homepage",
		},
	],
};
