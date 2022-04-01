import Menu from '../../widgets/menu';
import MainCard from '../../widgets/mainCard';
import About from '../../widgets/aboutme';
import {useEffect} from 'react';
import {useSelector ,useDispatch} from 'react-redux';
import {getUsers} from './../../../actions/userAction';
import Carrer from './../../widgets/carrer';
import Academic from './../../widgets/academic';
import Skills from './../../widgets/skills';
import {
  Routes,
  Route,
} from "react-router-dom";

function Home() {
  const  userList = useSelector(state => state.usersList);
  const dispatch = useDispatch();
  const users = userList.users;
  const menuSt = {
    flex:1,
    fontWeight: 'bold',
    color:'white'
  }
  useEffect(() => {
    dispatch(getUsers()); 
  }, [dispatch]);

 
  return (
    <div>
  <Menu menuSt={menuSt}/>
  <MainCard  menuSt={menuSt} users={users}/>
    <Routes>
    <Route path='' element={<About  menuSt={menuSt} users={users}/>} />
    </Routes>
    <Routes>
    <Route path='carrer' element={<Carrer  menuSt={menuSt} users={users}/>} />
    </Routes>
    <Routes>
    <Route path='academic' element={<Academic  menuSt={menuSt} users={users}/>} />
    </Routes>
    <Routes>
    <Route path='skills' element={<Skills  menuSt={menuSt} users={users}/>} />
    </Routes>
  </div>
  );
}

export default Home;