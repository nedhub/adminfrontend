import Topbar from './components/topbar/Topbar';
import Sidebar from "./components/sidebar/Sidebar";
import './App.css';
// import { Home } from '@material-ui/icons';
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from './pages/userList/userList';

function App() {
  return (

    <Router>


    
    <div  >

      <Topbar/>
      <div className="container">


        <Sidebar/>

          {/* <div className="others"> other pages  </div> */}
        

        <Switch>

          <Route exact path="/">

          <Home/>
          </Route>
          <Route path="/users">

          <UserList/>
          </Route>






        </Switch>


        </div>

      </div>

      </Router>
      
      
    
  );
}

export default App;
