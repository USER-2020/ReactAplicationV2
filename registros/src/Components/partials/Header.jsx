        import React from "react";
        import 'bootstrap/dist/css/bootstrap.min.css';
        import Navbar from 'react-bootstrap/Navbar';
        import Nav from 'react-bootstrap/Nav';
        import Container from 'react-bootstrap/Container';
        import image from '../../../src/assets/nob3.png';
        import Button from 'react-bootstrap/Button';
        import Form from 'react-bootstrap/Form';
        import NavDropdown from 'react-bootstrap/NavDropdown';
        import Offcanvas from 'react-bootstrap/Offcanvas';

        function Header(){
            return(
                <>
                
        {[ 'sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand className="m-auto" href="#home"><img src={image} width="100" height="auto" center/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#">Store</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
                    <NavDropdown.Item href="/registro">sign Up</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Login</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-danger">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
                </>
                

                // <div className="container">
                    
                //     <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom navbar-custom">
                //     <ul class="nav nav-pills">
                //         <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
                //         <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
                //         <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
                //         <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
                //         <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                //     </ul>                                        
                    
                
                //     </header>
                // </div>
                
            );
        }

        export default Header;