import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';
import {terser} from 'rollup-plugin-terser';
import {getFolders} from './scripts/buildUtils.js';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import postCSS from 'rollup-plugin-postcss';

const packageJson=require('./package.json');

const plugins=[
	peerDepsExternal(),
	resolve(),
	replace({
		preventAssignment: true,
		__IS_DEV__: process.env.NODE_ENV==='development',
	}),
	commonjs(),
	typescript({
		tsconfig: './tsconfig.json',
		useTsconfigDeclarationDir: true,
	}),
	postCSS({
		plugins: [require('autoprefixer')]
	}),
	terser(),
];
const subfolderPlugins=(folderName) => [
	...plugins,
	generatePackageJson({
		baseContents: {
			name: `${packageJson.name}/${folderName}`,
			private: true,
			main: '../cjs/index.js',
			module: './index.js',
			types: './index.d.ts',
		},
	}),
];
const folderBuilds=[]
getFolders('./src').forEach((folder) => {
	if (folder.includes('.d.ts') || folder.includes('types')) return
	if (folder.includes('.css')) {
		folderBuilds.push({
			input: `src/${folder}`,
			output: {
				file: `dist/${folder}`,

			},
			plugins: subfolderPlugins(folder),
		})
		return;
	}
	folderBuilds.push({
		input: `src/${folder}/index.ts`,
		output: {
			file: `dist/${folder}/index.js`,
			sourcemap: false,
			exports: 'named',
			format: 'esm',
		},
		plugins: subfolderPlugins(folder),
		external: ['react', 'react-dom'],
	})
});

export default [
	{
		input: ['src/index.ts'],
		output: [
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: false,
				exports: 'named',
			},
		],
		plugins,
		external: ['react', 'react-dom'],
	},
	...folderBuilds,
	{
		input: ['src/index.ts'],
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: false,
				exports: 'named',
			},
		],
		plugins,
		external: ['react', 'react-dom'],
	},
];
