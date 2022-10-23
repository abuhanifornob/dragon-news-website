import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/ProviderContext/ProviderContext';
import LeftSideNav from '../LeftSideNav/LeftSideNav';


const Header = () => {
  const navigate=useNavigate();
const {user,logOut}=useContext(AuthContext);
console.log(user);
const handleLogOut=()=>{
  logOut()
  .then(()=>{
    navigate('/');
  })
  .catch()
}

    return (
        <div className='mb-5' sticky="top">
             <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand ><Link to="/">Dragon News Portal</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {user?.uid?<span>{ user.displayName}<Button  onClick={handleLogOut} variant="outline-light">Sign Out</Button></span>:
              <><Link to="/logIn"><Button variant="outline-light me-3">Sign In</Button></Link>
              <Link to="/signUp"><Button variant="outline-light">Sign Up</Button></Link>
              
              </>
              }
             </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {
                user?.photoURL?<Image 
                src={user.photoURL}
                roundedCircle
                 style={{height:"40px"}}
                 ></Image>
                :<FaUser></FaUser>
              }
            </Nav.Link>
          </Nav>
          <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;