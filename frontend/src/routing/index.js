import Home from './../components/pages/home';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

function Routing(){
    return (
    <Router>
        <Routes> 
            <Route path="/*" element={<Home />} /> 
        </Routes>
    </Router>
    )
  }

  export default Routing;