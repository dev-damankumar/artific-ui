const getStories=() => {
	return process.argv[4]==='-stories'
		? [`../${process.argv[5]}`]
		: [
			'../stories/**/*.stories.@(js|mdx|ts|tsx)',
		];
};
module.exports={
	"stories": () => getStories(),
	"core": {
		builder: '@storybook/builder-webpack5',
	},
	"addons": [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions"
	],
	"framework": "@storybook/react",
}
