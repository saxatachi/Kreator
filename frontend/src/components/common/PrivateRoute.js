import React from 'react';
import {Route,Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
const PrivateRoute=({component: Component,auth,leads, ...rest })=>(
    <Route 
    {...rest}
    render={props=>{
        if(auth.isLoading){
            return <h2>Loading...</h2>
        }else if(!auth.isAuthenticated){
            return <Redirect to="/login"/>
        }else{
            return <Component {...props}/>;
        }
        
    
    }}
    />
);
const mapStatetoProps= state=> ({
    auth: state.auth,
    leads: state.leads.leads,
});
export default  connect(mapStatetoProps)(PrivateRoute);