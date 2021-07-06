import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import { Jumbotron, Button } from 'react-bootstrap';
import ComplaintService from '../Services/ComplaintService'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class FarmerComplaint extends Component {
    constructor(props) {
        super(props)

        this.state = {
            farmerEmail: this.props.match.params.email,
            complaints: []
        }
    }

    componentDidMount() {
        ComplaintService.getAllComplaints()
            .then(response => {
                console.log(response)
                this.setState({ complaints: response.data });
            }

            );
    }

    handleDelete(cid) {
        if (window.confirm("Are you sure?")) 
        {
            ComplaintService.deleteComplaint(cid)
            .then(response =>
                {
                    this.props.history.push(`/farmer-home/${this.state.farmerEmail}`);
                    console.log(response);
                }
                );
            
            toast.error("Complain Deleted Successfully !!!",
            {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000
            });
        }
    }
    render() {
        return (
            <div style={{ backgroundImage: 'linear-gradient(to right, black, lightgreen)', }}>
                <div style={{
                    backgroundColor: 'rgba(15,15,15,0.4)', filter: 'blur(10)',
                    display: "flex",
                    justifyContent: "center",
                    padding: "40px 40px"
                }}>
                    <Jumbotron style={{ width: 1000, marginTop: "73px", marginBottom: "73px", backgroundColor: 'rgba(15,15,15,0.4)', filter: 'blur(10)', color: 'white' }}>
                        <h1 style={{ fontFamily: "Forte" }}>All Complaints</h1>
                        <br />
                        <Table striped bordered hover variant="dark"  >
                            <thead>
                                <tr>
                                    <th>Complaint Id</th>
                                    <th>Dealer Name</th>
                                    <th>Complaint Details</th>
                                    <th>Date & Time</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.complaints.filter(c => (c.farmer.farmerEmailId === this.state.farmerEmail))
                                    .map((complain) =>
                                    (
                                        <tr key={complain.cid}>
                                            <td>{complain.cid}</td>
                                            <td>{complain.dealer.dealerName}</td>
                                            <td>{complain.cmessage}</td>
                                            <td>{complain.c_time}</td>
                                            <td>
                                                <Button variant="danger"
                                                    type="delete" id="btndelete"
                                                    style={{ paddingLeft: "26px", paddingRight: "26px" }}
                                                    onClick={() => this.handleDelete(complain.cid)}>
                                                    <FontAwesomeIcon icon={faTrash} />  Delete</Button>

                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </Table>
                        <br />
                        <Link to={`/farmer-home/${this.state.farmerEmail}`}>
                            <Button variant="info"
                                type="back" id="btnback"
                                style={{ marginRight: "20px", paddingLeft: "24px", paddingRight: "24px" }}>
                                <FontAwesomeIcon icon={faArrowLeft} />  Back</Button>
                        </Link>
                    </Jumbotron>
                </div>
            </div>
        )
    }
}

export default FarmerComplaint