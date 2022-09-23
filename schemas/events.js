import { SiEventbrite as icon } from "react-icons/si";

export default {
	name: "events",
	title: "Events Page",
	type: "document",
	icon,
	fields: [
		{
			name: "year",
			title: "Year",
			type: "string",
		},
		{
			name: "eventsArray",
			title: "Events Array",
			type: "array",
			of: [
				{
					type: "event",
				},
			],
		},
	],
};
