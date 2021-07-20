import './App.css';
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
// import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './Home';
import Search from './search';
import AddCake from './AddCake';
import CakeDetails from './CakeDetails';

function App() {

  // let [searchText, setSearchText] = useState();
  // let handleSearch = function (searchString) {
  //   setSearchText(searchString);
  // }

  return (
    <div>
      <Router>
        <Navbar>Cakes Gallery</Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
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
