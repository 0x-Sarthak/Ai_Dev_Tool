// import logo from './logo.svg';
import './App.css';
// import Home from './components/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import ChatContainer from './Pages/ChatContainer';
import AllRoutes from './Pages/AllRoutes';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<AllRoutes />
			</div>
		</BrowserRouter>
	);
}

export default App;
