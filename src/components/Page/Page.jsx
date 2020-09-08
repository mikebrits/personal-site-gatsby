import React from 'react';
import { Link } from 'gatsby';
import './Page.css';

export const Page = ({ children, title }) => {
	return (
		<main className="page">
			<title>mikebrits.com</title>
			<Link activeClassName="active-link" className="page-title" to={'/'}>
				<h4>mikebrits.com</h4>
			</Link>
			<header>
				<nav>
					<Link activeClassName="active-link" partiallyActive to={'/writing'}>
						Writing
					</Link>
				</nav>
			</header>
			<main>
				{title && <h1>{title}</h1>}

				{children}
			</main>
			<footer></footer>
		</main>
	);
};
