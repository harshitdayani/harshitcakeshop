import './App.css';
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
// import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './Home';
import Search from './search';
import AddCake from './AddCake';
import CakeDetails from "./CakeDetails/CakeDetails";
import { useState } from 'react';

function App() {

  // let [searchText, setSearchText] = useState();
  // let handleSearch = function (searchString) {
  //   setSearchText(searchString);
  // }
  var [isUserLoggedIn, setUserLoggedIn] = useState(localStorage.token ? true : false);

  function loggedIn() {
      setUserLoggedIn(true);
  }

  return (
    <div>
      <Router>
        <Navbar isUserLoggedIn={isUserLoggedIn} />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/login" exact component={Login} loggedin={loggedIn} /> */}
          <Route exact path="/login"> <Login loggedin={loggedIn} /></Route>
          <Route path="/signup" exact component={Signup} />
          <Route path="/search" exact component={Search} />
          <Route path="/addcake" exact component={AddCake} />
          <Route path="/cake/:cakeid" exact component={CakeDetails} />
          <Route path="**"><Redirect to="/"></Redirect> </Route>
        </Switch>
      </Router>

      {/* <Navbar  />
      <Carousel />
      <div className="p-3 mx-5 my-3 border bg-light"></div>
      <Login />
      <Signup />
      <CakeList  /> */}
    </div>
  );
}

export default App;
