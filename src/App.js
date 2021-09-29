import './App.css';
import React from 'react';
import Navbars from './Components/Navigations/Navbars';
import { BrowserRouter as Router } from "react-router-dom";


function App() {

  return (
    <Router >
      <Navbars />
    </Router>
  );
}

export default App;
