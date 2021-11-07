import React, { useState } from 'react';
import '@styles/NotFound.scss'

const NotFound = () => {
	return (
		<div className="NotFound">
			<h1>
				404
			</h1>
			<h2 >
				Not Found
			</h2>
			<p>The page was not found!</p>
		</div>
	);
}

export default NotFound;
