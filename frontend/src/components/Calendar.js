import React,{useRef,createRef} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import {connect } from 'react-redux';
import {addDay} from '../actions/leads';
import { asRoughMinutes } from '@fullcalendar/core';
import ReactToPrint from 'react-to-print';
import Home from './Home';
import PropTypes from 'prop-types';
import '../css/calendar.min.css';

 class Calendar extends React.Component {
   constructor(props){
     super(props);
   }
   static propTypes={
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    }
  state={
    show: false,
    event: [],
    name: [],
    new_event:[],
    day: [],
    trainings:[],
    workouts:[],
    events:[],
    table:[],
  }
  componentDidMount(){
    const workout = this.props.leads
    for(let i=0;i<workout.length;i++){
      let event = {title: `${workout[i].name}`,start: `${workout[i].day}`}
        console.log(event)
        this.setState((state)=>{
          return{
            events: [...state.events,event]
          }
        })
    }
  }
  showModal = () => {
    this.setState({ show: true });
  };

hideModal = () => {
    this.setState({ show: false });
  };
  handleEvent=(e)=>{
    const propsy= this.props.leads
    const name =e.event.title
    for(let i=0;i<propsy.length;i++){

      if(propsy[i].name==name){
        this.setState((state)=>{
          const ev=propsy[i]
          return{
            event: ev,
            show:true
          }
        }
        )

      }
    }


  }
  render() {
    const trainings=this.state
    const event=this.state.events
    const aha='ahahhaha'
    return (
      <>
      <div id="calendar">
      <div>
       <Modal event={this.state.event} show={this.state.show} hideModal={this.hideModal}/>
       </div>
      <FullCalendar defaultView="dayGridMonth" plugins={[ bootstrapPlugin,dayGridPlugin,interactionPlugin ]}

      // locale='pl'
      events={this.state.events }
      eventClick={this.handleEvent}
      dateClick={this.handleDateClick}
      themeSystem = 'bootstrap'
      borderColor = 'black'
      firstDay =  {1}
      contentHeight= {700}
      height= {800}
      header={{
              left: 'prev,next today',
              center: 'title',
            }}
      //  monthNames={[STYCZEN,LUTY,MARZEC,KWIECIEŃ,MAJ,CZERWIEC,LIPIEC,SIERPIEŃ,WRZESIEŃ,PAŻDZIERNIK,LISTOPAD,GRUDZIEŃ]}

      />
      </div>
      </>
    )
  }
  handleDateClick = (arg) => { // bind with an arrow function
    console.log(arg.dateStr);
    const d= arg.dateStr
    this.setState((state)=>{
      return{
        day: d,

      }
    })
    const day =this.state.day
    this.props.addDay(day)
    alert(arg.dateStr)}
}

class Modal extends React.Component {
  
  render() {
      const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
      name=this.props.event.name
      const ref =React.createRef();
      return (

  <div className={showHideClassName}>
  <div className="modal-main">
    <ReactToPrint
        trigger={() => <h3 href="#">Print this out!</h3>}
        content={() => this.componentRef}
      />
    <Modal2 ref={el => (this.componentRef = el)} hideModal={this.props.hideModal} event={this.props.event} show={this.props.show}/>
  </div>
  </div>

      )
  }
 }
 
 class Modal2 extends React.Component {
   render() {
     return (
       <>
      <div className="modal-main__close">
        <div onClick={this.props.hideModal}><i className="far fa-times-circle fa-2x "></i></div>
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
       </>
     )
   }
 }
 
const mapStatetoProps = state =>({

  leads: state.leads.leads,
  auth: state.auth,
  day: state.leads.day,
})
export default connect(mapStatetoProps,{addDay})(Calendar);