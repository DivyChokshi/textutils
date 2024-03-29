import logo from './logo.svg';
import './App.css';
import Navibar from './components/navbar.js';
import Textform from './components/textform.js'
import About from './components/about.js'
import React,{useState} from 'react';
import Alert from './components/alert.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let name='divy';
const arr_colorpalletes=["primary","success","danger","light","dark","warning"];
function App() {
  const [mode,setmode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const remove_allcolors=()=>{
    for(var i=0;i<arr_colorpalletes.length;i++){
    document.body.classList.remove('bg-'+arr_colorpalletes[i]);}
  }
  const func_changemode=(cls)=>{
    remove_allcolors();
    document.body.classList.add('bg-'+cls);
    // if(mode==='light'){
    //   setmode('dark');
    //   document.body.style.backgroundColor='black'
    //   showalert("Dark mode has been enabled","success");
    // }
    // else{
    //   setmode('light');
    //   document.body.style.backgroundColor='white'
    //   showalert("Light mode has been enabled","success");
    // }
  }
  return (
    <>
    <Router>
    <Navibar title="TextUtils" mode={mode} changemode={func_changemode}/>
    <Alert alert={alert}/>
    <div className="container">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <Textform heading="Enter the text to analyze" mode={mode} showalert={showalert}/>
          </Route>
        </Switch>
        {/* <Textform heading="Enter the text to analyze" mode={mode} showalert={showalert}/> */}
        </div>
    </Router>
    </>
  );
}

export default App;
// export default App;
