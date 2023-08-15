import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null)
  const showalert = (message,type) =>{
      setalert({
          msg : message,
          type:type
      })
      setTimeout(() => {
        setalert(null);
      }, 2000);
     
  };
  const togglemode = () =>{
      if(mode === "light")
      {
        setmode("dark")
        document.body.style.backgroundColor = "grey";
      }
      else{
        setmode("light")
        document.body.style.backgroundColor = "white";
      }
  }
  return (  
    <> 
  <BrowserRouter>
      <Navbar mode={mode} togglemode={togglemode}/>  
      <Alert alert={alert}/> 

      <Routes> 
          <Route path="/" element={       <TextForm mode={mode} togglemode={togglemode} showalert={showalert}/>} />

          <Route path="/home" element={    <TextForm mode={mode} togglemode={togglemode} showalert={showalert}/>} />
          <Route path="/about" element={      <About mode={mode} togglemode={togglemode}/>} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
