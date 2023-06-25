import React, { useState } from 'react';
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition';

const TexttoSpeech = () => {
	//subscribe to thapa technical for more awesome videos

	const startListening = () =>
		SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
	const { transcript, browserSupportsSpeechRecognition, resetTranscript } =
		useSpeechRecognition();

	if (!browserSupportsSpeechRecognition) {
		return null;
	}

	return (
		<>
			<div className='main-speech-div'>
				<h1>
					Speech To Text <br /> Converter
				</h1>
				<br />

				<div className='main-content'>{transcript}</div>

				<div className='btn-style'>
					<button className='btn' onClick={startListening}>
						Start Listening
					</button>
					<button className='btn' onClick={SpeechRecognition.stopListening}>
						Stop Listening
					</button>
					<button className='btn' onClick={resetTranscript}>
						Reset
					</button>
				</div>
			</div>
		</>
	);
};

export default TexttoSpeech;
