import React, { Component } from 'react'
import ReactToPrint from 'react-to-print'
import {connect,useSelector } from 'react-redux'
import Calendar from './Calendar';
import {addDay} from '../actions/leads';
class Modal extends Component {
    render() {
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        console.log("tak wyglada tablica")
        name=this.props.event.name
        
        // let mapa=event.tablica.map((element)=><li>{element}</li>)
        return (
            
    <div className={showHideClassName}>
      <h2>Jebać disa</h2>
      <div className="modal-main">
        <div className="modal-main__close">
        <ReactToPrint
          trigger={() => <h1 href="#">Print this out!</h1>}
          content={() => this.props.componentRef.current}
        />
        <button onClick={this.props.hideModal}>close</button>
        </div>
        <div className="modal-main__table">
        <table border="1">
          <tr>
            <td className="modal-main__table__name" align="center" colspan="2" valign="middle" ><h3>{name}</h3></td>
          </tr>
          <tr>
            <td className="modal-main__table__title" align="center">Elementy treningu</td>
            <td className="modal-main__table__title" align="center">Przerwy treningowe</td>
          </tr>
          <tr>
            <td className="modal-main__table__element" valign="middle"><ul>{this.props.show ? this.props.event.tablica.map((element)=><li >{element}</li>) : null}</ul></td>
            <td className="modal-main__table__element" valign="middle"><ul>{this.props.show ? this.props.event.break_training.map((element2)=><li>{element2}</li>) : null}</ul></td>
          </tr>
          <tr>
            <td align="center" colspan="2" valign="middle">Tu będą dodawane komentarze do treningu</td>
          </tr>
        </table>
        </div>
      </div>
    </div>
            
        )
    }
}
const mapStatetoProps = state =>({
  
    leads: state.leads.leads,
    auth: state.auth,
    day: state.leads.day,
  })
  export default connect(mapStatetoProps,{addDay})(Modal);
