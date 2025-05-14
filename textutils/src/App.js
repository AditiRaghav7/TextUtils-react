import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Alerts from './components/Alerts';
// import About from './components/About';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setmode] =  useState('light'); // wheter dark mode is enabled or disable 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message, 
      type: type
    })
    setTimeout(() =>{
    setAlert(null);
    }, 2000);
  }

  const togglemode = () =>
  {
    if(mode === 'light')
     { setmode('dark')
       document.body.style.backgroundColor = 'grey'
       showAlert("Dark mode has been enabled", "success")
       document.title = "Textutils- Dark Mode"
      //  setInterval(() =>
      //  {document.title = "textutils is amazing!"
      //  }, 2000);
      //   setInterval(() =>
      //  {document.title = "Install textutils now!!!"
      //  }, 5000);

     }
    else{ setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = "Textutils- Light Mode"
    }
  }
   const togglemodep = () =>
  {
    if(mode === 'light')
     { setmode('pink')
       document.body.style.backgroundColor = 'pink'
       showAlert("Pink mode has been enabled", "success")
       document.title = "Textutils- pink Mode"
     }
    else{ setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = "Textutils- Light Mode"
    }
  }
  return (
    <>
  {/* <Router> */}
    <Navbar title="Textutils" aboutText="About" mode={mode} togglemode={togglemode} togglemodep={togglemodep} />
    <div className='container'>
      <Alerts alert={alert}></Alerts>
      {/* <Routes> */}
        {/* users--> component1
            users/homes--->component 2 (idhar b comp1 render ho jaega) isliye exact */}
        {/* <Route exact path="/About" element={<About/>} /> */}
        {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} /> */}
      {/* </Routes> */}
      {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}

      {/* {<About/>} */}

    </div>   
{/* </Router> */}
{/* <About/> */}
</>
);
}
export default App;
