import React from 'react';
import { useDispatch } from 'react-redux';
import addAdvertisementAction from '../actions/addAdvertisementAction';
import Dealer from '../model/Dealer';
import { Form, Jumbotron, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";


let dispatch;
let files;
let history;
const formdata=null;
let email=null;
const PostAdvertisement = (props) => {

     email = props.match.params.email;
        
    dispatch = useDispatch();
    history = useHistory();

    return (
      
        <div style={{backgroundImage: 'linear-gradient(to right, black, lightgreen)',}}>
        <div style={{
            backgroundColor:'rgba(15,15,15,0.4)', filter: 'blur(10)',
            display:"flex",
            justifyContent:"center",
           padding:"40px 40px"
       }}>
             <Jumbotron style={{width: 600, backgroundColor:'rgba(15,15,15,0.4)', filter: 'blur(10)', color: 'white'}}>
                <h1 style={{fontFamily:"Forte"}}>Post Advertisement</h1>
                <br/>
                <Form onSubmit={handleSubmit} style={{textAlign:"left"}}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Enter Product Name</Form.Label>
                        <Form.Control type="text" id="name" name="name" placeholder="Enter Name"  onBlur={validateName} required/>
                    </Form.Group>
                    <Form.Group controlId="exampleFormDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" id="desc" name="desc" placeholder="Description"  rows={3} onBlur={validateDescription} required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPrice">
                        <Form.Label>Enter Price/Kg</Form.Label>
                        <Form.Control type="text" id="price" name="price" placeholder="Enter Price" onBlur={validatePrice} required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicDealerId">
                        <Form.Label>Enter Your DealerId</Form.Label>
                        <Form.Control type="text" id="dealerid" name="dealerid" placeholder="Enter DealerId" onBlur={validateDealerId} required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicImage">
                        <Form.Label>Add Image</Form.Label>
                        <Form.Control type="file" id="file" name="file" onChange={(e) => upload(e)} required/>
                    </Form.Group>
                    <br/>
                     <Form.Group controlId="formBasicButton">
                        <Button variant="success" type="submit" id="btnsubmit" style={{marginLeft:"152px", paddingLeft:"20px", paddingRight:"20px"}}>Submit</Button>
                        <Button variant="secondary" type="reset" id="btnsubmit" style={{marginLeft:"40px", paddingLeft:"26px", paddingRight:"26px"}}>Clear</Button>
                    </Form.Group>
                </Form>
                <Link to={`/dealerAccount/${email}`}>
                    <Button variant="info" 
                            type="back" id="btnback" 
                            style={{paddingLeft:"24px", paddingRight:"24px"}}> 
                            <FontAwesomeIcon icon={faArrowLeft}/>  Back</Button>
                </Link>
            </Jumbotron>
        </div>
      </div>
      
      );

}
 
function upload(e)
{
    e.preventDefault();
    console.log("upload called");
    files= e.target.files;
    console.log("files",files);
    const formdata = new FormData();
    formdata.append('file',files[0]);
    console.log("formdata",formdata);
}


//for validating name
function validateName(event) {
    const data = event.target.value;
    console.log("target", data);

    let regex = /^([A-Z][a-zA-Z]{3,})$/;
    let str = data;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log("valid");
    }
    else {
        alert("Enter valid Name!");
    }
}

//for validating description
function validateDescription(event) {
    const data = event.target.value;
    console.log("target", data);

    let regex = /\b[A-Z]((?!=|\,|\.).)+(.)\b/g;
    let str = data;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log("valid");
    }
    else {
       alert("Enter valid Description!");
    }
}

//for validating price
function validatePrice(event) {
    const data = event.target.value;
    console.log("target", data);

    let regex = /^[1-9][0-9]$/;
    let str = data;
    console.log(regex, str);

    if (regex.test(str) && str != "") {
        console.log("valid");
    }
    else {
        alert("Enter valid Price!");
    }
}

//for validating dealerId
function validateDealerId(event) {
    const data = event.target.value;
    console.log("target", data);

    let regex = /^[1-9]$/;
    let str = data;
    console.log(regex, str);

    if (regex.test(str) && str != "") {
        console.log("valid");
    }
    else {
        alert("Invalid DealerId!");
    }
}

function handleSubmit(event)        
{
  event.preventDefault();
  const data = new FormData(event.target);
  const name = data.get('name');
  const description = data.get('desc');
  const price = data.get('price');
  const dealerId = data.get('dealerid');
  
  
  const advertisementObj = new Dealer(dealerId,name,description,price,files[0]);
  console.log("advertisementObj:",advertisementObj);
  
  dispatch(addAdvertisementAction(advertisementObj));         //For dispatching the action.
  alert("Advertisement Added Succesfully!");
  
  history.push(`/dealerAccount/${email}`);              //To navigate the page to the specified url.
}

export default PostAdvertisement;