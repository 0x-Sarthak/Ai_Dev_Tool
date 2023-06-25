import React, { useEffect, useState } from 'react';
import PreviousLogs from '../components/Chat/PreviousLogs';
import TextArea from '../components/Chat/TextArea';
import ResponseArea from '../components/Chat/ResponseArea';
import './ChatContainer.css';

export default function ChatContainer() {
	const existingData =
		JSON.parse(localStorage.getItem('questionResponseData')) || [];

	const [prompt, setPrompt] = useState('');
	const [question, setQuestion] = useState(null);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const [questionResponseData, setQuestionResponseData] = useState([]);

	function getOpenAIResponse() {
		return fetch('https://good-gold-rooster.cyclic.app/startprompt', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				prompt: prompt,
			}),
		});
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const req = await getOpenAIResponse();
			const res = await req.json();
			setLoading(false);
			if (res.status === 200) {
				setData(res.res);
				setQuestion(prompt);

				//Set localstorage with updated data.
				if ((question || data) === null) {
					console.log('Null Encountered');
				} else {
					const newData = { question, data };
					const updatedData = [...existingData, newData];
					localStorage.setItem(
						'questionResponseData',
						JSON.stringify(updatedData)
					);
				}
			} else alert('Something went wrong');
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const storedData =
			JSON.parse(localStorage.getItem('questionResponseData')) || [];
		setQuestionResponseData(storedData);
	}, [question]);

	return (
		<>
			<div className='main-chat-div'>
				<h2>
					🤖 ROBI 🤖 <br /> THE CHAT BOT
				</h2>

				<TextArea handleSubmit={handleSubmit} setPrompt={setPrompt} />
				<ResponseArea loading={loading} question={question} response={data} />
				<PreviousLogs logs={questionResponseData} />
			</div>
		</>
	);
}
