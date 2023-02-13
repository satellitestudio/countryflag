import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

const isProduction = process.env.NODE_ENV === 'production'

export default
  {
    input: ['index.ts', 'countries.ts', 'constants.ts'],
    output: [
      { dir: 'dist', format: 'es', sourcemap: true },
    ],
    plugins: [
      commonjs(),
      typescript({
        sourceMap: true,
      }),
      resolve(),
      isProduction && terser(),
    ],
  }
