import { isUniqueAcrossAllDocuments } from "./../lib/isUniqueAcrossAllDocuments";
import { ImBlogger as icon } from "react-icons/im";

export default {
	name: "blog",
	title: "Blogs",
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
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
				isUnique: isUniqueAcrossAllDocuments,
			},
		},
		{
			name: "author",
			title: "Author",
			type: "reference",
			to: { type: "author" },
		},
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			description: "Thumbnail image for blog post",
			options: {
				hotspot: true,
			},
		},
		{
			title: "Images",
			name: "image",
			description: "Add images to blog post(Max 2)",
			type: "array",
			of: [
				{
					type: "image",
					options: {
						hotspot: true,
					},
				},
			],
		},
		{
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
		},
	],

	preview: {
		select: {
			title: "title",
			author: "author.name",
			media: "mainImage",
		},
		prepare(selection) {
			const { author } = selection;
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`,
			});
		},
	},
};
