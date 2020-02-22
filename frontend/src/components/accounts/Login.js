import React, { Component } from 'react';
import {Link,Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {login} from '../../actions/auth';
import '../css/login.min.css';
class Login extends Component {
    state={
        username: '',
        password: '',
    }
    static propTypes={
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    }
    onSubmit=e=>{
        e.preventDefault();
        this.props.login(this.state.username,this.state.password);
    }
    onChange=e =>this.setState({
        [e.target.name]: e.target.value
    });
    render() {
        if(this.props.isAuthenticated){
            return <Redirect to ="/"/>
        }
        const {username,password}=this.state
        return (
            <div className="login-panel">

            <div className="login-panel__login">
                <div className="login-panel__login__show">
                <h2>Logowanie</h2>
                <form onSubmit={this.onSubmit}>
                    
                    <input 
                        type="text"
                        name="username"
                        placeholder="Podaj nazwę użytkownika"
                        onChange={this.onChange}
                        value={username}
                    />  
                    <input 
                        type="password"
                        name="password"
                        placeholder="Podaj hasło"
                        onChange={this.onChange}
                        value={password}
                    />
                    <button type="submit">Zaloguj się</button>
                    
                </form>
                </div>
            </div>
            <div className="login-panel__register">        
                    <h2>Jesli nie posiadasz konta</h2>  
                    
                    <Link to="/register"><input type="submit" value="Zarejestruj się" ></input></Link>
            </div>
            </div>
        )
    }
}
const mapStatetoProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStatetoProps,{login})(Login);