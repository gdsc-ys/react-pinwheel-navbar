import babel from '@rollup/plugin-babel';

const input = './src/index.jsx';
const plugins = [
  babel({
    babelHelpers: 'bundled',
    presets: ['@babel/preset-env', '@babel/preset-react'],
  }),
];

export default [
  {
    input,
    output: {
      file: './dist/esm/index.js',
      format: 'es',
      sourcemap: true,
    },
    plugins,
  },
  {
    input,
    output: {
      file: './dist/cjs/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    plugins,
  },
];
