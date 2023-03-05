// (C) Copyright  KrestUI [2021] [2022]. All Rights Reserved.

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import bundleSize from 'rollup-plugin-bundle-size';
import analyze from 'rollup-plugin-analyzer';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import path from 'path';
import fs from 'fs';
import typescript from '@rollup/plugin-typescript';
// import typescript2 from 'rollup-plugin-typescript2';
import babel from "@rollup/plugin-babel";
import externals from "rollup-plugin-node-externals";
import del from 'rollup-plugin-delete';

const current_package = path.join(process.cwd(), "package.json");
let pkg = JSON.parse(fs.readFileSync(current_package));
const isProduction = (process.env.NODE_ENV === 'production');

const rollup_common_plugins = [
	(isProduction && terser()),
	analyze(),
	bundleSize()
];

const external_libs = [
	/@babel\/runtime/
];

const config = [{	input: pkg.entry,
	output:  [{ 
		file: pkg.module,
		format: 'es',
		sourcemap: isProduction
	}, {
		file: pkg.main,
		format: 'cjs',
		sourcemap: isProduction
	}],
	external: external_libs,	
	plugins: [
		externals(),
		resolve(),
		commonjs(),
        babel({
			babelHelpers: "runtime",
			exclude: "**/node_modules/**",
			extensions: [".js", ".ts"]
        }),		
		typescript({
			tsconfig: './tsconfig.json',
			sourceMap: isProduction,
			declaration: true,
			declarationDir: "./out",
			declarationMap: true,
			emitDeclarationOnly: true,
			noEmitOnError: true,
			include: [
				"src/**/*"
			],
			exclude: [
				"**/*.test.ts",
				"node_modules/*", 
				"public/*", 
				"dist"
			]			
		}),		
		...rollup_common_plugins,
	]
},
{
    // path to your declaration files root
    input: './dist/out/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [
		dts(),
		del({ targets: 'dist/out/*', hook: 'buildEnd', verbose: true }), 
]
  }
];

export default config;
