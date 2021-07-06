import React, { Component } from 'react'
import { Link } from "react-router-dom";
import FarmerService from '../Services/FarmerService';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLock, faUserPlus, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import img5 from '../images/image33.jpg';
import { Jumbotron } from 'react-bootstrap';

const numberRegex = RegExp(
  /^[0][1-9]\d{9}$|^[1-9]\d{9}$/
);

const nameRegex = RegExp(/^[a-zA-Z ]{2,30}$/);

const emailRegex = RegExp(
  ///^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

);

const passwordRegex = RegExp(
  /^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class FarmerRegistration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      farmerName: '',
      farmerEmailId: '',
      farmerContactNumber: '',
      farmerPassword: '',

      formErrors: {
        farmerName: "",
        farmerEmailId: "",
        farmerContactNumber: "",
        farmerPassword: ""
      }
    };
    this.addFarmer = this.addFarmer.bind(this);
  }

  componentDidMount() {

    // step 4
    if (this.state.farmerEmailId === '_add') {
      return

    }
  }


  addFarmer = (e) => {
    e.preventDefault();
    let farmer = { farmerName: this.state.farmerName, farmerEmailId: this.state.farmerEmailId, farmerContactNumber: this.state.farmerContactNumber, farmerPassword: this.state.farmerPassword };
    console.log('farmer => ' + JSON.stringify(farmer));

    FarmerService.signUp(farmer).then(res => {
      this.props.history.push('/farmerLogin');
    }, error => {
      alert("Invalid Name, EmailId, ContactNo or Password");
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
            --SUBMITTING--
            farmer Name: ${this.state.farmerName}
            farmer Email:${this.statr.farmerEmailId}
            farmer Contact Number: ${this.state.farmerContactNumber}
            farmer password:${this.state.farmerPassword}
             
          `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      alert("enter valid details");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "farmerName":
        formErrors.farmerName = nameRegex.test(value)
          ? "" : "Invalid Name";
        break;
      case "farmerEmailId":
        formErrors.farmerEmailId = emailRegex.test(value)
          //value.length < 5 ? "please enter a valid email" : "")
          ? ""
          : "invalid email";
        break;
      case "farmerContactNumber":
        formErrors.farmerContactNumber = numberRegex.test(value)
          ? ""
          : "invalid Contact Number";
        break;
      case "farmerPassword":
        formErrors.farmerPassword = passwordRegex.test(value)
          ? ""
          : "validate password";
        break;

      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };


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
            <Form style={{ textAlign: "left" }}>

              <Form.Group controlId="formBasicName">
                <Form.Label>Enter Name</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control className={formErrors.farmerName.length > 0 ? "error" : null} autoComplete="off" type="text" name="farmerName" placeholder="Enter Name" value={this.state.farmerName} onChange={this.handleChange} />
                </InputGroup>
                {formErrors.farmerName.length > 0 && (
                  <span className="errorMessage">{formErrors.farmerName}</span>
                )}
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter EmailId</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control className={formErrors.farmerEmailId.length > 0 ? "error" : null} required autoComplete="off" type="email" name="farmerEmailId" value={this.state.farmerEmailId} onChange={this.handleChange} id="Email" placeholder="Enter Email" />
                </InputGroup>
                {formErrors.farmerEmailId.length > 0 && (
                  <span className="errorMessage">{formErrors.farmerEmailId}</span>
                )}
              </Form.Group>

              <Form.Group controlId="formBasicContactNumber">
                <Form.Label>Enter Contact Number</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><FontAwesomeIcon icon={faPhone} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control className={formErrors.farmerContactNumber.length > 0 ? "error" : null} autoComplete="off" type="contactNumber" name="farmerContactNumber" value={this.state.farmerContactNumber} onChange={this.handleChange} id="contact" placeholder="Enter Contact Number" />
                </InputGroup>
                {formErrors.farmerContactNumber.length > 0 && (
                  <span className="errorMessage">{formErrors.farmerContactNumber}</span>
                )}
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Enter Password</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control className={formErrors.farmerPassword.length > 0 ? "error" : null} autoComplete="off" type="password"
                    name="farmerPassword" value={this.state.farmerPassword} onChange={this.handleChange} id="Password" placeholder="Enter Password" />
                </InputGroup>
                {formErrors.farmerPassword.length > 0 && (
                  <span className="errorMessage">{formErrors.farmerPassword}</span>
                )}
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicButton">
                <Button variant="success" type="submit" onClick={this.addFarmer} disabled={this.state.farmerPassword.length === 0 || this.state.farmerName.length === 0 || this.state.farmerEmailId.length === 0 || this.state.farmerContactNumber.length === 0} style={{ padding: "7px 80px", marginLeft: "140px" }}> <FontAwesomeIcon icon={faUserPlus} />   SIGN-UP </Button>
              </Form.Group>
              <Form.Group controlId="formBasicLink">
                <small><Link to="/farmerLogin" style={{ textDecoration: "none" }}><h5 style={{ fontFamily: "Calibri", paddingLeft: "125px" }}>Already Have an Account? - Log-in</h5></Link></small>
              </Form.Group>
            </Form>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
export default FarmerRegistration