import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs'

export default {
  input: 'index.js',
  output: {
    file: 'dist.js',
    format: 'iife',
    name: 'countryflag'
  },
  plugins: [
    resolve(),
    commonJS({
      include: 'node_modules/**'
    })
  ]
};