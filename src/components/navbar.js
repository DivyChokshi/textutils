import React from 'react';
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';
function navbar(props){
  const mystyle={
    color:'grey',
  }
    return(
        <>
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      <div className="d-flex">
        <div className="bg-primary rounded mx-2" onClick={()=>{props.changemode("primary")}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-2" onClick={()=>{props.changemode("danger")}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-success rounded mx-2" onClick={()=>{props.changemode("success")}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>{props.changemode("warning")}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-light rounded mx-2" onClick={()=>{props.changemode("light")}}style={{height:'30px',width:'30px',cursor:'pointer',border:'2px solid black'}}></div>
        <div className="bg-dark rounded mx-2" onClick={()=>{props.changemode("dark")}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>

      </div>
      {/* <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changemode}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={mystyle}>Enable DarkMode</label>
      </div> */}
    </div>
  </div>
</nav>
        </>
    );
}
navbar.propTypes={
    title: propTypes.string
}
navbar.defaultProps={
    title:'Textutils'
}
// If no props value are passsed from parent component then it is set to defaultprops
export default navbar;