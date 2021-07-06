import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import viewAdvertisementAction from '../actions/viewAdvertisementAction';
import { Card, Button, Row, Col, Table, Container, Jumbotron } from 'react-bootstrap';
import {faArrowLeft, faTrash} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let dispatch;
const ViewAdvertisement = (props) => {

    const email = props.match.params.email;

    let advertisementList= useSelector(state => state.AdvertisementReducer.initialState);

    dispatch = useDispatch();

   React.useEffect(() =>                 //creates an empty array only once, when the component mounts.
    {
      Advertisement()
   }, []);

   if(!Array.isArray(advertisementList))
  {
    advertisementList = [];
    console.log("Set advertisementList to blank array");
  }
    
    const Advertisement = () =>              
    {
      dispatch(viewAdvertisementAction())
    }
    
    console.log("AdvertismentList: ", advertisementList);
    //const {eventname,description,image}=loginstatus;
    
    return (
      
      <div style={{backgroundImage: 'linear-gradient(to right, black, lightgreen)',}}>
      <div style={{
          backgroundColor:'rgba(15,15,15,0.4)', filter: 'blur(10)',
          display:"flex",
          justifyContent:"center",
         padding:"40px 40px"
     }}>
        <Jumbotron style={{width: 1000, marginTop:"73px", marginBottom:"73px", backgroundColor:'rgba(15,15,15,0.4)', filter: 'blur(10)', color: 'white'}}>
                <h1 style={{fontFamily:"Forte"}}>All Advertisements</h1>
                <br/>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price Rs /Kg</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                    {renderTableData(advertisementList)}  
                    </tbody>
                </Table>
                <br/>
                <Link to={`/farmer-home/${email}`}>
                    <Button variant="info" 
                            type="back" id="btnback" 
                            style={{paddingLeft:"26px", paddingRight:"26px"}}> 
                            <FontAwesomeIcon icon={faArrowLeft}/>  Back</Button>
                </Link>
          </Jumbotron>
        
      </div>
      </div>
      );



}


function renderTableData(advertisementList)           
{
  console.log("outside map",advertisementList)
 
  return advertisementList.map((advertisment, index) =>
  {
    console.log("inside map",advertisementList)
    const { name, description, price, image} = advertisment //destructuring
    //var data = {image}
  // const Example = ({data}) => <img src={`data:image/png;base64,${data}`} />
  // var base64Icon = `data:image/png;base64,${image}`;

   var base64Icon = `data:image/png[jpeg];base64,${image}`;
  
   
   console.log(image)
    return (
      <tr>
          <td>{name}</td>
          <td>{description}</td>
          <td>Rs {price}/Kg</td>
          <td><img style={{width: "16em", height: "14em"}}src={base64Icon}/></td>
      </tr>  
    )
  })
};


  
  


export default ViewAdvertisement;