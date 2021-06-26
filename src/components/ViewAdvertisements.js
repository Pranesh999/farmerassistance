import React, { Component } from 'react';

class ViewAdvertisements extends Component {

    constructor(props) { 

        super(props) 

 

        this.state = { 

         advertisement: []

        } 

    } 

    goBack(){ 

        this.props.history.push('/farmers'); 

    } 


  render() {
    return (
        <div className = "container"> 
               <div className = "row"> 

<table className = "table table-striped table-bordered"> 



    <thead> 

        <tr> 

            <th> Advertisement Id</th> 

            <th> Crop Name</th> 

            <th> Quantity</th> 

            <th> Contact Number</th> 
            <th> Dealer Name</th> 
            <th> Unit</th> 
            
            
        </tr> 

    </thead> 

    <tbody> 

        { 

            this.state.advertisement.map( 

                advertisement =>  

                <tr key = {advertisement.aid}> 

                      <td> { advertisement.aid} </td>    

                     <td> { advertisement.cropname} </td>    

                     <td>  { advertisement.quantity}</td> 

                     <td> {advertisement.contact}</td>
                     <td> {advertisement.name}</td>
                     <td> {advertisement.unit}</td>
                   
                      
                </tr> 

            ) 

        } 

    </tbody> 

</table> 



</div> 

                {/* <button className="btn btn-danger" onClick={this.goBack.bind(this)} style={{marginLeft: "10px"}}>Back</button>  */}
                </div> 

    );
  }
}

export default ViewAdvertisements;