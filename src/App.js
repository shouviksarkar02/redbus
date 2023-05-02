import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import { Toaster } from 'react-hot-toast';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import SearchResults from './SearchResults';
import BusContext from './BusContext';
import {useState } from "react"
import SeatSelection from './SeatSelection';
import Journey from './Journey.js';
import Login from './Login';



function App() {
  const[buses, setBuses] = useState([]);
  const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const[busloader, setBusLoader]=useState(false);
  
  return (
    <div className="App">
      <BusContext.Provider value={{from , to, setFrom, setTo,buses,setBuses,busloader,setBusLoader}}>
      <BrowserRouter>
        
        <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/' element={<Journey Component={Homepage}></Journey>}></Route>
          <Route path="/results" element={<Journey Component={SearchResults}></Journey>}></Route>
          <Route path="/book-seats" element={<Journey Component={SeatSelection}></Journey>}></Route>
        </Routes>
      </BrowserRouter>
      </BusContext.Provider>
    </div>
  );
}

export default App;
