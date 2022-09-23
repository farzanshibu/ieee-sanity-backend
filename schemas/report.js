import { isUniqueAcrossAllDocuments } from "./../lib/isUniqueAcrossAllDocuments";
import { AiFillFilePdf as icon } from "react-icons/ai";

export default {
	name: "reportandstory",
	title: "Report and Story",
	type: "document",
	icon,
	groups: [
		{
			name: "story",
			title: "Story Info",
		},
		{
			name: "report",
			title: "Report Info",
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
			name: "storyName",
			title: "Story Name",
			type: "string",
			group: "story",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "storyName",
				maxLength: 96,
				isUnique: isUniqueAcrossAllDocuments,
			},
		},
		{
			name: "youtubeUrl",
			title: "Youtube Link",
			type: "url",
			group: "story",
		},
		{
			name: "description",
			title: "Description",
			type: "blockContent",
			group: "story",
		},
		{
			name: "reportName",
			title: "Report Name",
			type: "string",
			group: "report",
		},
		{
			name: "documentUrl",
			title: "Document Link",
			type: "url",
			group: "report",
		},
	],
};
