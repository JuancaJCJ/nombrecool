  
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
// import ModalRecipe from './components/ModalRecipe'

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Blog/>
    </div>
  );
}

export default App;