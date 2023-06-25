import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<div>
			<h2>Page Not Found Error</h2>
			<Link to={'/'}>
				<button>Back to homepage</button>
			</Link>
		</div>
	);
};

export default Error;
