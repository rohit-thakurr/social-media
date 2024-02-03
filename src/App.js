
import { BrowserRouter as Router,Switch,Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';

import {useEffect} from "react";
import {getUserAuth} from "./actions"
import {connect} from "react-redux";


function App(props) {

    useEffect( () => {props.getUserAuth() ;} ,[]);

  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path="/" element={<Login/>} />        */}

          <Route exact path="/">
            <Login/>
          </Route>

          {/* <Route  path="/home" element={<Home/> } /> */}
          {/* <Route path="/home" element={<Header/>} /> */}

          <Route exact path="/home">
            <Home/>
            <Header/>
          </Route>
        
        </Switch>
      </Router>


    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => (
  { getUserAuth : () => dispatch(getUserAuth)}
)

export default connect( mapStateToProps,mapDispatchToProps)(App);
