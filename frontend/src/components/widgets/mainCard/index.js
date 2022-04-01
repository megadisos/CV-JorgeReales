import {Col, Container,Row} from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import fotoPerfil from './../../../images/jorge.jpeg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faPhone, faAddressCard } from '@fortawesome/free-solid-svg-icons';

function MainCard(props) {

  const bubbleSt ={
    backgroundColor:"#051367",
    width: "15%",
    borderRadius: "12px 12px 12px 0",
    color:"white",
    marginRight: "8em"
  }
  const brandsStyle = {
    display: "grid",
    gridTemplateColumns: "33% 33% 33%",
    width: "200px"
  }
  return (
  <Container  className="container  mt-5 "  >
    <Row align="center" >
      <Col className="mt-5">
        <div style={bubbleSt}>
          <label >Hi, I am</label>
        </div>
        <div >
          <h1 >{props.users.map(user => user.name)} </h1>
          <h4 style={{marginLeft:"2em"}}><FontAwesomeIcon icon={faAddressCard} /> {props.users.map(user =>  user.role)}</h4>
        </div>
        <p style={{marginRight:"3em"}}><FontAwesomeIcon icon={faMailBulk} /> {props.users.map(user => user.email)}</p>
        <p style={{marginRight:"7em"}}><FontAwesomeIcon icon={faPhone} />  {props.users.map(user => user.phone)}</p>
        <div style={brandsStyle} className="brands">
        <a  target="_blank" href="https://www.facebook.com/jorge.reales.35"><FontAwesomeIcon icon={faFacebook} size="2x"  /></a>
        <a  target="_blank" href="https://github.com/megadisos"><FontAwesomeIcon icon={faGithub} size="2x"  /></a>
        <a  target="_blank" href="https://www.linkedin.com/in/jorge-r-325718115"><FontAwesomeIcon icon={faLinkedin} size="2x"  /></a>
        </div>
      </Col>
      <Col align="center" className="mt-5">
        <Avatar  
            style={{border:"3px solid #051367"}}
            alt="Jorge Reales"
            src={fotoPerfil}
            sx={{ width: 200, height: 200 }}
        />
      </Col>
    </Row>
  </Container>
  );
}

export default MainCard;