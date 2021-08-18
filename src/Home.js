import React, { Component } from 'react';
import './App.css';
import Image2 from './img2.jpg';
import {ButtonGroup} from 'react-bootstrap';
import {FaPhone ,FaQuestionCircle} from "react-icons/fa";
import {ImHome} from "react-icons/im";
import{AiOutlineDollarCircle,AiOutlineSafetyCertificate,AiFillStar} from "react-icons/ai";
import {BiReceipt} from "react-icons/bi";
import Image3 from './img3.jpg';

class Home extends Component {
    render() {
        return (                      <div className="second">
        <div className="card mb-3 border-0">
           <div className="row p-0">
              <div className="col-md-6">
                 <div className="card-body">
                    <h5 className="card-title">FIND AFFORDABLE</h5>
                    <p className="card-text">
                       Homes made easy.
                    </p>
                    <p className="text">
                       Adorable sweet homes that Affordable on your account
                    </p>
                 </div>
                 <ButtonGroup className="button2">
                    <button>
                       Contact Now 
                       <span>
                          <FaPhone/>
                       </span>
                    </button>
                    <button>
                       Enquiry Now 
                       <span>
                          <FaQuestionCircle/>
                       </span>
                    </button>
                 </ButtonGroup>
              </div>
              <div className="col-md-6 col-sm-12">
                 <img src={Image2} alt=""    style={{margin:"10px",height:"300px",width:"350px"}}/>
                 <div className="position-relative ind shadow p-3 mb-5 bg-white rounded">
                    <i className="sha">
                       <ImHome></ImHome>
                    </i>
                    <h6 style={{textAlign:"center"}}>Europian Design</h6>
                    <ButtonGroup className="button3">
                       <button>View Details</button>
                    </ButtonGroup>
                 </div>
              </div>
           </div>
        </div>
        <div className="third">
           <div class="row">
              <div class="col-md-4">
                 <div className="shadow p-3 mb-5 bg-white rounded text-center">
                    <i className="third1">
                       <AiOutlineDollarCircle/>
                    </i>
                    <h4>Easy Payment</h4>
                    <p>we ensure the Payment must be easy and secured for those who are interest to buy real estate house</p>
                 </div>
              </div>
              <div class="col-md-4" >
                 <div className="shadow p-3 mb-5 bg-white rounded text-center" style={{marginTop:"90px"}}>
                    <i className="third1">
                       <AiOutlineSafetyCertificate/>
                    </i>
                    <h4>Safety Certificate</h4>
                    <p>we provide a safety certificate and legitamate every transaction we had and security for money transaction</p>
                 </div>
              </div>
              <div class="col-md-4">
                 <div className="shadow p-3 mb-5 bg-white rounded text-center">
                    <i className="third1">
                       <BiReceipt/>
                    </i>
                    <h4>Down Payment</h4>
                    <p>we accept down payment for the client who really need to find a house that suitable with their family </p>
                 </div>
              </div>
           </div>
        </div>
        <div className="four">
           <div className="row">
              <div className="col-md-6">
                 <img src={Image3} alt=""  style={{width:"370px",height:"250px"}}></img>
                 <h6 className=" pos1 position-relative">Newest house for sale</h6>
              </div>
              <div className="col-md-6">
                 <h3>2 Floor Italian Design House</h3>
                 <p style={{marginBottom:"0px"}}>Ocafia , Carcar , City Cebu</p>
                 <i className="four1">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                 </i>
                 <p className="four2">-real estate house range with 200 sqrmeters.<br/>
                    -5 rooms with their owned toilet.<br/>
                    -each room has 2 bed with 10 sqrmeters wide.<br/>
                    -2 kitchen 1 toilet near in kitchen.
                 </p>
                 <ButtonGroup> <button className="four3 bg-transparent">View more details</button></ButtonGroup>
              </div>
           </div>
        </div>
        <div className="row">
           <div className="col">
              <div className="position-relative  five shadow p-3 mb-5 bg-white text-center">
                 <p className="five1">PRICE:12,500,000<span  className="five2" >P</span></p>
              </div>
           </div>
        </div>
     </div>
              );
    }
}

export default Home;