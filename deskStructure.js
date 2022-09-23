import S from "@sanity/desk-tool/structure-builder";

export default () =>
	S.list()
		.title("Base")
		.items([
			S.documentTypeListItem("home"),
			S.documentTypeListItem("events"),
			S.documentTypeListItem("team"),
			S.documentTypeListItem("reportandstory"),
			S.documentTypeListItem("gallery"),
			S.documentTypeListItem("author"),
			S.documentTypeListItem("blog"),
		]);
