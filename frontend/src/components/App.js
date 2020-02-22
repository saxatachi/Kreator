import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route,Switch,Redirect} from "react-router-dom";
import ChooseStyle from './ChooseStyle';
import { Provider } from 'react-redux';
import store from './store';
import {Provider as AlertProvider }from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getLeads} from '../actions/leads';
import Form from './Form';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Home from './Home';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';
import {loadUser} from '../actions/auth';
import Nav from "./Nav";

const alertOptions = {
    timeout: 3000,
    position: 'top center'
}
class App extends Component{
    constructor(props){
        super(props);
      }
    componentDidMount(){
        // store.dispatch(loadUser());
        store.dispatch(getLeads());
    }
     render(){
        return (
            <Provider store={store} >
            
            <Router>
            <>
                
                    <div className="background">
                    <Nav />
                    <Switch>
                        <PrivateRoute exact path="/" component={ChooseStyle}/>
                        <Route exact path="/register/" component={Register}/>
                        <Route exact path="/login/" component={Login}/>
                        <Route exact path="/home/" component={Home}/>
                    </Switch>
                </div>
                
            </>
            </Router>
            {/* </AlertProvider> */}
            </Provider>
        );

    }
}
ReactDOM.render(<App />,document.getElementById('root_calendar'))



