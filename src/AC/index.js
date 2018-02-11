import {SELECTED, LOAD_RADIO_LIST} from "../constants" 

export function changeSearch(res) {
    return {
        type: SELECTED,
        payload: {res}
    }
}
export function loadRadioList(res) {
    return {
        type: LOAD_RADIO_LIST,
        callAPI: "/api/radio_list"
    }
}