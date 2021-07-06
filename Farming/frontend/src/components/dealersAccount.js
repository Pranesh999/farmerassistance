import React, { Component } from 'react';
import { Jumbotron, Button, Card, Row, Col, CardImg } from 'react-bootstrap';
import img3 from '../images/dealer.jpg';
import { Link } from "react-router-dom";

class DealersAccountComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: this.props.match.params.email
    }
  }

  render() {
    return (
      <div style={{ backgroundImage: 'linear-gradient(to right, black, lightgreen)', }}>
        <div style={{
          backgroundColor: 'rgba(15,15,15,0.4)', filter: 'blur(10)',
          padding: "40px 40px"
        }}>

          <Row>
            <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
              <p>
                <Link to={`/post/${this.state.email}`}><Button variant="bg-transparent" style={{ background: 'linear-gradient(to right, #00b09b, #96c93d)', padding: "10px 80px 10px 80px", color: "white", fontSize: "20px", fontFamily: "Forte" }}>Post Advertisement</Button></Link>
              </p>
              <p>
                <Link to={`/dealerComplain/${this.state.email}`}><Button variant="bg-transparent" style={{ background: 'linear-gradient(to right, #fc5c7d, #6a82fb)', padding: "10px 88px 10px 88px", color: "white", fontSize: "20px", fontFamily: "Forte" }} onClick={this.handleClick}>View Complaints</Button></Link>
              </p>
              <p>
                <Link to={`/viewAdvertisementById/${this.state.email}`}><Button variant="bg-transparent" style={{ background: 'linear-gradient(to right, #00b09b, #96c93d)', padding: "10px 80px 10px 80px", color: "white", fontSize: "20px", fontFamily: "Forte" }}>View Advertisement</Button></Link>
              </p>
              <p>
                <Link to="/chat"><Button variant="bg-transparent" style={{ background: 'linear-gradient(to right, #fc5c7d, #6a82fb)', padding: "10px 140px 10px 140px", color: "white", fontSize: "20px", fontFamily: "Forte" }}>Chat</Button></Link>
              </p>

            </Col>
            <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>

              <Card style={{ backgroundColor: 'rgba(15,15,15,0.2)', color: "white", fontSize: "25px", fontFamily: "Forte" }}>

                <CardImg style={{ height: "14em" }} src={img3} ></CardImg>
                <br />
                <Card.Title style={{ fontSize: "40px", color: "black" }}>Welcome Dealer!</Card.Title>
                <Card.Text>Dealer can post advertisement,</Card.Text>
                <Card.Text>can view and delete his/her advertisement,</Card.Text>
                <Card.Text>can view his/her Complaints,</Card.Text>
                <Card.Text>and can also chat with the Farmer!</Card.Text>
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
export default DealersAccountComponent;




