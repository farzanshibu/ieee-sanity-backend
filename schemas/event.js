import { isUniqueAcrossAllDocuments } from "../lib/isUniqueAcrossAllDocuments";
import sanityClient from "part:@sanity/base/client";
import slugify from "slugify";
import { SiEventbrite as icon } from "react-icons/si";

function myAsyncSlugifier(input, type) {
	const slug = slugify(input);
	const query = 'count(*[_type=="events" && slug.current == $slug]{_id})';
	const params = { slug: slug };
	return sanityClient.fetch(query, params).then((count) => {
		console.log("Movies with identical slug", count);
		return `${slug}-${count + 1}`;
	});
}
export default {
	name: "event",
	title: "Event Page",
	type: "document",
	icon,
	groups: [
		{
			name: "upcoming",
			title: "Upcoming Screen",
		},
	],
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: (document, options) => options.parent.title,
				maxLength: 96,
				isUnique: isUniqueAcrossAllDocuments,
				slugify: myAsyncSlugifier,
			},
		},
		{
			name: "shortDesignation",
			title: "Short Designation",
			type: "string",
		},
		{
			name: "description",
			title: "Description",
			type: "blockContent",
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
			name: "date",
			title: "Date of event conductions",
			type: "datetime",
			options: {
				dateFormat: "DD-MM-YYYY",
				timeFormat: "HH:mm",
				timeStep: 15,
				calendarTodayLabel: "Today",
			},
		},
		{
			name: "date2",
			title: "Event Date",
			type: "boolean",
			description:
				"If Event is held for more than one day, the lastdate of event will be shown",
		},
		{
			name: "date3",
			title: "Late Date of event conductions",
			type: "date",
			hidden: (document) => !document.parent.date2,
		},
		{
			name: "place",
			title: "Venue",
			type: "string",
		},
		{
			name: "lastDate",
			title: "Last Date",
			description: "Accpting the form",
			group: "upcoming",
			type: "date",
		},
		{
			name: "formLink",
			title: "Register Link",
			type: "url",
		},
		{
			name: "knowMore",
			title: "Know-more Link",
			type: "url",
		},
		{
			name: "joinLink",
			title: "Google Meet Link",
			type: "url",
		},
		{
			name: "speakers",
			title: "Speakers",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{ name: "speakerName", type: "string", title: "Speaker Name" },
						{
							name: "speakerDesignation",
							type: "string",
							title: "Speaker Designation",
						},
					],
				},
			],
		},
		{
			name: "contacts",
			title: "Contacts",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{ name: "contactName", type: "string", title: "Contact Name" },
						{
							name: "contactDesignation",
							type: "string",
							title: "Contact Designation",
						},
					],
				},
			],
		},
		{
			name: "rule",
			title: "Rules",
			type: "blockContent",
		},
	],
};
