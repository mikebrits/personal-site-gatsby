module.exports = {
	siteMetadata: {
		title: 'Gatsby + Node.js (TypeScript) API',
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Gatsby + Node.js (TypeScript) API',
				short_name: 'Gatsby + Node.js (TypeScript)',
				start_url: '/',
				icon: 'src/images/gatsby-icon.png',
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/data`,
			},
		},
		`gatsby-transformer-remark`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
	],
};
