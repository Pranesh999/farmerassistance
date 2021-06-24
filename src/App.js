import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Route, Link, Switch } from 'react-router-dom';
import HomeComponent from './components/Home';
import AdminLoginComponent from './components/AdminLogin';
//import FarmerLogin from './components/FarmerLogin';
//import DealerLoginComponent from './components/DealerLogin';
import AboutUsComponent from './components/AboutUs';
//import DealerRegistration from './components/DealerRegistration';
//import FarmerRegistration from './components/FarmerRegistration';
import AdminRegistration from './components/AdminRegistration';
//import PostAdvertisement from './components/postAdvertisement';
//import DealersAccountComponent from './components/dealersAccount';
//import ViewAdvertisement from './components/viewAdvertisement';
//import ComplaintForm from './components/ComplaintForm';
//import ListComplain from './components/ListComplain';
//import DealerComplaint from './components/DealerComplaint';
//import FarmerComplaint from './components/FarmerComplaint';
import AdminHome from './components/AdminHome';
//import FarmerHome from './components/FarmerHome';
//import ViewAdvertisementById from './components/viewAdvertisementById';
//import ListDealerComponent from './components/ListDealerComponent';
//import ListFarmerComponent from './components/ListFarmerComponent';
//import ChatApplication from './components/ChatApplication';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
function App() {
  return (
    <div className="App">

      {/* NAVIGATION BAR COMPONENT FROM BOOTSTRAP */}
      <Navbar bg="dark" variant="dark" expand="lg" style={{ height: 70 }}>
        <Navbar.Brand href="/" style={{ fontFamily: "Forte" }}>
          {' '}
        Farmer Assistance System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <Link to='/' style={{ textDecoration: 'none' }}>
              <Nav.Link href="/">Home</Nav.Link>
            </Link>
            <Link to='/about' style={{ textDecoration: 'none' }}>
              <Nav.Link href="/">About Us</Nav.Link>
            </Link>
            {/* <Link to='/'  style={{ textDecoration: 'none' }}>
              <Nav.Link href="/">Logout</Nav.Link>
            </Link> */}

          </Nav>

        </Navbar.Collapse>
      </Navbar>
      {/* Some Common Components if required at all */}

      {/* Switching the content from nav operations */}
      <Switch>

        <Route path='/' component={HomeComponent} exact />
        <Route path='/adminLogin' component={AdminLoginComponent} exact />     
        <Route path='/about' component={AboutUsComponent} exact />
        <Route path='/adminRegistration' component={AdminRegistration} exact />
        <Route path='/admin-home' component={AdminHome} exact />
        

        
      </Switch>

      <div class="d-flex flex-column">
        <footer class="footer">
          <div style={{ backgroundColor: '#343A40' }}>
            <span><b style={{ color: "white", fontFamily: "Calibri" }}><i>&copy; A Farmer Assitance Team project.</i></b></span>
          </div>
        </footer>
      </div>
    </div>

  );
}

export default App;
