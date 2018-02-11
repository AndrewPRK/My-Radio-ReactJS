import React from "react"
import {NavLink} from "react-router-dom"
import "./styles.css"

export default () => (
    <div className = {"menu"}>
        <ul>
            <li><NavLink className = {"link"} to = "/">Home</NavLink></li>
            <li><NavLink className = {"link"} to = "/radio">Radio</NavLink></li>
        </ul>
        <div className="social-wrapper">
            <ul>
                <li className = "facebook"><a href = "http://facebook.com" target = "_blank"><i className = "fa fa-facebook " aria-hidden = "true"></i></a></li>
                <li className = "twitter"><a href = "http://twitter.com" target = "_blank"><i className = "fa fa-twitter" aria-hidden = "true"></i></a></li>
                <li className = "google"><a href = "http://google.com" target = "_blank"><i className = "fa fa-google fa-2x" aria-hidden = "true"></i></a></li> 
            </ul>
        </div>
    </div>)