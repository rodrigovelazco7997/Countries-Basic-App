import {cargarTodosPaises,cargarActividades, cargarPaises ,paisEspecifico} from './actions'



const InitialState={
    countries:[],
    allCountries:[],
    allActivities:[],
    one:{}
}

export const appReducer=(state=InitialState,action)=>{
    switch (action.type){
        case cargarPaises:
            return {
                ...state,
                countries:action.payload,                
            }
        case paisEspecifico:
            return{
                ...state,
                one:action.payload                
            }
        case cargarActividades:
            return{
                ...state,
                allActivities:action.payload
            }
        case cargarTodosPaises:
            return{
                ...state,
                allCountries:action.payload
            }
        default:
            return state
    }
}
