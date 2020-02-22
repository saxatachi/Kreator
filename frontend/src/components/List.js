import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.tab.map((tablica, index)=> <li key={index} className='styles-group__item'>{tablica} {key} <button onClick={this.handleDeleteIndex}>JEbac disa</button></li> )}
                </ul>
            </div>
        )
    }
    handleDeleteIndex=()=>{
        console.log('this ma wartość:', this);

    }



}