import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import {getFolders} from './scripts/buildUtils.js';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import postCSS from 'rollup-plugin-postcss';

const packageJson=require('./package.json');
const generateSourceMaps=false
const plugins=[
	peerDepsExternal(),
	nodeResolve(),
	replace({
		preventAssignment: true,
		'process.env.NODE_ENV': JSON.stringify('production'),
	}),
	commonjs(),
	typescript({
		tsconfig: './tsconfig.json',
		useTsconfigDeclarationDir: true,
		inlineSources: true,
	}),
	postCSS({
		plugins: [require('autoprefixer')],
		minimize: true
	}),
	terser({compress: true}),
];

const subFolderPlugins=(folderName) => [
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
			plugins: subFolderPlugins(folder),
			external: ['react', 'react-dom'],
		})
		return;
	}
	folderBuilds.push({
		input: `src/${folder}/index.ts`,
		output: {
			file: `dist/${folder}/index.js`,
			sourcemap: generateSourceMaps,
			exports: 'named',
			format: 'esm',
		},
		plugins: subFolderPlugins(folder),
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
				sourcemap: generateSourceMaps,
				exports: 'named',
			},
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: generateSourceMaps,
				exports: 'named',
			}
		],
		plugins,
		external: ['react', 'react-dom'],
	},
	...folderBuilds
];
