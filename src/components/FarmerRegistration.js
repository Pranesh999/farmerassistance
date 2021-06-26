import React, { Component } from 'react' 

import FarmerService from '../Services/FarmerService'; 
import img5 from '../images/regis.jpg';

 

class RegisterFarmer extends Component { 

    constructor(props) { 

        super(props) 

        this.state = { 

            // step 2 

           
            farmerId: '', 
            farmerName: '', 
            cropName: '', 
            emailId: '' ,
            password: '' ,
            location: '' ,
            contactNo: '' 

        } 

        this.changeNameHandler = this.changeNameHandler.bind(this); 

        this.changeeIdHandler = this.changeeIdHandler.bind(this); 

        this.changeEmailHandler = this.changeEmailHandler.bind(this); 

        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeCropNameHandler = this.changeCropNameHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);

        this.registerFarmer = this.registerFarmer.bind(this); 

    } 

 
   
    registerFarmer = (e) => { 

      

        let farmer = {farmerName: this.state.farmerName, cropName: this.state.cropName, farmerId: this.state.farmerId, emailId: this.state.emailId, password: this.state.password, location: this.state.location, contactNo: this.state.contactNo}; 

        e.preventDefault();

         console.log('farmer =>'+ JSON.stringify(farmer));

         FarmerService.registerFarmer(farmer).then(res =>{ 

                

          this.props.history.push('/home');
         })

        // step 5 

     
    } 

     

    changeNameHandler= (event) => { 

        this.setState({farmerName: event.target.value}); 

    } 

 

    changeeIdHandler= (event) => { 

        this.setState({farmerId: event.target.value}); 

    } 

 

    changeEmailHandler= (event) => { 

        this.setState({emailId: event.target.value}); 

    } 

 

    changeCropNameHandler= (event) => { 

        this.setState({cropName: event.target.value});  

    } 

    changePasswordHandler= (event) => { 

        this.setState({password: event.target.value}); 

    } 
    changeContactHandler= (event) => { 

        this.setState({contactNo: event.target.value}); 

    } 
    changeLocationHandler= (event) => { 

        this.setState({location: event.target.value}); 

    } 

 

    cancel(){ 

        this.props.history.push('/home'); 

    } 

 

    

    render() { 

         

        return ( 
            <div style={{
                backgroundImage: `url(${img5})`,
                backgroundSize: "fit"
            }}>
                <div style={{
                backgroundColor: 'rgba(15,15,15,0.5)', filter: 'blur(5)',
                display: "block",
                justifyContent: "center",
            }}>
              

            <div> 

                <br></br> 

                   <div className = "container"> 

                        <div className = "row"> 

                            <div className = "card col-md-6 offset-md-3 offset-md-3"> 

                               <h3> Farmer Registration</h3>
                                <div className = "card-body"> 

                                    <form> 

                                        <div className = "form-group"> 

                                            <label> Farmer Id: </label> 

                                            <input placeholder="Farmer Id" name="id" className="form-control"  

                                                value={this.state.farmerId} onChange={this.changeeIdHandler}/> 

                                        </div> 

                                        <div className = "form-group"> 

                                            <label> Farmer Name: </label> 

                                            <input placeholder="farmerName" name="name" className="form-control"  

                                                value={this.state.farmerName} onChange={this.changeNameHandler}/> 

                                        </div> 

                                        <div className = "form-group"> 

                                            <label> Crop name: </label> 

                                            <input placeholder="cropName" name="cropName" className="form-control"  

                                                value={this.state.cropName} onChange={this.changeCropNameHandler}/> 

                                        </div> 

                                        <div className = "form-group"> 

                                            <label> Email Id: </label> 

                                            <input placeholder="Email Address" name="emailId" className="form-control"  

                                                value={this.state.emailId} onChange={this.changeEmailHandler}/> 

                                        </div> 
                                        <div className = "form-group"> 

                                        <label> Password: </label> 

                                        <input placeholder="password" name="password" className="form-control"  

                                         value={this.state.password} onChange={this.changePasswordHandler}/> 

                                         </div> 
 
                                         <div className = "form-group"> 

                                        <label> location: </label> 

                                         <input placeholder="location" name="location" className="form-control"  

                                         value={this.state.location} onChange={this.changeLocationHandler}/> 

                                          </div> 

                                          <div className = "form-group"> 

                                        <label> Contact: </label> 

                                        <input placeholder="contact" name="cotact" className="form-control"  

                                         value={this.state.contactNo} onChange={this.changeContactHandler}/> 

                                             </div> 

                                        <button className="btn btn-success" onClick={this.registerFarmer}>Register</button> 

                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> 

                                    </form> 

                                </div> 

                            </div> 

                        </div> 

 </div>

                   </div> 

            </div> 
            </div>
          

        ) 

    } 

} 

 

export default RegisterFarmer;