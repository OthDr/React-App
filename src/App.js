import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Register from './Register'
import Single from './Single'

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
	 <Router>
	 	<div className="App">
	      <Navbar />
	      

	      <div className="content">
	        <Routes>
	        	<Route  exact path="/home" element={<Home/>} />
	        	<Route  exact path="/register" element={<Register/>} />
	        	<Route exact path="/article" element={<Single/>} />
	        </Routes>
	        
	      <Footer />
	      </div>
	    </div>
	 </Router>


  );
}

export default App;
