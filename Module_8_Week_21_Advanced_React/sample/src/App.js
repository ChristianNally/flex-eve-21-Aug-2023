import './App.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import StyledComponent from './components/StyledComponent';
import UseContextExample from './components/UseContextExample';

function App() {
  return (
    <div className="App">
			<h1>Sample App</h1>

			<BrowserRouter>
				<Link to="/home">Home</Link>
				<br/>
				<Link to="/about">About Our Team</Link>
				<br/>
				<Link to="/contact">Contact</Link>
				<br/>
				<Link to="/usecontext">UseContextExample</Link>
				<br/>
				<Routes>
					<Route path="/home" element={<StyledComponent />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/usecontext" element={<UseContextExample />} />
					<Route path="/admin" element={<Admin/>} />
					<Route path="/products/:id" element={<Product />} />
				</Routes>
			</BrowserRouter>

    </div>
  );
}

export default App;
