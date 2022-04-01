import * as actions from './../actions/actionTypes'
const initialState = {
    users:[],
    carrer:[],
    academic:[],
    skills:[],
}

export default function (state = initialState,action){
    switch(action.type){
        case actions.GET_USERS:
            return {
                ...state,
                users:action.payload,
            }
        case actions.GET_CARRER:
            return {
                ...state,
                carrer:action.payload,
                }
        case actions.GET_ACADEMIC:
            return {
                ...state,
                academic:action.payload,
                }
         case actions.GET_SKILLS:
            return {
                ...state,
                skills:action.payload,
                }
        default:
            return state;   
    }
}

