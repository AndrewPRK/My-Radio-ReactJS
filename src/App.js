import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'
import {Provider} from "react-redux"
import store from "./store"
import RadioListContainer from "./components/Radio/RadioListContainer"
import Home from "./components/Home/Home"
import RouteRadioStations from "./Router/RouteRadioStations"
import Footer from "./components/Footer"
import Menu from "./components/Menu"

export default class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <Router>
                    <div>
                        <Menu/>
                        <div>
                            <Route exact path="/" component = {Home}/>
                            <Route exact path="/radio" component = {RadioListContainer}/>
                            <Route path="/radio/:station" component = {RouteRadioStations}/>
                        </div> 
                        <Footer/>
                    </div>
                </Router>
            </Provider> 
        )
    }
}

