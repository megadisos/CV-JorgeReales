import {Col, Container,Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import academic from './../../../images/academic.jpeg'; 
import {getAcademicHistory} from './../../../actions/userAction';
import {useEffect} from 'react';
import {useSelector ,useDispatch} from 'react-redux';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Academic(props) {
    const  userList = useSelector(state => state.usersList);
    const dispatch = useDispatch();
    const users = userList.academic;
    const bubbleSt ={
        backgroundColor:"#051367",
        width: "15%",
        borderRadius: "12px 12px 12px 0",
        color:"white",
        marginRight: "8em"
    }
    const divSt ={
        overflowY:"scroll",
        height:"250px",
        overflowX:"hidden",
        
    }
    useEffect(() => {
        dispatch(getAcademicHistory()); 
      }, [dispatch]);
  return (
    <Container  className="container" style={{marginTop:"150px"}} >
        <hr></hr>
    <Row align="center" >
    <Col className="mt-5">
    <Image src={academic} width="400" ></Image>
    </Col>
    <Col align="center" className="mt-5">
        <h2 className="mb-4"><FontAwesomeIcon icon={faGraduationCap} />  Academic History</h2>
        <div style={divSt}>{users.map(user=>(
            <Row>
                <Col>
            <p>{user.institution}</p>
            <p>{user.degree}</p>
            <p>{user.years}</p>
            </Col>
            <hr />
            </Row>
            
            ))}</div>
    </Col>
    </Row>
    </Container>
  );
}

export default Academic;