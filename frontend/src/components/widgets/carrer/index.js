import {Col, Container,Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import carrer from './../../../images/carrer.jpg'; 
import {getCarrerHistory} from './../../../actions/userAction';
import {useEffect} from 'react';
import {useSelector ,useDispatch} from 'react-redux';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Carrer(props) {
    const  userList = useSelector(state => state.usersList);
    const dispatch = useDispatch();
    const users = userList.carrer;
    const carrerSize = users.length;
    let carrerId = 1;
    const divSt ={
        overflowY:"scroll",
        height:"250px",
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
        dispatch(getCarrerHistory()); 
      }, [dispatch]);
  return (
    <Container  className="container" style={{marginTop:"150px"}} >
        <hr></hr>
    <Row align="center" >
    <Col className="mt-5">
    <Image src={carrer} width="400" ></Image>
    </Col>
    <Col align="center" className="mt-5">
        <h2 className="mb-2"><FontAwesomeIcon icon={faBuilding} />  Carrer History</h2>
        <div style={divSt}>{users.map(user=>(
            <Row className='mt-5'>
                <Col><p>{user.role}</p>
                <p>{user.company}</p>
                <p>{user.years}</p></Col>
                <Col><p>{user.description.split("*").map(str=> <p>{str}</p>)}</p></Col>
                <hr ></hr>
            </Row>
            )
            )}</div>
    </Col>
    </Row>
    </Container>
  );
}

export default Carrer;