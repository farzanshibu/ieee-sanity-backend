// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import author from "./author";
import home from "./home";
import team from "./team";
import event from "./event";
import gallery from "./gallery";
import wow from "./wow";
import blog from "./blog";
import report from "./report";
import events from "./events";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: "default",
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		// The following are document types which will appear
		// in the studio.
		author,
		blog,
		gallery,
		home,
		report,
		team,
		events,
		wow,
		// When added to this list, object types can be used as
		// { type: 'typename' } in other document schemas
		blockContent,
		event,
	]),
});
