export default function ResponseArea({ loading, question, response }) {
	return (
		<div className='answer-div'>
			{loading ? (
				<h2>L O A D I N G</h2>
			) : (
				<>
					<p>Question 👨‍💻 - {question}</p>
					<hr />
					<p className='result-text'> Response 👾 - {response}</p>
					<hr />
				</>
			)}
		</div>
	);
}
