import React, { Component } from "react";
 import './App.css';
 import "bootstrap/dist/css/bootstrap.min.css";
 import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navbar,Nav,ButtonGroup} from 'react-bootstrap';
import Image1 from './img1.jpg';
import Home from './Home';
 import ContactUs from './ContactUs';
import TypeofHouse from './TypeofHouse';
 
function App() {
    
  return (
    <div className="App">
           <div className="row" className="first">
                    <div className="col">
                    <div className="inn">

                        <Router>
                            <Navbar  expand="lg"  sticky="top" >
                                <Navbar.Brand href="#home">
                                  <img src={Image1} alt=""  width="70"/></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto">
                                    <Nav.Link href="/"  activeClassName="active" style={{"backgroundColor:active":"yellow"}}>Home</Nav.Link>
                                     <Nav.Link href="/typeofhouse" activeClassName="active">TypeofHouse</Nav.Link>
                                    <Nav.Link href="/contact-us" activeClassName="active">Contact</Nav.Link>
 
                                    </Nav>

                                </Navbar.Collapse>
                                <ButtonGroup className="button1" aria-label="Basic example">

                                <button>SignIn</button>
                                <button>SignUp</button>
                                </ButtonGroup>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/" component={Home}>
                                    <Home />
                                </Route>


                                <Route path="/typeofhouse" component={TypeofHouse}>
                                    <TypeofHouse />
                                </Route>

                                <Route path="/contact-us" component={ContactUs}>
                                    <ContactUs />
                                </Route>
                            </Switch>
                        </Router>
                        <div className="fotter">
          <div className="col">
              <p>Copyrights@2021</p>
          </div>
      </div>

                    </div>
                </div>
 

      </div>
     </div>
  );
}

export default App;
