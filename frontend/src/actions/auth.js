import axios from 'axios';

import {USER_LOADED,USER_LOADING,AUTH_ERROR,
     LOGIN_SUCCESS, LOGIN_FAIL,
      LOGOUT_SUCCESS,
      REGISTER_SUCCESS,
      REGISTER_FAIL} from './types'

//CHeck token load User 
export const loadUser = () => (dispatch,getState)=>{
    //USer loading
    dispatch({type: USER_LOADING})
    axios.get('http://127.0.0.1:8000/api/auth/user',tokenConfig(getState))
    .then(res =>{
        dispatch({
            type: USER_LOADED,
            payload: res.data,
        })
    }).catch(err=>{
        dispatch(
            console.log("problem z ładowaniem użytkownika")
        )
        dispatch({
            type: AUTH_ERROR
        })
    })
}

//Login USer
export const login = (username,password) => dispatch=>{
    //Headers
    const config={
        headers:{
            'Content-Type': 'application/json'
        }
    };
    //Request Body 
    const body=JSON.stringify({username,password})
    axios.post('http://127.0.0.1:8000/api/auth/login',body,config)
    .then(res =>{
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        })
    }).catch(err=>{
        dispatch(
            console.log("Problem z logowanie")
        )
        dispatch({
            type: LOGIN_FAIL
        })
    })
}
//Register user

export const register = ({username,password,email}) => dispatch=>{
    //Headers
    const config={
        headers:{
            'Content-Type': 'application/json'
        }
    };
    //Request Body 
    const body=JSON.stringify({username,password,email})
    axios.post('http://127.0.0.1:8000/api/auth/register/',body,config)
    .then(res =>{
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        })
    }).catch(err=>{
        dispatch(
            console.log("Problem z logowanie")
        )
        dispatch({
            type: REGISTER_FAIL,
        })
    })
}


//Logout user
export const logout = () => (dispatch,getState)=>{
    const token = getState().auth.token;
    //Headers
    const config={
        headers:{
            'Content-Type': 'application/json'
        }
    }
    //if token add to headers config
    if(token){
        config.headers['Authorization']= `Token ${token}`;
    }
    axios.post('http://127.0.0.1:8000/api/auth/logout/',null,tokenConfig(getState))
    .then(res =>{
        dispatch({
            type: LOGOUT_SUCCESS,
        })
    }).catch(err=>{
        dispatch(
            console.log("Wylogowywanie nie powiodło się")
        )
    })
}


// Setup config with token - helper function 
export const tokenConfig= getState =>{
    const token = getState().auth.token;
    //Headers
    const config={
        headers:{
            'Content-Type': 'application/json'
        }
    }
    //if token add to headers config
    if(token){
        config.headers['Authorization']= `Token ${token}`;
    }
    return config;
}
