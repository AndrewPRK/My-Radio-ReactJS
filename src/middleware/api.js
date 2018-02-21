import {START, SUCSSES, FAIL} from "../constants"

export default store => next => action => {
    const{callAPI, type, ...rest} = action;
    if(!callAPI) {return next(action);}
    next({...rest, type: type + START} )
    setTimeout(()=>{ 
    fetch(callAPI)
    .then(res => res.json())
    .then(response => next({...rest, type: type + SUCSSES, response}))
    .then(error => next({...rest, type : type+FAIL, error}))},
    10)
}