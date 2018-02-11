import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'
import App from '../App'
import Radio from "../components/Radio/Radio"
import Home from "../components/Home/Home"
import RouteRadioStations from "../Router/RouteRadioStations"

export default  function MainRoutes () {
        return  (
                <div>
                   <Route exact path="/" component = {Home}/>
                   <Route exact path="/radio" component = {Radio}/>
                   <Route path="/radio/:station" component = {RouteRadioStations}/>
                </div>   
        )
}        