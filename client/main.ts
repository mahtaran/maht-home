import { Meteor } from "meteor/meteor";
import App from "../imports/ui/App.svelte";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.js"
import "prismjs/plugins/line-numbers/prism-line-numbers.min.css"
import "prismjs/plugins/line-highlight/prism-line-highlight.min.js"
import "prismjs/plugins/line-highlight/prism-line-highlight.min.css"
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js"

Meteor.startup(() => {
	new App({
		target: document.getElementById("app")
	});
});

Prism.highlightAll();