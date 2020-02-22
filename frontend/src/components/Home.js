
import React, { Component } from 'react'
import Slide from './Slide'
import Rest from './Rest'
import Footer from './Footer'
import Choosestyle from './Choosestyle'
import Nav from './Nav'
//import '@fortawesome/fontawesome-free/js/all'
import '../css/home.min.css'
import {BrowserRouter as Router,NavLink,Route} from 'react-router-dom'
import ChooseStyle from './ChooseStyle';

export default class Home extends Component {
    render() {
        return (
            <Router>
            <>
            <div className="home">
                
                {/* <div className="logo">
                    <i id="font" className="fas fa-swimmer fa-3x" ></i>
                    <h3>Kreator treningu pływackiego</h3>
                </div>
                <div className="nav1">
                    <div className="nav__title">
                    <h3>Kreator Treningu Pływackiego</h3>
                </div>
                    <div className="nav__buttons">
                        <ul>
                            <li><NavLink exact to="/">Strona główna</NavLink></li>
                            <li><NavLink exact to="/calendar">Kalendarz</NavLink></li>
                            <li><NavLink exact to="/login">Logowanie</NavLink></li>
                            <li><NavLink exact to="/register">Rejestracja</NavLink></li>
                        </ul>
                    </div>
                    
                    <Route path="/calendar" />
                    
                </div> */}
                
                <div className="kreator">
                    <div className="kreator__title">
                        Najlepszy kreator treningu pływackiego
                    </div>
                    <div className="kreator__secondtitle">
                        <div className="kreator__secondtitle__1">
                            Pomagamy stworzyć trening dostosowany do twoich potrzeb
                        </div>
                    </div>
                    <div className="kreator__buttons">
                        <div className="kreator__buttons__button1">
                            <button type="button">Sprawdź</button> 
                        </div>
                        <div className="kreator__buttons__button2">
                            <button type="button">Logowanie</button> 
                        </div>
                    </div>
                    </div>
                <div className="zalety">
                    <div className="zalety__maintitle"><h1>Zalety kreatora pływackiego</h1>
                    </div>
                    <div className="zalety__fast">
                        <div className="zalety__fast__icon">
                            <i className="fas fa-fast-forward fa-5x circle-icon"></i>  
                        </div>
                        <div className="zalety__fast__title">
                            <h2>Szybkość</h2>
                        </div>
                        
                    </div>
                    <div className="zalety__design">
                        <div className="zalety__design__icon">
                            <i className="fas fa-pencil-ruler fa-5x circle-icon"></i>
                        </div>
                        <div className="zalety__design__title">
                            <h2>Nowoczesny design</h2>
                        </div>
                    </div>
                    <div className="zalety__simple">
                        <div className="zalety__simple__icon">
                            <i className="far fa-smile fa-5x circle-icon"></i>
                        </div>
                        <div className="zalety__simple__title">
                            <h2>Prosta w użyciu</h2>
                        </div>
                    </div>
                    <div className="zalety__secure">
                        <div className="zalety__secure__icon">
                            <i className="fas fa-lock fa-5x circle-icon"></i>
                        </div>
                        <div className="zalety__secure__title">
                            <h2>Bezpieczeństwo</h2>
                        </div>
                    </div>
                    <div className="zalety__summary">
                        <div className="zalety__summary__icon">
                            <i className="far fa-file-alt fa-5x circle-icon"></i>
                        </div>
                        <div className="zalety__summary__title">
                            <h2>Podsumowanie osiągnięć użytkownika</h2>
                        </div>
                    </div>
                    <div className="zalety__help">
                        <div className="zalety__help__icon">
                            <i className="fas fa-hands-helping fa-5x circle-icon"></i>
                        </div>
                        <div className="zalety__secure__title">
                            <h2>Bezpieczeństwo</h2>
                        </div>
                        
                    </div>    
                </div>
                <div className="kontakt">
                    <div className="kontakt__slides"><Slide /></div>
                    <div className="kontakt__rest"><Rest /></div>
                </div>
                
            </div>
            </>
            </Router>
        )
    }
}
