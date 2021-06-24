import { Jumbotron, Card, Container, Row, Col } from 'react-bootstrap';
import img5 from '../images/farm.jpg';
import './app1.css';


const AboutUsComponent = () => {
    return (
        <div style={{ backgroundImage: `url(${img5})`, backgroundSize: "cover" }}>
            <div style={{ backgroundColor: 'rgba(15,15,15,0.5)', filter: 'blur(5)', padding: "5px 5px" }}>
                <br></br>
                <Jumbotron style={{ textAlign: "center", color: 'yellow', backgroundColor: 'rgba(30, 180, 255, 0.5)', filter: 'blur(10)', marginLeft: 10, marginRight: 10 }}>
                    <h1><b><i><marquee behavior="scroll" direction="left" scrollamount="15">Farmer Assistance System </marquee></i></b></h1>
                    <p>
                        <i><div style = {{textAlign:"center", color: 'white', fontSize: "25px", fontFamily: "Apple Chancery"}}>
                           Farming Assistance Application is a very useful software for farmers and dealers as they can directly sell and communicate with other dealers. 
                           It also provides an option to view Advertisements posted by the dealer(s). Farmer will get an option to complaint against
                           dealer incase of any greviance.
                           </div>
                    </i>
                    </p>

                </Jumbotron>
                <br></br>
                <h1 style={{ backgroundColor: 'rgba(15,15,15,0.5)', color: "white" }}><b><i>Team 5- Farmer Assistance System</i></b></h1>
                <br></br>
                {/* MEMBERS */}
                <Container>
                    <Row md={3}>
                        {/* MEMBER IS FROM COL TO COL TAG.... */}
                        
                        <Col sm>
                        
                            <Card style={{ width: '18rem', margin: 'auto', padding: "30px 30px", backgroundColor: 'rgba(15,15,15,1)', filter: 'blur(10)', color: 'white' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                               
                                   <Card.Title>
                                        
                                        <i>Pratibha Singh</i>
                                       
                                      </Card.Title>
                                        
                                        
                                    <Card.Text>
                                        
                                        <i>Software Associate-
                                            Java Full Stack Developer</i>
                                        
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                           
                        </Col>
                        

                        <Col sm>
                            <Card style={{ width: '18rem', margin: 'auto', padding: "30px 30px", backgroundColor: 'rgba(15,15,15,1)', filter: 'blur(10)', color: 'white' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title><i>Vamsi Krishna</i></Card.Title>
                                    <Card.Text>
                                        <i>Software Associate-
                                            Java Full Stack Developer</i>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card style={{ width: '18rem', margin: 'auto', padding: "30px 30px", backgroundColor: 'rgba(15,15,15,1)', filter: 'blur(10)', color: 'white' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title><i>Nisha</i></Card.Title>
                                    <Card.Text>
                                        <i>Software Associate-
                                            Java Full Stack Developer</i>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                    <br></br>
                    <Row md={3}>

                        <Col sm>
                            <Card style={{ width: '18rem', margin: 'auto', padding: "30px 30px", backgroundColor: 'rgba(15,15,15,1)', filter: 'blur(10)', color: 'white' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title><i>Manoj</i></Card.Title>
                                    <Card.Text>
                                        <i>Software Associate-
                                            Java Full Stack Developer</i>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card style={{ width: '18rem', margin: 'auto', padding: "28px 28px", backgroundColor: 'rgba(15,15,15,1)', filter: 'blur(10)', color: 'white' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title><i>Ashwini</i></Card.Title>
                                    <Card.Text>
                                        <i>
                                        Software Associate-
                                        Java Full Stack Developer</i>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card style={{ width: '18rem', margin: 'auto', padding: "30px 30px", backgroundColor: 'rgba(15,15,15,1)', filter: 'blur(10)', color: 'white' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title><i>Pranesh</i></Card.Title>
                                    <Card.Text>
                                        <i>Software Associate-
                                            Java Full Stack Developer</i>
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



