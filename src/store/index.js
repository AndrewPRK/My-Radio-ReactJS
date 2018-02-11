import {createStore, applyMiddleware} from "redux"
import reducer from "../reducer"
import logger from "./../middelware/logger"
import api from "./../middelware/api"

const enhancer = applyMiddleware(api, logger)
const store = createStore(reducer, enhancer)
window.store = store;

export default store;