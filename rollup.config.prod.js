import sass from "rollup-plugin-sass";
import replaceHtmlVars from "rollup-plugin-replace-html-vars";

export default {
  input: "src/javascript/main.js",
  output: {
    file: `docs/bundle.js`,
    format: "cjs",
  },
  plugins: [
    sass({
      insert: false,
      output: `docs/bundle.css`,
      options: {
        sourceMap: false,
      },
    }),
    replaceHtmlVars({
      files: "docs/index.html",
      from: /\${timestamp}/g,
      to: Date.now(),
    }),
  ],
};
