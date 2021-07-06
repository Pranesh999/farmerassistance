import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Route, Link, Switch } from 'react-router-dom';
import HomeComponent from './components/Home';
import AdminLoginComponent from './components/AdminLogin';
import FarmerLogin from './components/FarmerLogin';
import DealerLoginComponent from './components/DealerLogin';
import AboutUsComponent from './components/AboutUs';
import DealerRegistration from './components/DealerRegistration';
import FarmerRegistration from './components/FarmerRegistration';
import AdminRegistration from './components/AdminRegistration';
import PostAdvertisement from './components/postAdvertisement';
import DealersAccountComponent from './components/dealersAccount';
import ViewAdvertisement from './components/viewAdvertisement';
import ComplaintForm from './components/ComplaintForm';
import ListComplain from './components/ListComplain';
import DealerComplaint from './components/DealerComplaint';
import FarmerComplaint from './components/FarmerComplaint';
import AdminHome from './components/AdminHome';
import FarmerHome from './components/FarmerHome';
import ViewAdvertisementById from './components/viewAdvertisementById';
import ListDealerComponent from './components/ListDealerComponent';
import ListFarmerComponent from './components/ListFarmerComponent';
import ChatApplication from './components/ChatApplication';
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

        <Route path='/viewFarmer' component={ListFarmerComponent} exact />
        <Route path='/viewDealer' component={ListDealerComponent} exact />
        <Route path='/adminLogin' component={AdminLoginComponent} exact />
        <Route path='/farmerLogin' component={FarmerLogin} exact />
        <Route path='/dealerLogin' component={DealerLoginComponent} exact />
        <Route path='/about' component={AboutUsComponent} exact />
        <Route path='/dealerRegistration' component={DealerRegistration} exact />
        <Route path='/signUp' component={FarmerRegistration} exact />
        <Route path='/adminRegistration' component={AdminRegistration} exact />
        <Route path='/viewComplain' component={ListComplain} exact />
        <Route path='/admin-home' component={AdminHome} exact />
        <Route path='/chat' component={ChatApplication} exact />
        <Route path='/farmerHome' component={FarmerHome} exact />
        <Route path='/dealerHome' component={DealersAccountComponent} exact />

        <Route path={'/viewAdvertisement/:email'} render={(props) =>
          <ViewAdvertisement {...props} key={props.match.params.email} />} />
        <Route path={'/viewAdvertisementById/:email'} render={(props) =>
          <ViewAdvertisementById {...props} key={props.match.params.email} />} />
        <Route path={'/post/:email'} render={(props) =>
          <PostAdvertisement {...props} key={props.match.params.email} />} />
        <Route path={'/addComplain/:email'} render={(props) =>
          <ComplaintForm {...props} key={props.match.params.email} />} />
        <Route path={'/farmer-home/:email'} render={(props) =>
          <FarmerHome {...props} key={props.match.params.email} />} />
        <Route path={'/farmerComplain/:email'} render={(props) =>
          <FarmerComplaint {...props} key={props.match.params.email} />} />
        <Route path={'/dealerComplain/:email'} render={(props) =>
          <DealerComplaint {...props} key={props.match.params.email} />} />
        <Route path={'/dealerAccount/:email'} render={(props) =>
          <DealersAccountComponent {...props} key={props.match.params.email} />} />
      </Switch>

      <div class="d-flex flex-column">
        <footer class="footer">
          <div style={{ backgroundColor: '#343A40' }}>
            <span><b style={{ color: "white", fontFamily: "Calibri" }}><i>&copy; Content owned by the team.</i></b></span>
          </div>
        </footer>
      </div>
    </div>

  );
}

export default App;
