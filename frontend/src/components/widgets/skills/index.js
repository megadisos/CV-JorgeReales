import {Col, Container,Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import skill from './../../../images/skills.jpg'; 
import {getSkills} from './../../../actions/userAction';
import {useEffect} from 'react';
import {useSelector ,useDispatch} from 'react-redux';
import { faPersonSnowboarding } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skills(props) {
    const  userList = useSelector(state => state.usersList);
    const dispatch = useDispatch();
    const users = userList.skills;
    const divSt ={
        overflowY:"scroll",
        height:"200px",
        overflowX:"hidden",
        
    }
    const bubbleSt ={
        backgroundColor:"#051367",
        width: "15%",
        borderRadius: "12px 12px 12px 0",
        color:"white",
        marginRight: "8em"
    }
    useEffect(() => {
        dispatch(getSkills()); 
      }, [dispatch]);
  return (
    <Container  className="container" style={{marginTop:"150px"}} >
        <hr></hr>
    <Row align="center" >
    <Col className="mt-5">
    <Image src={skill} width="400" ></Image>
    </Col>
    <Col align="center" className="mt-5">
        <h2 className="mb-3"><FontAwesomeIcon icon={faPersonSnowboarding} />  Skills</h2>
        <p style={divSt}>{users.map(user=>user.description.split("*").map(str=> <p>{str}</p>))}</p>
    </Col>
    </Row>
    </Container>
  );
}

export default Skills;