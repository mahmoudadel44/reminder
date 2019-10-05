import {ADD_REMAINDER,REMOVE_REMAINDER,CLEAR_REMAINDERS} from './types'
export const addRemainder=(text,date)=>{
    const action={
    type:ADD_REMAINDER,
    text,
    date
    }
    console.log("Add",action)
    return action;
}

export const remove_Remainder=(id)=>{
const action={
type:REMOVE_REMAINDER,
id
}
return action
}
export const clear_Remainder=()=>{
    const action={
        type:CLEAR_REMAINDERS
    }
    return action
}