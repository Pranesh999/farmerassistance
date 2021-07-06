import React, { Component } from 'react'
import Dealerservice from '../Services/Dealerservice';
import { Link } from "react-router-dom";
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, ToastContainer } from 'react-toastify';
import { faPhone, faEnvelope, faLock, faUserPlus, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Jumbotron } from 'react-bootstrap';
import img5 from '../images/image33.jpg';



class DealerLoginComponent extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false
    this.state = {
      email: '',
      password: '',
      emailError: "",
      passError: "",
      loggedIn,
    };

    this.changeDealerEmailHandler = this.changeDealerEmailHandler.bind(this);
    this.changeDealerPasswordHandler = this.changeDealerPasswordHandler.bind(this);
    this.dealerLogin = this.dealerLogin.bind(this);
  }

  componentDidMount() {
    // step 4
    if (this.state.email === '_add') {
      return
    }
  }

  validate = () => {

    let emailError = "";
    let passError = "";

    if (!this.state.password) {
      passError = "Password cannot be blank";
    }
    if (!this.state.email) {
      emailError = "Email cannot be blank";
    }

    if (emailError || passError) {
      this.setState({ emailError, passError });
      return false;
    }
    return true;
  }

  dealerLogin = (e) => {
    const isValid = this.validate();
    e.preventDefault();
    let dealer = {
      email: this.state.email,
      password: this.state.password
    };
    if (isValid) {
      console.log(JSON.stringify(dealer));
      Dealerservice.dealerLogin(dealer).then(res => {
        localStorage.setItem("token1", "abc")

        this.setState({ loggedIn: true });
        console.log("success")
        alert("Login Successful")
        this.props.history.push(`/dealerAccount/${this.state.email}`)
      }, error => {
        alert("Invalid Email or Password");
      })
    }
  }

  changeDealerEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  }


  changeDealerPasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  }

  render() {

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
          <Jumbotron style={{ width: 600, height: 500, textAlign: "center", backgroundColor: 'rgba(15,15,15,0.4)', filter: 'blur(10)', color: 'white' }}>
            <h1 style={{ fontFamily: "Forte" }}>  <FontAwesomeIcon icon={faUsers} /> Dealer Login</h1>
            <br />
            <Form
              onSubmit={this.handleSubmit} style={{ textAlign: "left" }}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter EmailId</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control required autoComplete="off" type="text" id="Email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter Email"
                    onChange={this.changeDealerEmailHandler} />
                </InputGroup>
                <div style={{ color: "#ffff33" }}>{this.state.emailError}</div>

              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Enter Password</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control autoComplete="off" type="password" id="Password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter Password"
                    onChange={this.changeDealerPasswordHandler} />
                </InputGroup>
                <div style={{ color: "#ffff33" }}>{this.state.passError}</div>
              </Form.Group>
              <br />

              <Form.Group controlId="formBasicButton">
                <Button variant="success" type="submit" style={{ padding: "7px 80px", marginLeft: "140px" }} onClick={this.dealerLogin} ><FontAwesomeIcon icon={faUserPlus} />   LOG IN </Button>

              </Form.Group>
              <Form.Group controlId="formBasicLink">
                <small><Link to="/dealerRegistration" style={{ textDecoration: "none" }}><h5 style={{ fontFamily: "Calibri", paddingLeft: "180px" }}>New User? - SignUp</h5></Link></small>
              </Form.Group>

            </Form>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
export default DealerLoginComponent;