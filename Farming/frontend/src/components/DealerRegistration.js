import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Dealerservice from '../Services/Dealerservice';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLock, faUserPlus, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import img5 from '../images/image33.jpg';
import { Jumbotron } from 'react-bootstrap';

const emailRegex = RegExp(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);

const numberRegex = RegExp(/^[0][1-9]\d{9}$|^[1-9]\d{9}$/);

const nameRegex = RegExp("^[a-zA-Z ]{2,30}$");

const passwordRegex = RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

class DealerRegiatration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dealerName: '',
      dealerContactNumber: '',
      dealerEmailId: '',
      dealerPassword: '',
      nameError: '',
      cntnoError: '',
      emailError: '',
    };

    this.changeDealerNameHandler = this.changeDealerNameHandler.bind(this);
    this.changeDealerContactNumberHandler = this.changeDealerContactNumberHandler.bind(this);
    this.changeDealerEmailHandler = this.changeDealerEmailHandler.bind(this);
    this.changeDealerPasswordHandler = this.changeDealerPasswordHandler.bind(this);
    this.addDealer = this.addDealer.bind(this);
  }


  componentDidMount() {

    // step 4
    if (this.state.dealerEmailId === '_add') {
      return

    }
  }

  validate = () => {
    let nameError = "";
    let emailError = "";
    let cntnoError = "";
    let passError = "";

    if (!nameRegex.test(this.state.dealerName)) {
      nameError = "Invalid Input";
    }
    if (!numberRegex.test(this.state.dealerContactNumber)) {
      cntnoError = "Invalid Input";
    }
    if (!emailRegex.test(this.state.dealerEmailId)) {
      emailError = "Invalid Input";
    }
    if (!passwordRegex.test(this.state.dealerPassword)) {
      passError = "Invalid Input";
    }

    if (nameError || cntnoError || emailError || passError) {
      this.setState({ nameError, cntnoError, emailError, passError });
      return false;
    }
    return true;
  }

  addDealer = (e) => {
    const isValid = this.validate();
    e.preventDefault();
    let dealer = { dealerName: this.state.dealerName, dealerEmailId: this.state.dealerEmailId, dealerContactNumber: this.state.dealerContactNumber, dealerPassword: this.state.dealerPassword };
    console.log('dealer => ' + JSON.stringify(dealer));

    if (isValid) {
      console.log(JSON.stringify(dealer));
      Dealerservice.signUp(dealer).then(res => {
        console.log("success")
        alert("Registration Successful");
        this.props.history.push('/dealerLogin');
      }, error => {
        alert("Invalid Name, EmailId, ContactNo or Password");
      });
    }
  }

  changeDealerNameHandler = (event) => {
    this.setState({ dealerName: event.target.value });
  }


  changeDealerContactNumberHandler = (event) => {
    this.setState({ dealerContactNumber: event.target.value });
  }

  changeDealerEmailHandler = (event) => {
    this.setState({ dealerEmailId: event.target.value });
  }


  changeDealerPasswordHandler = (event) => {
    this.setState({ dealerPassword: event.target.value });
  }


  render() {
    const { formErrors } = this.state;
    return (
      <div style={{
        backgroundImage: `url(${img5})`,
        backgroundSize: "cover"
      }}>
        <div style={{
          backgroundColor: 'rgba(15,15,15,0.4)', filter: 'blur(10)',
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px"
        }}>
          <Jumbotron style={{ width: 600, height: 680, textAlign: "center", backgroundColor: 'rgba(15,15,15,0.4)', filter: 'blur(10)', color: 'white' }}>
            <h1 style={{ fontFamily: "Forte" }}>  <FontAwesomeIcon icon={faUsers} /> Sign up</h1>
            <br />
            <Form onSubmit={this.addDealer} style={{ textAlign: "left" }}>

              <Form.Group controlId="formBasicName">
                <Form.Label>Enter Name</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control autoComplete="off" type="text" name="dealerName" placeholder="Enter Name" value={this.state.dealerName} onChange={this.handleChange} required
                    onChange={this.changeDealerNameHandler} />
                </InputGroup>
                <div style={{ color: "#ffff33" }}>{this.state.nameError}</div>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter EmailId</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control required autoComplete="off" type="email" name="dealerEmailId" value={this.state.dealerEmailId} onChange={this.handleChange} id="Email" placeholder="Enter Email"
                    onChange={this.changeDealerEmailHandler} />
                </InputGroup>
                <div style={{ color: "#ffff33" }}>{this.state.emailError}</div>
              </Form.Group>

              <Form.Group controlId="formBasicContactNumber">
                <Form.Label>Enter Contact Number</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><FontAwesomeIcon icon={faPhone} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control autoComplete="off" type="contactNumber" name="dealerContactNumber" value={this.state.dealerContactNumber} onChange={this.handleChange} id="contact" placeholder="Enter Contact Number" required
                    onChange={this.changeDealerContactNumberHandler} />
                </InputGroup>
                <div style={{ color: "#ffff33" }}>{this.state.cntnoError}</div>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Enter Password</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control autoComplete="off" type="password"
                    name="dealerPassword" value={this.state.dealerPassword} onChange={this.handleChange} id="Password" placeholder="Enter Password" required
                    onChange={this.changeDealerPasswordHandler} />
                </InputGroup>
                <div style={{ color: "#ffff33" }}>{this.state.passError}</div>
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicButton">
                <Button variant="success" type="submit" style={{ padding: "7px 80px", marginLeft: "140px" }}> <FontAwesomeIcon icon={faUserPlus} />   SIGN-UP </Button>
              </Form.Group>
              <Form.Group controlId="formBasicLink">
                <small><Link to="/dealerLogin" style={{ textDecoration: "none" }}><h5 style={{ fontFamily: "Calibri", paddingLeft: "125px" }}>Already Have an Account? - Log-in</h5></Link></small>
              </Form.Group>
            </Form>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
export default DealerRegiatration