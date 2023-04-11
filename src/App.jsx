import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Sidebar from './Components/Sidebar'
import CrewForm from './Components/Form'
import Overview from './Components/Overview'
import CrewMember from './Components/CrewMember'

import './App.css'


const App = () => {
  return (
    <Router>
      <div className='App'>
        <Sidebar />
        <Routes>
          <Route  path="/home" element={<Home/>} />
          <Route  path="/" element={<Home/>} />
          <Route exact path='/new-member' element={<CrewForm/>} />
          <Route exact path='/crew' element={<Overview/>} />
          <Route exact path='/crew/:id' element={<CrewMember/>} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
