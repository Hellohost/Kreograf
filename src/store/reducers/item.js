import { LOAD_ITEMS } from "../types"

const initialState ={
    allItems: []
}

export const itemReducer = (state = initialState, action)=>{
    switch (action.type) {
        case LOAD_ITEMS: 
        return {...state, allItems: action.payload}
        default: return state
    }
    
}