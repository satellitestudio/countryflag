import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default [
  {
    input: 'index.js',
    output: [
      { file: pkg.browser, format: 'umd', name: 'countryflag' },
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [ resolve(), commonjs() ]
  }
]
