import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import terser from "@rollup/plugin-terser";
import postCSS from "rollup-plugin-postcss";
import packageJson from "../package.json";
import external from 'rollup-plugin-peer-deps-external';
import image from '@rollup/plugin-image'
import visualizer from 'rollup-plugin-visualizer';

export default {
	input: "src/index.js",
	output: {
		file: packageJson.module,
		format: 'esm',
		sourcemap: false,
		exports: 'named',
	},
	plugins: [
		external(),
		nodeResolve(),
		replace({
			preventAssignment: true,
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		babel({
			presets: ["@babel/preset-react"],
		}),
		commonjs(),
		serve({
			open: true,
			verbose: true,
			contentBase: ["", "public"],
			host: "localhost",
			port: 3000,
		}),
		postCSS({
			plugins: [require('autoprefixer')],
			minimize: true
		}),
		image(),
		visualizer(),
		livereload({watch: "dist"}),
		terser({compress: true}),
	],
};
