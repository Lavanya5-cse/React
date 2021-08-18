 import React, { Component } from 'react';
 
 class ContactUs extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            name:'',
            email:'',
            phone:0,
            add:'',
            type:''

        };
    }
    storeData = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }
      handleChange = (event) => {
        event.preventDefault();
console.log(this.state);
          fetch('http://localhost:3001/customers', {
            method: 'POST',
            headers:{"Content-type":"application/json;charset=UTF-8"},
             body: JSON.stringify(this.state)
          }).then((response)=> {
            response.json().then((data)=>{
alert('response submitted',data);
            });

          });
      }
      handleChange1 = (event) => {
        event.preventDefault();
console.log(this.state);
          fetch('http://localhost:3001/customers', {
            method: 'PUT',
            headers:{"Content-type":"application/json;charset=UTF-8"},
             body: JSON.stringify(this.state)
          }).then((response)=> {
            response.json().then((data)=>{this.setState({ postId: data.id })
alert('response submitted',response);
            });

   
          });
      }
      handleChange2 = (event) => {
        event.preventDefault();
console.log(this.state);
          fetch('http://localhost:3001/{id}', {
            method: 'DELETE',
            headers:{"Content-type":"application/json;charset=UTF-8"},
           }).then((response)=> {
            response.json().then((data)=>{this.setState({ postId: data.id })
alert('response submitted',response);
            }).catch(err=>console.log(err));

          });
      }


     render() {
          return (
             <div className="con">
                                 <form className="for" style={{"marginBottom":"10px"}}>
                    <div class="form-group row p-4 ">
                    Name 
                     <input type="text" name="name" className="form-control" value={this.state.value} onChange={this.storeData}/>
                    </div>
                    <div class="form-group row p-4">
                        Email
                    <input type="text" name="email" className="form-control" value={this.state.value} onChange={this.storeData}/>
                    </div>
                    <div class="form-group row p-4">
                        PhNum
                        <input type="number" name="phone" className="form-control " value={this.state.value} onChange={this.storeData}/>
                    </div>
                    <div class="form-group row p-4">
                        Address
                        <input type="text" name="add" className="form-control" value={this.state.value} onChange={this.storeData}/>
                    </div>
                    <div class="form-group row p-4">
                        TypeofHouse
                        <select name="type"   value={this.state.value} onChange={this.storeData}>
                        <option className="form-control">Modern</option>
                        <option className="form-control"> Individual</option>
                        <option className="form-control">Classic</option>

                        </select>
                                       </div>


<div className="row"  >
  <div className="col-md-3"> 
    <button type="update" className="btn btn-success" style={{"width":"100px","marginRight":"30px","padding":"10px"}} onClick={this.handleChange1}>Update</button>
    </div>
    <div className="col-md-3"> 

 <button type="submit" className=" btn btn-success" style={{"width":"100px","marginRight":"30px","padding":"10px"}} onClick={this.handleChange}>Submit</button>
 </div>
 <div className="col-md-3"> 

    <button type="delete" className=" btn btn-success" style={{"width":"100px","padding":"10px"}} onClick={this.handleChange2}>Delete</button>
    </div>
</div>
                </form>

             </div>
         );
     }
 }
 
 export default ContactUs;