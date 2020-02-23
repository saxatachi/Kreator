import React, { Component } from 'react'
import axios from 'axios'
import '../css/style.min.css'
import '@fortawesome/fontawesome-free/js/all'
import Calendar from './Calendar';
// import List from './List';
import {BrowserRouter,Link} from 'react-router-dom'; 
import {connect,useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {getLeads,deleteLead,addTraining} from '../actions/leads';
import Alerts from './layout/Alerts';
import {logout} from '../actions/auth';
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class ChooseStyle extends Component {
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
    componentDidMount(){
        this.props.getLeads();
    }
    state={
        selected: 'radio-1',
        status: 'true',
        style: '',
        day:'',
        break: false,
        tablica: [],
        type: true,
        break_training: [],
        name: '',
        comments:'',
        error: false,
        error_li: false,
        error_day:false,
        show: true,
        workout: '',
    }
    render() {
        const {error}= this.state.error
        const style = this.state.type ? {}: {display:'none'}
        const style1 = this.state.type ? {display:'none'}:{}
        const {isAuthenticated, user} = this.props.auth;
        const authLinks=(
            <ul>
                <span><strong>{user ? `Witaj ${user.username}`: ""}</strong></span>
                {/* <button onClick={this.props.logout}><i class="fas fa-sign-out-alt"></i>Wyloguj</button> */}
                <button class="btn"><i class="fas fa-sign-out-alt"></i> Wyloguj się</button>
            </ul>
        )
        const guestLinks=(
            <ul>
                <li><Link to="/login">Logowanie</Link></li>
                <li><Link to="/register">Rejestracja</Link></li>
                
            </ul>)
        const errorMessage=(
            <div className="error">
                <p>Musisz podać nazwę treningu</p>
            </div>
        )
        const errorDayMessage=(
            <div className="error">
                <p>Musisz wybrać dzień z kalendarza obok</p>
            </div>
        )     
        const errorliMessage=(
            <div className="error">
                <p>Musisz wybrać ćwiczenia do treningu</p>
            </div>
        )  
        const timebreak=(
            <>
            <div className="break">

                
            </div>
            </>
        )
        
        return (
        <>   
            <BrowserRouter>
            <div className="contain">
                <div className="calendar"><Calendar /></div>
                <div className="container_styles">
                <div className="choice">
                    <label className="radio"><input  type="radio" name="radio2" onChange={this.handleChoice} checked={this.state.type===true}></input>Wersja automatyczna <span></span></label>
                    <label className="radio"><input  type="radio" name="radio2" onChange={this.handleChoice} checked={this.state.type===false}></input>Wersja ręczna <span></span></label>
                </div>
                    
                    <div className="automatic" style={style}>
                    <div className="styles" >    
                        <label className="radio2"><input type="radio" name="radio" id="radio-1" value="radio-1" checked={this.state.selected==='radio-1'} onChange={this.handleCheckbox}></input>
                        Styl klasyczny<span></span></label>
                        <label  className="radio2"><input type="radio" name="radio" id="radio-2" value="radio-2" checked={this.state.selected === 'radio-2'} onChange={this.handleCheckbox}></input>
                        Styl grzbietowy<span></span></label>
                        <label  className="radio2"><input type="radio" name="radio" id="radio-3" value="radio-3" checked={this.state.selected === 'radio-3'} onChange={this.handleCheckbox}></input>
                        Styl motylkowy<span></span></label>
                        <label  className="radio2"><input type="radio" name="radio" id="radio-4" value="radio-4" checked={this.state.selected === 'radio-4'} onChange={this.handleCheckbox}></input>
                        Styl dowolny<span></span></label>
                    </div>
                    <div className="styl">
                        {this.state.selected=== 'radio-1' && <this.Breastroke />}
                        {this.state.selected=== 'radio-2' && <this.Backstroke />}
                        {this.state.selected=== 'radio-3' && <this.Fly />}
                        {this.state.selected=== 'radio-4' && <this.Freestyle />}
                    </div>
                    </div>
                    <div className="manual" style={style1}>
                        <label>Odległość do przepłynięcia :</label>
                        <input id = "manual__distance" type="text"  placeholder="Odległość" /><br/>
                        <label>Styl pływacki :</label>
                        <input id = "manual__name" type="text" placeholder="Nazwa ćwiczenia" /><br/>
                        

                    </div>
                <div className="train">    
                { <div className="training">
                    <ul>
                        {this.state.tablica.map((tablica,index)=>{
                            return(<List 
                            delEvent={this.deleteUser.bind(this,index)} 
                            tab={tablica} 
                            status={this.state.status}/>)
                        })}
                    </ul>
                </div>}
                
                
                <div className="styles__submit">
                    <button className="button__pointer" onClick={this.handleSubmit}><span><i class="fas fa-hand-pointer fa-2x"></i></span>Wybierz</button>
                    {/* <input type="submit" value="Wybierz" onClick={this.handleSubmit} /> */}
                    <button className="button__break" onClick={this.handleBreak}><span><i class="fas fa-hand-pointer fa-2x"></i></span>Wybierz</button>
                    <input type="submit" value="Zaakceptuj przerwy" onClick={this.handleBreak} />
                </div>
                {this.state.break ? timebreak : null}
                {this.state.error_li && errorliMessage }
                {this.state.error_day && errorDayMessage}
                <form>
                    <p>Wprowadź nazwę treningu :</p>
                    <input id="training__name" type="text" placeholder="Wpisz nazwę treningu" onChange={this.handleName}/>
                    {this.state.error && errorMessage }
                    <p>Wprowadź uwagi do treningu :</p>
                    <textarea id = "manual__comments" type="textarea" placeholder="Uwagi do treningu" onChange={this.handleComments}></textarea><br/>
                    <input type="submit" value="Zatwierdź trening" onClick={this.handleTraining}/>
                    
                </form>
                </div>
                </div>
                    
                
            </div>
            </BrowserRouter>
        </>
        )
        
        
    }
        handleDelete=()=>{
            let items=document.getElementsByClassName('styles-group__item');
        }

        deleteUser=(index,e)=>{
            const tablica=[...this.state.tablica];
            tablica.splice(index,1);
            this.setState({tablica:tablica})
        }
        
        handleTraining=(e)=>{
            
            e.preventDefault();
            const items=document.getElementsByClassName('input__break');
            const name1=document.getElementById("training__name");
            const comments=document.getElementById('manual__comments');
            const li= document.getElementsByClassName('styles__list');
            if(name1.value.length>0 && li.length>0 && this.props.day !== ''){
            this.setState((state)=>{
                return{
                    error: false,
                    error_li: false,
                    error_day: false,
                    name: name1.value,
                    comments: comments.value,
                }
            })
        
        }
        else{
            if(name1.value.length<1){
            this.setState((state)=>{
                return{
                    error: true,    
                }
            })
            }
            if(li.length == 0){
                this.setState((state)=>{
                    return{
                        error_li: true,    
                    }
                })
            }
            if(this.props.day == '') {
                this.setState((state)=>{
                    return{
                        error_day: true,
                    }
                })
            }
        }
        const {name,tablica,style,break_training}=this.state
        const {day}=this.props
        const training = {name,tablica,style,break_training,day};
        this.props.addTraining(training);   
        }
        handleBreak=(e)=>{
            e.preventDefault();
            this.setState((state)=>{
                return{
                    break_training: []}
                
            })
            const ready='input__break__ready'
            const items=document.getElementsByClassName('input__break');
            for(let i=0;i<items.length;i++){
                if(items[i].value==""){
                    items[i].value="brak";
                    this.setState((state)=>{
                        return{
                        break_training: [...state.break_training,items[i].value],}
                    })
                    
                }else{
                this.setState((state)=>{
                    return{
                    break_training: [...state.break_training,items[i].value],}
                })}
            }
        }
        showModal = () => {
            this.setState({ show: true });
          };
        
        hideModal = () => {
            this.setState({ show: false });
          }; 
        handleSubmit=(e)=>{
                e.preventDefault();
                if(this.state.type){
                let items=document.getElementsByClassName('list-group__item');
                let items2=document.getElementsByClassName('list-group__item active');
                for(let i=0;i<items.length;i++){
                    if(items[i].className =='list-group__item active'){
                        console.log(items[i].textContent)
                        this.setState((state)=>{
                        return{
                            style: state.status,
                            tablica: [...state.tablica,items[i].textContent],
                            
                        }}
                        
                        )}
                    if(items[i].className =='list-group__item active'){
                        items[i].className= 'list-group__item';
                        
                    }
                    }
                    }else{
                    const name=document.getElementById('manual__name').value;
                    const distance=document.getElementById('manual__distance').value;
                    const fullname= distance+name;
                    this.setState((state)=>{
                        return{
                            tablica: [...state.tablica,fullname],
                        }
                    })
                    
                }    
            }  
        
        handleName=(e)=>{
            
            this.setState({
                name: e.currentTarget.value
            })
        }
        handleComments=(e)=>{
            
            this.setState({
                comments: e.currentTarget.value
            })
        }
        
        handleChange=(e)=>{
            this.setState({
                style: e.currentTarget.textContent
            })
            const act = 'list-group__item active'
            const dis = 'list-group__item'
            if (e.currentTarget.className == act){
                e.currentTarget.className =  dis
            }else{
                e.currentTarget.className = act
                

            }
        }
        
        handleCheckbox=(e)=>{
            
            this.setState({
                selected: e.target.value
            })
        } 
        handleChoice=(e)=>{
            this.setState({
                type: !this.state.type
            })
        }
                Freestyle = () => { 
                    return (
                        <div>
                            <ul className="list-group">
                                <li className="list-group__item" onClick={this.handleChange} >25 m dowolny</li>
                                <li className="list-group__item" onClick={this.handleChange} >50 m dowolny</li>
                                <li className="list-group__item" onClick={this.handleChange} >75 m dowolny</li>
                                <li className="list-group__item" onClick={this.handleChange} >100 m dowolny</li>
                                <li className="list-group__item" onClick={this.handleChange} >125 m dowolny</li>
                                <li className="list-group__item" onClick={this.handleChange} >150 m dowolny</li>
                                <li className="list-group__item" onClick={this.handleChange} >175 m dowolny</li>
                                <li className="list-group__item" onClick={this.handleChange} >200 m dowolny</li>
                                <li className="list-group__item" onClick={this.handleChange} >225 m dowolny</li>
                                <li className="list-group__item" onClick={this.handleChange} >250 m dowolny</li>
                            </ul>
                        </div>
                    )}         
                
        
        
        
        Breastroke = () => { 
            return (
                <div>
                    <ul className="list-group">
                        <li className="list-group__item" onClick={this.handleChange} >25 m klasyczny</li>
                        <li className="list-group__item" onClick={this.handleChange} >50 m klasyczny</li>
                        <li className="list-group__item" onClick={this.handleChange} >75 m klasyczny</li>
                        <li className="list-group__item" onClick={this.handleChange} >100 m klasyczny</li>
                        <li className="list-group__item" onClick={this.handleChange} >125 m klasyczny</li>
                        <li className="list-group__item" onClick={this.handleChange} >150 m klasyczny</li>
                        <li className="list-group__item" onClick={this.handleChange} >175 m klasyczny</li>
                        <li className="list-group__item" onClick={this.handleChange} >200 m klasyczny</li>
                        <li className="list-group__item" onClick={this.handleChange} >225 m klasyczny</li>
                        <li className="list-group__item" onClick={this.handleChange} >250 m klasyczny</li>
                    </ul>
                </div>
            )}
        Backstroke = () => { 
            return (
                <div>
                    <ul className="list-group">
                        <li className="list-group__item" onClick={this.handleChange} >25 m grzbiet</li>
                        <li className="list-group__item" onClick={this.handleChange} >50 m grzbiet</li>
                        <li className="list-group__item" onClick={this.handleChange} >75 m grzbiet</li>
                        <li className="list-group__item" onClick={this.handleChange} >100 m grzbiet</li>
                        <li className="list-group__item" onClick={this.handleChange} >125 m grzbiet</li>
                        <li className="list-group__item" onClick={this.handleChange} >150 m grzbiet</li>
                        <li className="list-group__item" onClick={this.handleChange} >175 m grzbiet</li>
                        <li className="list-group__item" onClick={this.handleChange} >200 m grzbiet</li>
                        <li className="list-group__item" onClick={this.handleChange} >225 m grzbiet</li>
                        <li className="list-group__item" onClick={this.handleChange} >250 m grzbiet</li>
                    </ul>
                </div>
            )}    
        Fly = () => { 
            return (
                <div>
                    <ul className="list-group">
                        <li className="list-group__item" onClick={this.handleChange} >25 m delfin</li>
                        <li className="list-group__item" onClick={this.handleChange} >50 m delfin</li>
                        <li className="list-group__item" onClick={this.handleChange} >75 m delfin</li>
                        <li className="list-group__item" onClick={this.handleChange} >100 m delfin</li>
                        <li className="list-group__item" onClick={this.handleChange} >125 m delfin</li>
                        <li className="list-group__item" onClick={this.handleChange} >150 m delfin</li>
                        <li className="list-group__item" onClick={this.handleChange} >175 m delfin</li>
                        <li className="list-group__item" onClick={this.handleChange} >200 m delfin</li>
                        <li className="list-group__item" onClick={this.handleChange} >225 m delfin</li>
                        <li className="list-group__item" onClick={this.handleChange} >250 m delfin</li>
                    </ul>
                </div>
            )}
            HandleSignUp=(e)=>{

                let name = 'nazwa';
                let training = 'trening';
                let csrftoken = Cookies.get('csrftoken');
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/events/',
                    data: {
                      csrfmiddlewaretoken: csrf_token,
                      name : name,
                      training : training,
                    }, headers: {
                        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                        
                      }
                  }).then(
                      response => {console.log(response)})
                      .catch(error=>{console.log(error.response)})
                  
            }

            handleErrors=(err)=>{
                if(err.response){
                    console.log("Problem with response", err.response.status);
                }else if(err.request){
                    console.log("Problem with request");
                }else{
                    console.log('Error',err.message);
                }
            }
            addSingleUser = (e) => {
                e.preventDefault();
                 
                let name = "jd";
                let email = "jd_proba";
                var url = 'http://127.0.0.1:8000/events/';
                   
                fetch('http://127.0.0.1:8000/events/',{
                    method: 'POST',
                    body: JSON.stringify({
                        name: 'jebac disa',
                        training: 'kurwe zwisa',
                      }),
                      headers: {
                        "Content-type": "application/json; charset=UTF-8"
                      }
                })
                    .then(response => response.json())
                    .then(json => console.log(json))
              }
              
    
}

const List = (props) => {
    return(
        <li className="styles__list">
            <span>{props.tab} : </span>
            <input type="text"  placeholder="Przerwa" className="input__break" maxlength="6" size="6" />
            <button class="delete__button" onClick={props.delEvent}><i class="fa fa-trash"></i> Usuń</button>
            {/* <a className="delete__button" role="button" onClick={props.delEvent}>
            <span>Usuń</span>
	        <div class="icon">
            <i class="far fa-trash-alt"></i> */}
		    {/* <i class="fa fa-check"></i> */}
	        {/* </div> */}
            {/* </a> */}
            {/* <button className="delete__button" onClick={props.delEvent}>Usuń</button> */}
        </li>    
        )
    };
const Training = (props)=>{
    return(
        <>
        <h3>{props.name}</h3>
        <li >
            <span>{props.tab} : </span>
            <span>{props.break_training} : </span>
            
        </li>
        </> 
    )
}    

const Modal = ({ lead,workout, hideModal,handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          {tablica}
          <h1>{showHideClassName}</h1>
          <button onClick={hideModal}>close</button>
        </section>
      </div>
    );
  };
const mapStatetoProps = state =>({
    
    auth: state.auth,
    leads: state.leads.leads,
    day: state.leads.day
})
export default connect(mapStatetoProps,{logout,getLeads,deleteLead,addTraining})(ChooseStyle);