import '../css/rest.min.css';
import React, { Component } from 'react'

export default class Rest extends Component {
    render() {
        return (
            <div className='rest'>
                <div className="rest__contact">
                    <h1>Skontaktuj się z nami</h1>
                </div>
                <div className='rest__media'>
                    <div className="rest__media__emailicon">
                        <i class="fas fa-envelope-open-text fa-5x circle-icon"></i>
                    </div>
                    <div className="rest__media__email">  
                        <h3>E-mail : Kreatortreninguplywackiego@gmail.com</h3>
                    </div>  
                    <div className="rest__media__phoneicon">
                        <i class="fas fa-phone-square-alt fa-5x circle-icon"></i>
                    </div>
                    <div className="rest__media__phone">
                            <h3>Telefon: 501 779 384</h3>
                    </div>
                </div>
                <div className='rest__email'>
                    <div className="rest__email__name">
                        <input type="text" placeholder="Twoje imię"/>
                    </div>
                        <div className="rest__email__email">
                        <input type="email" placeholder="Twój email"/>
                    </div>
                    <div className="rest__email__subject">
                        <input type="text" placeholder="Temat"/>
                    </div>
                    <div className="rest__email__text">
                        <textarea name="Text1" cols="40" rows="5" placeholder="Treść wiadomości"></textarea>
                    </div>
                    <div className="rest__email__submit">
                        <input type="submit" value="Wyślij wiadomość"/>
                    </div>
                </div>
            </div>
        )
    }
}
