import {GET_LEADS,DELETE_LEAD,ADD_LEAD,ADD_TRAINING,ADD_DAY} from '../actions/types.js'

const initialState ={
    
    leads: [],
    break: [],
    styles: [],
    comments:[],
    name:[],
    day:'',
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_LEADS:
            return{
                ...state,
                leads: action.payload
            };
        case DELETE_LEAD:
            return{
                ...state,
                leads: state.leads.filter(lead => lead.id !== action.payload)
            };
        case ADD_LEAD:
            return{
                ...state,
                leads: [...state.leads,action.payload]
            };
        case ADD_TRAINING:
            return{
                ...state,
                leads: [...state.name,action.payload]

            }
        case ADD_DAY:
            const newDay= action.payload;
            console.log("dzien")
            console.log(newDay)
            return{
                ...state,
                day: newDay
            }
              
        default:
            return state;
    }

}