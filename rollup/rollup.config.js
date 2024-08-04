import babel from '@rollup/plugin-babel';
import commonjs from "@rollup/plugin-commonjs";
import replace from '@rollup/plugin-replace';
import mdx from '@mdx-js/rollup';

const { PRODUCTION } = process.env

export default {
  input: 'pages/sample.mdx',
  output: {
    file: 'dist/sample.js',
    format: 'iife',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    },
  },
  external: ['react', 'react-dom'],
  plugins: [
    mdx(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
         PRODUCTION ? 'production' : 'development'
       )
    }),
  ]
};