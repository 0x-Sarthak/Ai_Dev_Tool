import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import ChatContainer from './ChatContainer';
import Error from '../components/Error';
import Selection from '../components/Selection';
import TexttoSpeech from '../components/TexttoSpeech';

const AllRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/chat' element={<ChatContainer />} />
				<Route path='/selection' element={<Selection />} />
				<Route path='/talkie' element={<TexttoSpeech />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</div>
	);
};

export default AllRoutes;
