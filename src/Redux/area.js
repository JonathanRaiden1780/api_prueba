import { Action_Types } from "../Actions/areas";
const initialState = {
    list:[]
}

export const Area = (state=initialState, action) => {
    switch(action.type){
        case Action_Types.FETCH_ALL:
            return{
                ...state,
                list:[...action.payload]
                }
                case Action_Types.CREATE:
                    return {
                        ...state,
                        list: [...state.list, action.payload]
                    }
        
                case Action_Types.UPDATE:
                    return {
                        ...state,
                        list: state.list.map(x => x.id == action.payload.id ? action.payload : x)
                    }
        
                case Action_Types.DELETE:
                    return {
                        ...state,
                        list: state.list.filter(x => x.id != action.payload)
                    }
                    
                default:
                    return state
            }
        }