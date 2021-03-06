import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Jumbotron, Button, Card, Row, Col, CardImg } from 'react-bootstrap';
import img3 from '../images/admin.jpg';
import { Link } from "react-router-dom";

class AdminHome extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token1")
        let loggedIn = true;
        if (token == null) {
            loggedIn = false;
        }
        this.state = {
            loggedIn
        }
    }
    render() {
        if (this.state.loggedIn == false) {
            return <Redirect to="/admin-login" />
        }
        return (
            <div style={{ backgroundImage: 'linear-gradient(to right, black, lightgreen)', }}>
                <div style={{
                    backgroundColor: 'rgba(15,15,15,0.4)', filter: 'blur(10)',
                    padding: "40px 40px"
                }}>
                    <Row>
                        <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>

                            <p>
                                <Link to="/viewComplain"><Button variant="bg-transparent" style={{ background: 'linear-gradient(to right, #00b09b, #96c93d)', padding: "10px 76px 10px 76px", color: "white", fontSize: "20px", fontFamily: "Forte" }}>View Complaints</Button></Link>
                            </p>
                            <p>
                                <Link to="/viewFarmer"><Button variant="bg-transparent" style={{ background: 'linear-gradient(to right, #fc5c7d, #6a82fb)', padding: "10px 93px 10px 93px", color: "white", fontSize: "20px", fontFamily: "Forte" }}>View Farmers</Button></Link>
                            </p>
                            <p>
                                <Link to="/viewDealer"><Button variant="bg-transparent" style={{ background: 'linear-gradient(to right, #00b09b, #96c93d)', padding: "10px 93px 10px 93px", color: "white", fontSize: "20px", fontFamily: "Forte" }}>View Dealers</Button></Link>
                            </p>

                        </Col>
                        <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>

                            <Card style={{ backgroundColor: 'rgba(15,15,15,0.2)', color: "white", fontSize: "25px", fontFamily: "Forte" }}>

                                <CardImg src={img3} ></CardImg>
                                <br />
                                <Card.Title style={{ fontSize: "40px", color: "black" }}>Welcome Admin!</Card.Title>
                                <Card.Text>Admin can view complaints about Dealer(s),</Card.Text>
                                <Card.Text>can maintain records of</Card.Text>
                                <Card.Text>Farmer(s) and Dealer(s)!</Card.Text>
                                <Card.Text><Link to="/"><Button variant="danger" style={{ padding: "10px 30px" }}>Logout</Button></Link></Card.Text>
                                <br />
                            </Card>


                        </Col>
                    </Row>

                </div>
            </div>
        );
    }
}
export default AdminHome;