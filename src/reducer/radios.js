import {LOAD_RADIO_LIST, START, SUCSSES} from "../constants"

const defaultRadiosArr = {
    radioListObj: {},
    loading: false,
    loaded: false
};

export default function radioListReducer(state = defaultRadiosArr, action) {
    switch (action.type){
        case LOAD_RADIO_LIST + START:
            return {...state, loading: true}
        break;
        case LOAD_RADIO_LIST + SUCSSES:
            return {...state, radioListObj: action.response, loaded: true, loading: false}
        break;
        default:
            return state;
        break;
    }    
}