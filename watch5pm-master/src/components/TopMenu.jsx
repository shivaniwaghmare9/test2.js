import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const TopMenu=()=>{
    return(
        <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="menwatches">Men Watches</Nav.Link>
            <Nav.Link as={Link} to="womenwatches">Women Watches</Nav.Link>
            <Nav.Link as={Link} to="kidswatches">Kids Watches</Nav.Link>
            <Nav.Link as={Link} to="mycart">Cart</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
         
        </>
    )
}

export default TopMenu;