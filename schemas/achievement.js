import { GrAchievement as icon } from "react-icons/gr";

export default {
	name: "achievement",
	title: "Achievement Page",
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
			name: "description",
			title: "Short Description",
			type: "string",
		},
		{
			title: "Achieved Date",
			name: "achievedDate",
			type: "date",
			options: {
				dateFormat: "DD-MM-YYYY",
				calendarTodayLabel: "Today",
			},
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
			title: "Animation",
			name: "animation",
			type: "string",
			options: {
				list: [
					{ title: "None", value: "none" },
					{ title: "Pop UP", value: "popup" },
					{ title: "Fire Work", value: "firework" },
					{ title: "School Pride", value: "schoolpride" },
				],
			},
		},
		{ name: "body", title: "Body", type: "blockContent" },
	],
};
