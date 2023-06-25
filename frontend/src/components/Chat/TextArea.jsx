import React from 'react';

const TextArea = ({ handleSubmit, setPrompt }) => {
	return (
		<>
			<textarea
				onChange={(e) => setPrompt(e.target.value)}
				className='text-area'
				cols={50}
				rows={10}></textarea>
			<br />
			<button type='submit' onClick={handleSubmit} className='btn'>
				SUBMIT
			</button>
		</>
	);
};

export default TextArea;
