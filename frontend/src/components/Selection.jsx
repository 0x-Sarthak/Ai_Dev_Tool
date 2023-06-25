import React from 'react';
import { Link } from 'react-router-dom';

const Selection = () => {
	return (
		<div className='main-selection-div'>
			<h1 className='selectionheading'>ROBO🤖MINDS </h1>
			<h2>A.I TOOLS</h2>
			<div className='tool-box'>
				<div className='tool-grid'>
					<img
						className='image'
						width={'60%'}
						border-radius={'20px'}
						src='https://www.weetechsolution.com/wp-content/uploads/2022/12/google-new-chat-bot-Code-Red.jpg'
						alt=''
					/>
					<h2>Chat-Bot</h2>
					<Link to={'/chat'}>
						<button className='btn'>OPEN</button>
					</Link>
				</div>
				<div className='tool-grid'>
					<img
						width={'60%'}
						className='image'
						src='https://www.macobserver.com/wp-content/uploads/2019/05/workfeatured-GitHub-2.png'
						alt=''
					/>
					<h2>AI Git Profiler</h2>
					<Link to={'https://github-manager.netlify.app/login'}>
						<button className='btn'>OPEN</button>
					</Link>
				</div>
				<div className='tool-grid'>
					<img
						className='image'
						width={'60%'}
						border-radius={'20px'}
						src='https://elearningindustry.com/wp-content/uploads/2022/04/shutterstock_1702358245.jpg'
						alt=''
					/>
					<h2>Speech to Text</h2>
					<Link to={'/talkie'}>
						<button className='btn'>OPEN</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Selection;
