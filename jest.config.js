module.exports={
	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect", '<rootDir>/jest-setup.js'],
	testEnvironment: "jsdom",
	moduleNameMapper: {
		".(css|less|scss)$": "identity-obj-proxy",
	},
};
