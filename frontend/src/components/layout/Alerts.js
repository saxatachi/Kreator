import React, { Component, Fragment } from 'react'
import {withAlert} from "react-alert"
export class Alerts extends Component {
    componentDidMount(){
        this.props.alert.show("it Works");
        console.log("xd")
    }
    render() {
        return <h1>DIS to cwel</h1>;
    }
}
export default Alerts;