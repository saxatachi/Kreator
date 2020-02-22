import React, { Component } from 'react'
import '../css/slide.min.css'
export default class Slide extends Component {
    state={
        quote : 'first'
    }
    render() {
        return (
            <div className="slide">
                <div className="slide__font">
                    <i class="fas fa-quote-right"></i>
                </div>
                <div className="slide__quote">
                    {this.state.quote === 'first' && <this.FirstQuote/>}
                    {this.state.quote === 'second' && <this.SecondQuote/>}
                    {this.state.quote === 'third' && <this.ThirdQuote/>}
                </div>
                <div className="slide__author">
                    <div className="slide__author__radio">
                        <input type="radio" name="radio" id="first" value='first' checked={this.state.quote==='first'} onChange={this.handleCheckbox}></input>
                        <input type="radio" name="radio" id="second" value='second' checked={this.state.quote==='second'} onChange={this.handleCheckbox}></input>
                        <input type="radio" name="radio" id="third" value='third' checked={this.state.quote==='third'} onChange={this.handleCheckbox}></input>
                    </div>
                    <div className="slide__author_name">
                        {this.state.quote === 'first' && <h1>Michael Phelps</h1>}
                        {this.state.quote === 'second' && <h1>Otylia Jędrzejczak</h1>}
                        {this.state.quote === 'third' && <h1>Ian Thorpe</h1>}
                    </div>
                </div>
            </div>
            
        )
    }
    handleCheckbox=(e)=>{
            
        this.setState({
            quote: e.target.value
        })
    } 
    FirstQuote = () => { 
        return (
            <div className="slide__quote__first">
                Kiedy śpię, czasami dosłownie śnię wyścig od startu do mety. Kiedy indziej, gdy zapadam w sen, wyobrażam sobie to, co chcę osiągnąć: skok, wślizg do wody, ruchy, cykle, podejście do ściany, dotknięcie ściany, wyłączenie zegara, nawrót i płynięcie z powrotem tak wiele razy, ile trzeba do ukończenia wyścigu.
            </div>
        )}
    
    SecondQuote = () => { 
        return (
            <div className="slide__quote__second">
                <p>Moim życiem jest pływanie i na razie nie chcę niczego zmieniać. Jestem jak ryba w wodzie i w wodzie czuję się jak ryba.</p>
            </div>
        )}    
    ThirdQuote = () => { 
        return (
            <div className="slide__quote__third">
                <p>Pływasz i pływasz, okrążenie za okrążeniem, wpatrując się w czarną linię. W pewnym momencie podnosisz głowę i widzisz, że wokół jest świat.</p>
            </div>
        )}    
}
