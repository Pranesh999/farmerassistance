import { Button, Card, Row, CardColumns } from 'react-bootstrap';
import img5 from '../images/image35.jpg';

const HomeComponent = () => {
  return (
    <div style={{
      backgroundImage: `url(${img5})`, backgroundSize: "cover"
    }}>
      <div style={{ backgroundColor: 'rgba(15,15,15,0.5)', filter: 'blur(10)', padding: "40px 40px" }}>


        <Row style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: "white" }}>
          <h1><b><i>Welcome to Farmer Assistance System</i></b></h1>
          <p>
            <h6><i>We have various services to offer. See the cards to get the brief description about each of the services!</i></h6>
          </p>
          <p>
            <h5><b><i>Please Login to use the services!!</i></b></h5>
          </p>
          <br />
        </Row>

        <Row style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

          <CardColumns>
            <Card
              bg="transparent" text="light" className="mb-3" style={{ width: "20rem" }}>
              <a href="/adminLogin">
                <Card.Body style={{ backgroundImage: 'linear-gradient(to right, #00b09b, #96c93d)' }}>
                  <Button variant="link" style={{ padding: "50px 80px", textDecoration: "none", fontFamily: "Forte", fontSize: "20px", color: "black" }} >Admin Login</Button>
                </Card.Body>
              </a>
              <Card.Body style={{ paddingBottom: "45px" }}>
                <Card.Title style={{ color: "white" }} href='/admin'><b><i>Admin Services</i></b></Card.Title>
                <Card.Text style={{ color: "white" }}><b><i> In Admin Service, admin can maintian the records of farmer and dealer, can view the complaints about dealer(s) and mark it as read!</i></b></Card.Text>
              </Card.Body>
            </Card>

            <Card
              bg="transparent" text="light" className="mb-3" style={{ width: "20rem" }}>
              <a href="/farmerLogin">
                <Card.Body style={{ backgroundImage: 'linear-gradient(to right, #fc5c7d, #6a82fb)' }}>
                  <Button variant="link" style={{ padding: "50px 80px", textDecoration: "none", fontFamily: "Forte", fontSize: "20px", color: "black" }} >Farmer Login</Button>
                </Card.Body>
              </a>
              <Card.Body>
                <Card.Title style={{ color: "white" }} href='/admin'><b><i>Farmer Services</i></b></Card.Title>
                <Card.Text style={{ color: "white" }}><b><i> In Farmer Service, farmer can chat with dealer(s), can complaint about dealer(s), can view & delete complaint(s),can also view advertisement posted by the dealer(s)!</i></b></Card.Text>
              </Card.Body>
            </Card>

            <Card
              bg="transparent" text="light" className="mb-3" style={{ width: "20rem" }}>
              <a href="/dealerLogin">
                <Card.Body style={{ backgroundImage: 'linear-gradient(to right, #00b4db, #0083b0)' }}>
                  <Button variant="link" style={{ padding: "50px 80px", textDecoration: "none", fontFamily: "Forte", fontSize: "20px", color: "black" }} >Dealer Login</Button>
                </Card.Body>
              </a>
              <Card.Body>
                <Card.Title style={{ color: "white" }} href='/admin'><b><i>Dealer Services</i></b></Card.Title>
                <Card.Text style={{ color: "white" }}><b><i>In Dealer Service, dealer can chat with farmer(s), can post advertisement(s), can view & delete advertisement(s) and can also view complaint(s)!</i></b></Card.Text>
              </Card.Body>
            </Card>


          </CardColumns>


        </Row>

      </div>
    </div>
  );
}
export default HomeComponent;


