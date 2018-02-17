import sass from 'rollup-plugin-sass';

const randomGenerator = () => Math.ceil(Math.random().toFixed(4) * 10000);

const randomNumber = randomGenerator();
export default {
    input: 'dist/javascript/main.js',
    output: {
        file: `docs/bundle.${randomNumber}.js`,
        format: 'cjs'
    },
    plugins: [
        sass({
            insert: false,
            output: `docs/bundle.${randomNumber}.css`,
            options: {
                sourceMap: false
            }
        })
    ]
  };