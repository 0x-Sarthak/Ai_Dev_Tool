import React from 'react';

export default function PreviousLogs({ logs }) {
	return (
		<div className='answer-div'>
			<h3>Chat History</h3>
			{logs.map((data, index) => (
				<div key={index}>
					<h3>Question: {data.question ? data.question : null}</h3>
					<p>Response: {data.data ? data.data : null}</p>
				</div>
			))}
		</div>
	);
}
