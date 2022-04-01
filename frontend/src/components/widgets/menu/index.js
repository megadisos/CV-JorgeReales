import {Container,Navbar,Nav} from 'react-bootstrap';
import {
  Link,
} from "react-router-dom";
function Menu(props) {
  const navStyle ={
    textDecoration: "none",
    color: "white",
  }
 
  return (
    <Container  >
    <Navbar  bg="black" variant="dark">
    <Container >
    <Nav className="me-auto justify-content-center menu"  style={props.menuSt}>
      <Nav.Link  className="me-4" ><Link to="/">Home</Link></Nav.Link>
      <Nav.Link  className="me-4"><Link to="skills">Skills</Link></Nav.Link>
      <Nav.Link  className="me-4"><Link to="Carrer">Carrer history</Link></Nav.Link>
      <Nav.Link  className="me-4"><Link to="Academic">Academic history</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </Container>
  );
}

export default Menu;