import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<div className='navBar'>
				<h1>ROBO 🤖 MINDS</h1>
			</div>
			<header className='App-header'>
				<div className='orange-circle' />
				<h1>
					Welcome To The <br />
					World Of AI
				</h1>
				<h3>
					A TOOL CREATED BY DEVLOPERS
					<br /> FOR THE DEVLOPERS
				</h3>
				<br />

				<Link to={'/selection'}>
					<button className='btn'>GET STARTED</button>{' '}
				</Link>
			</header>
		</div>
	);
};

export default Home;
