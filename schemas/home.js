import { FcHome as icon } from "react-icons/fc";

export default {
	name: "home",
	title: "Home Page",
	type: "document",
	icon,
	groups: [
		{
			name: "contact",
			title: "Contact Info",
		},
		{
			name: "strenght",
			title: "Strenght Info",
		},
		{
			name: "banner",
			title: "Banner Info",
		},
	],
	fields: [
		{
			name: "affinityGroups",
			title: "Affinity Groups",
			group: "strenght",
			type: "number",
		},
		{
			name: "events",
			title: "Events",
			group: "strenght",
			type: "number",
		},
		{
			name: "members",
			title: "Members",
			group: "strenght",
			type: "number",
		},
		{
			name: "mission",
			title: "Mission",
			group: "strenght",
			type: "number",
		},
		{
			name: "socities",
			title: "Societies",
			group: "strenght",
			type: "number",
		},
		{
			name: "name",
			title: "Name",
			type: "string",
			group: "contact",
			description: "Contact Person",
		},
		{
			name: "phoneNumber",
			title: "Phone Number",
			type: "number",
			group: "contact",
		},
		{
			name: "banner",
			title: "Banner",
			group: "banner",
			description: "Scrolling Banner Text",
			type: "string",
		},
		{
			name: "bannerUrl",
			title: "Banner Url",
			group: "banner",
			description: "Scrolling Banner URL link",
			type: "url",
		},
	],
};
