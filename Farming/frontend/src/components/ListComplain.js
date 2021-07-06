import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import { Jumbotron, Button } from 'react-bootstrap';
import ComplaintService from '../Services/ComplaintService'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class ListComplain extends Component {
    constructor(props) {
        super(props)

        this.state = {
            complaints: []
        }
    }

    componentDidMount() {
        ComplaintService.getAllComplaints()
            .then(response =>
                this.setState({ complaints: response.data })
            );
    }

    handleDelete(cid) {
        if (window.confirm("Are you sure?")) {
            ComplaintService.deleteComplaint(cid)
                .then(response => { this.props.history.push('/viewComplain') });

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
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Complaint Id</th>
                                    <th>Farmer Name</th>
                                    <th>Dealer Name</th>
                                    <th>Complaint Details</th>
                                    <th>Date & Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.complaints.map((complain) =>
                                (
                                    <tr key={complain.cid}>
                                        <td>{complain.cid}</td>
                                        <td>{complain.farmer.farmerName}</td>
                                        <td>{complain.dealer.dealerName}</td>
                                        <td>{complain.cmessage}</td>
                                        <td>{complain.c_time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <br />
                        <Link to="/admin-home">
                            <Button variant="info"
                                type="back" id="btnback"
                                style={{ paddingLeft: "26px", paddingRight: "26px" }}>
                                <FontAwesomeIcon icon={faArrowLeft} />  Back</Button>
                        </Link>
                    </Jumbotron>
                </div>
            </div>
        )
    }
}

export default ListComplain
