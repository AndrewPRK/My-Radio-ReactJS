import {createStore, applyMiddleware} from "redux"
import reducer from "../reducer"
import logger from "./../middleware/logger"
import api from "./../middleware/api"

const enhancer = applyMiddleware(api, logger)
const store = createStore(reducer, enhancer)
window.store = store;

export default store;