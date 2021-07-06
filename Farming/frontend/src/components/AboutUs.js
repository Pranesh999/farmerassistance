import { Jumbotron, Card, Container, Row, Col } from 'react-bootstrap';
//import img5 from '../images/image35.jpg';

const AboutUsComponent = () => {
    return (
        <div style={{ backgroundImage: `url(${img5})`, backgroundSize: "cover" }}>
            <div style={{ backgroundColor: 'rgba(15,15,15,0.5)', filter: 'blur(10)', padding: "40px 40px" }}>
                <br></br>
                <Jumbotron style={{ textAlign: "left", color: 'white', backgroundColor: 'rgba(15,15,15,0.5)', filter: 'blur(10)', marginLeft: 10, marginRight: 10 }}>
                    <h1><b><i>Farmer Assistance System</i></b></h1>
                    <p>
                        <i>
                           This is a Farmer Assistance Application. Farmer can easily contact with the Dealer(s) through this application for the buying crops.
                            FAS provides services that connect to RESTful APIs which handle with data from a postgre database with mock data.
                            There are services for Admin, Dealer and Farmer who need to login to access the same. Posting Advertisement, viewing complaints, etc are included in this application.
                    </i>
                    </p>

                </Jumbotron>
                <br></br>
                <h1 style={{ backgroundColor: 'rgba(15,15,15,0.5)', color: "white" }}><b><i>Team Farmer Assistance Application </i></b></h1>
                <br></br>
                {/* MEMBERS */}
                <Container>
                    <Row md={3}>
                        {/* MEMBER IS FROM COL TO COL TAG.... */}
                        <Col sm>
                            <Card style={{ width: '18rem', margin: 'auto', padding: "30px 30px", backgroundColor: 'rgba(15,15,15,0.5)', filter: 'blur(10)', color: 'white' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title><i>Pranesh</i></Card.Title>
                                    <Card.Text>
                                        <i>Java Full Stack Developer</i>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card style={{ width: '18rem', margin: 'auto', padding: "30px 30px", backgroundColor: 'rgba(15,15,15,0.5)', filter: 'blur(10)', color: 'white' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title><i>Pratibha Singh</i></Card.Title>
                                    <Card.Text>
                                        <i>Java Full Stack Developer</i>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card style={{ width: '18rem', margin: 'auto', padding: "30px 30px", backgroundColor: 'rgba(15,15,15,0.5)', filter: 'blur(10)', color: 'white' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title><i>Manoj </i></Card.Title>
                                    <Card.Text>
                                        <i>Java Full Stack Developer</i>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                    <br></br>
                    <Row md={3}>

                        <Col sm>
                            <Card style={{ width: '18rem', margin: 'auto', padding: "30px 30px", backgroundColor: 'rgba(15,15,15,0.5)', filter: 'blur(10)', color: 'white' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title><i>Nisha</i></Card.Title>
                                    <Card.Text>
                                        <i>Java Full Stack Developer</i>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card style={{ width: '18rem', margin: 'auto', padding: "30px 30px", backgroundColor: 'rgba(15,15,15,0.5)', filter: 'blur(10)', color: 'white' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title><i>Vamsi Krishna</i></Card.Title>
                                    <Card.Text>
                                        <i>Java Full Stack Developer</i>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card style={{ width: '18rem', margin: 'auto', padding: "30px 30px", backgroundColor: 'rgba(15,15,15,0.5)', filter: 'blur(10)', color: 'white' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title><i>Ashwini</i></Card.Title>
                                    <Card.Text>
                                        <i>Java Full Stack Developer</i>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                </Container>
                <br></br>

            </div>
        </div>

    );
}

export default AboutUsComponent;



