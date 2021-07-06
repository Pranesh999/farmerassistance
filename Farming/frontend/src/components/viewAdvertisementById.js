import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button, Form, Jumbotron } from 'react-bootstrap';
import viewByIdAction from '../actions/viewAdvertisementByIdAction';
import { useState } from 'react';
import DeleteAdvertisementAction from '../actions/deleteAdvertisementAction';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft, faTrash} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

let dispatch;
let selectedview;
let selectedOption;
const ViewAdvertisementById = (props) => {

    const email = props.match.params.email;

  //let [filter, setFilter] = useState();
  let [initialState, setInitialState] = useState();

  let dealerList= useSelector(state => state.AdvertisementReducer.initialState);
  
  dispatch = useDispatch();
  console.log("dealerLists: ", dealerList);
  if(!Array.isArray(dealerList))
  {
    dealerList = [];
    console.log("Set dealerList to blank array");
  }


  function handleSearch(event) {

    event.preventDefault();
    dispatch(viewByIdAction(selectedview))
    .then((response) => {
    console.log("Response: ", response);
    console.log("List: ", dealerList);
    setInitialState(dealerList);
    });

  }
           
  return (
    <div style={{backgroundImage: 'linear-gradient(to right, black, lightgreen)',}}>
    <div style={{
        backgroundColor:'rgba(15,15,15,0.4)', filter: 'blur(10)',
        display:"flex",
        justifyContent:"center",
       padding:"40px 40px"
   }}>
                        <Jumbotron style={{width: 600, marginTop:"73px", marginBottom:"73px" ,backgroundColor:'rgba(15,15,15,0.4)', filter: 'blur(10)', color: 'white'}}>
                        <h1 style={{fontFamily:"Forte"}}>View Advertisement</h1>
                        <br/>
                            <Form  onSubmit={handleSearch} style={{textAlign:"left"}}>
                                <Form.Group controlId="formBasicView">
                                      <Form.Label for="view">Enter Your DealerId</Form.Label>
                                      <Form.Control type="text" id="filter" name="filter" onChange={filterHandleChange} required></Form.Control>
                                </Form.Group> 
                                <br/>     
                                <Form.Group controlId="formBasicButton">
                                      <Button variant="success" type="submit" id="btnsubmit" style={{marginLeft:"160px", paddingLeft:"20px", paddingRight:"20px"}}>Submit</Button>
                                      <Link to={`/dealerAccount/${email}`}><Button variant="info" type="back" id="btnback" style={{marginLeft:"30px",paddingLeft:"24px", paddingRight:"24px"}}>
                                      <FontAwesomeIcon icon={faArrowLeft}/>  Back</Button></Link>
                                </Form.Group>
                           </Form>    
                                {renderCardData(dealerList)}
                       </Jumbotron>
                </div>
          </div>
    );
}
  

function renderCardData(dealerList) 
{
  console.log("List: ", dealerList);
  return dealerList.map((Advertisement, index) =>
  {
    console.log("inside map",dealerList)
    const {advertisementid, name, description, price, image, dealerId } = Advertisement //destructuring
    
    var base64Icon = `data:image/png[jpeg];base64,${image}`;
    return (
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
              }}>
              <Card bg="transparent"
               text="light" 
               style={{ width: "65%", margin: "20px 20px 20px 20px", border: "0.8px solid black", borderRadius: "5px", backgroundColor: 'rgba(15,15,15,0.2)' }}>
                  <Card.Img style={{width: "100%", height: "50%"}} variant="top" src={base64Icon} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Rs {price}/Kg</Card.Text>
                    <Button style={{ width: "8em"}} variant="danger" onClick={(e) => deleteAdvertisement(e, advertisementid, dealerId)}><FontAwesomeIcon icon={faTrash}/> Delete </Button>
                  </Card.Body>
              </Card>
            </div>  
            )
    })
};
  



function filterHandleChange(event) 
{
  selectedview = event.target.value
  console.log("Selected view: " + selectedview);
 
}


function deleteAdvertisement(event,advertisementid, dealerId)
{
  event.preventDefault();
  dispatch(DeleteAdvertisementAction(advertisementid, dealerId));
}

export default ViewAdvertisementById;