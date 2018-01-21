import sass from 'rollup-plugin-sass';

export default {
    input: 'dist/javascript/main.js',
    output: {
        file: 'docs/bundle.js',
        format: 'cjs'
    },
    plugins: [
        sass({
            insert: false,
            output: 'docs/bundle.css',
            options: {
                sourceMap: true
            }
        })
    ]
  };