import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import sass from "rollup-plugin-sass";

export default {
  input: "src/javascript/main.js",
  output: {
    file: "bundle.js",
    format: "cjs",
  },
  plugins: [
    serve(),
    livereload(),
    sass({
      insert: false,
      output: "bundle.css",
      options: {
        sourceMap: true,
      },
    }),
  ],
};
