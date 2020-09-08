import React from 'react';
import { Page } from '../components/Page';
import { Link } from 'gatsby';

export default ({ data }) => {
	console.log({ data });
	return (
		<Page title={'Writing'}>
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<Link to={node.fields.slug}>{node.frontmatter.title}</Link>
			))}
		</Page>
	);
};

export const query = graphql`
	query {
		allMarkdownRemark(filter: { fields: { slug: { regex: "/^(\\\\/writing)/" } } }) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
					}
				}
			}
		}
	}
`;
