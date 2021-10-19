import React from 'react';
import "./Header.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
       <Navbar bg="light fs-5 text-white p-3 fw-md "  >
          <Container>
                <Nav className="me-auto">
              
                 <NavLink 
                 className="text"
                to="/home"
                activeStyle={{
                    fontWeight: "bold",
                    color: "DarkBlue"
                }}
                >
               <i class="fas fa-house-user text-primary"></i> Home 
                </NavLink>

                 <NavLink
                  className="text"
                to="/Service"
                activeStyle={{
                    fontWeight: "bold",
                    color: "DarkBlue"
                }}
                >
                 <i class="fas fa-globe-asia  text-primary"></i> Servise
                </NavLink>

                 <NavLink
                to="/success"
                 className="text"
                activeStyle={{
                    fontWeight: "bold",
                    color: "DarkBlue"
                }}
                >
               <i class="fab fa-angellist  text-primary"></i> Success
                </NavLink>

                 <NavLink
                  className="text"
                to="/contract"
                activeStyle={{
                    fontWeight: "bold",
                    color: "DarkBlue"
                }}
                >
               <i class="fas fa-address-card  text-primary"></i> Contrac-Us
                </NavLink>

                 <NavLink
                to="/about" className="text"
                activeStyle={{
                    fontWeight: "bold",
                    color: "DarkBlue"
                }}
                >
             <i class="fas fa-users  text-primary"></i>  About Us
                </NavLink>
            </Nav>

            <Nav>
                
     
                 <NavLink
                to="/sing" className="text"
                activeStyle={{
                    fontWeight: "bold",
                    color: "DarkBlue"
                }}
                >
              <i class="text-primary fas fa-sign-out-alt"></i>Sign Up
                </NavLink>
     
 
            </Nav>
  </Container>
  
</Navbar>

        </div>
    );
};

export default Header;