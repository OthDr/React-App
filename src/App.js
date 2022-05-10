import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Register from './Register'
import Single from './Single'

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App({article_id}) {
	console.log(article_id);
  return (
	 <Router>
	 	<div className="App">
	      <Navbar />
	      
	      <div className="content">
	        <Routes>
	        	<Route  exact path="/" element={<Home/>} />
	        	<Route  exact path="/register" element={<Register/>} />
	        	<Route exact path="/article/:id" element={<Single article_id ={article_id} />} />
	        </Routes>
	        
	      <Footer />
	      </div>
	    </div>
	 </Router>


  );
}

export default App;
