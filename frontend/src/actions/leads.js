import axios from 'axios';
import {GET_LEADS, DELETE_LEAD, ADD_LEAD, ADD_TRAINING,ADD_DAY} from './types';
import {tokenConfig} from './auth'
import { bindActionCreators } from 'redux';
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.delete("/router/events/", { crossdomain: true })
//GEt Leads
export const getLeads = () => (dispatch,getState) => {
    axios.get('http://127.0.0.1:8000/api/events/',tokenConfig(getState)).then(res =>{
        dispatch({
            type: GET_LEADS,
            payload: res.data
        });
    }).catch(err=> console.log(err))
};
//Delete LEads
export const deleteLead = (id) => (dispatch,getState) => {
    console.log(id);
    axios.delete(`http://127.0.0.1:8000/api/events/${id}/`,tokenConfig(getState)).then(res =>{
        dispatch({
            type: DELETE_LEAD,
            payload: id
        });
    }).catch(err=> console.log(err))
};
//ADD Lead
export const addLead = (lead) => (dispatch,getState) => {
    
    axios.post("http://127.0.0.1:8000/api/events/",lead,tokenConfig(getState)).then(res =>{
        dispatch({
            type: ADD_LEAD,
            payload: res.data
        });
    }).catch(err=> console.log(err))
};
export const addTraining = lead =>(dispatch,getState) =>{
    axios.post("http://127.0.0.1:8000/api/events/",lead,tokenConfig(getState)).then(res =>{
        dispatch({
            type: ADD_TRAINING,
            payload: res.data
        });
    }).catch(err=> console.log(err))
}
export const addDay = (day) =>(dispatch,getState) =>{
    dispatch({ type: 'ADD_DAY', payload: day})}
    