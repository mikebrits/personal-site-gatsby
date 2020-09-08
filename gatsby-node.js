const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions, getNodes }) => {
	const { createNodeField } = actions;
	const allNodes = getNodes();
	// console.log('node', node.internal.type);
	switch (node.internal.type) {
		case 'MarkdownRemark':
			const slug = createFilePath({ node, getNode, basePath: `src/data` });
			console.log(JSON.stringify(node, null, 2));
			createNodeField({
				node,
				name: `slug`,
				value: slug,
			});
			break;
		case 'ImageSharp':
			const image_path = createFilePath({ node, getNode, basePath: `src/data` });
			console.log(image_path);
			break;
		case 'Directory':
			// console.log(node);
			break;
		default:
			break;
	}
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: getTemplate(node.fields.slug),
			context: {
				// Data passed to context is available
				// in page queries as GraphQL variables.
				slug: node.fields.slug,
			},
		});
	});
};

function getTemplate(slug) {
	switch (true) {
		case slug.startsWith('/writing'):
			return path.resolve(`./src/templates/writing.jsx`);
		default:
			return path.resolve(`./src/templates/writing.jsx`);
	}
}
