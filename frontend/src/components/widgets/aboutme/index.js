import {Col, Container,Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import about from './../../../images/about.jpg'; 
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About(props) {

  const bubbleSt ={
    backgroundColor:"#051367",
    width: "15%",
    borderRadius: "12px 12px 12px 0",
    color:"white",
    marginRight: "8em"
  }
  return (
    <Container  className="container" style={{marginTop:"150px"}} >
        <hr></hr>
    <Row align="center" >
    <Col className="mt-5">
    <Image src={about} width="400" ></Image>
    </Col>
    <Col align="center" className="mt-5">
        <h2><FontAwesomeIcon icon={faUser}  /> About Me</h2>
        <p>{props.users.map(user=>user.about)}</p>
    </Col>
    </Row>
    </Container>
  );
}

export default About;