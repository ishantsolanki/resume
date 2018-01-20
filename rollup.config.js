import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import sass from 'rollup-plugin-sass';


export default {
    input: 'dist/javascript/main.js',
    output: {
        file: 'bundle.js',
        format: 'cjs'
    },
    plugins: [
        serve(),
        livereload({
            watch: [
                '/dist/javascript',
                '/dist/css'
            ]
        }),
        sass({
            insert: true
        })
    ]
  };