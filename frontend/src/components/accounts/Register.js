import React, { Component } from 'react'
import {Link,Redirect} from "react-router-dom"
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {register} from '../../actions/auth';
import '../css/register.min.css';
export  class Register extends Component {
    state={
        username: '',
        email: '',
        password: '',
        password2: '',
    }
    static PropTypes={
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    }
    visibility= () =>{
        let x=document.getElementsByName("password")
        let m=x[0]
        if (m.type=="password"){
            console.log("HAsło")
            m.type="text"
        }
        console.log("jebac disa")

    }
    visibilityout=()=>{
        let x=document.getElementsByName("password")
        let m=x[0]
        if (m.type=="text"){
            console.log("HAsło")
            m.type="password"
        }
        console.log("jebac disa")

    }
    onSubmit=e=>{
        e.preventDefault();
        const{password,password2}=this.state;
        if(password !==password2){
            console.log("hasła się nie zgadzają")
        }else{
            const newUser = {
                
                username,
                password,
                email,
            }
            this.props.register(newUser)
        }
    }
    onChange=e =>this.setState({
        [e.target.name]: e.target.value
    });
    render() {
        if(this.props.isAuthenticated){
            return <Redirect to="/" />;
        }
        const {username, email,password,password2}=this.state
        return (
            <div className="register_page">
            <div className="register-panel">
                <div className="register-panel__elements">
                <div className="register-panel__elements__label">
                <h2>Rejestracja</h2>
                </div>
                <form onSubmit={this.onSubmit}>
                    
                    <div className="register-panel__elements__input">
                    {/* <i className="fas fa-user"></i> */}
                    <input 
                        className="register-panel__elements__input__field"
                        type="text"
                        name="username"
                        onChange={this.onChange}
                        value={username}
                        placeholder="Twoja nazwa użytkownika"
                        
                    />
                    <i className="fas fa-user fa-lg icon1"></i>
                    </div>
                    <div className="register-panel__elements__input">
                    <input 
                        className="register-panel__elements__input__field"
                        type="email"
                        name="email"
                        onChange={this.onChange}
                        value={email}
                        placeholder="Twój email"
                    />
                    <i className="fas fa-envelope fa-lg icon2"></i>
                    </div>
                    <div className="register-panel__elements__input">
                    <input 
                        className="register-panel__elements__input__field"
                        type="password"
                        name="password"
                        onChange={this.onChange}
                        value={password}
                        placeholder="Twoje hasło"
                    />
                    <div password_visibility onMouseOver={this.visibility} onMouseOut={this.visibilityout}>
                    <i className="fas fa-lock fa-lg icon3 "></i>
                    </div>
                    </div>
                    <div className="register-panel__elements__input">
                    <input 
                        className="register-panel__elements__input__field"
                        type="password"
                        name="password2"
                        onChange={this.onChange}
                        value={password2}
                        placeholder="Powtórz hasło"
                    />
                    <i className="fas fa-redo fa-lg icon4" ></i>
                    </div>
                    <button type="submit" >Zarejestruj się</button>
                    <p>Jeśli posiadasz konto </p>  
                    <Link to="/login">Zaloguj się</Link>

                </form>
                </div>
            </div>
            </div>
        )
    }
}
const mapStatetoProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStatetoProps,{register})(Register);