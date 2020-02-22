import React, { Component } from 'react'
import '../css/nav.min.css'
import {connect } from 'react-redux';
import {logout} from '../actions/auth';
class Nav extends Component {
    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks=(
            <>
                <div className="navbar__items__user"><span><strong>{user ? `Witaj ${user.username}`: ""}</strong></span>
                {/* <button onClick={this.props.logout}>Wyloguj</button> */}
                <button className="btn"><i class="fas fa-sign-out-alt"></i> Wyloguj się</button>
                </div>
                {/* <div className="navbar__items__login">Logowanie</div>
                <div className="navbar__items__register">Rejestracja</div> */}
            </>
        )
        const guestLinks=(
            <>
            <div className="navbar__items__login"><h2>Logowanie</h2></div>
            <div className="navbar__items__register"><h2>Rejestracja</h2></div>
            </>)
        return (
           
            <div>
                <nav className="navbar">
                    <div className="navbar__title">
                        <h4><span>Kreator treningu </span><br /> pływackiego</h4>
                    </div>
                    <div className="navbar__items">
                        <div className="navbar__items__kreator"><span><h2>Strona domowa</h2></span></div>
                        <div className="navbar__items__create"><span><h2>Stwórz trening</h2></span></div>
                        
                        { isAuthenticated ? authLinks : guestLinks}
                    </div>
                </nav>
                
            </div>
            
        )
    }
}
const mapStatetoProps = state =>({
    
    auth: state.auth,
    leads: state.leads.leads,
})

export default connect(mapStatetoProps,{logout})(Nav);
