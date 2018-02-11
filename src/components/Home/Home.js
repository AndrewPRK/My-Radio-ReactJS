import React from "react"
import './style.css'
import homeImg from "../../imgs/home.jpg"

export default class Home extends React.Component {
    constructor() {
        super() 
        this.state = {
            isOpen: false
        }
    }
    render() {
        return (
            <div className = "home-page">
                <img src = {homeImg} className = {"home_img"} alt = "home_img"/>
                <button className = "sign_in" onClick = { this.logisOpen }>LOG IN</button>
            </div>
        )
    }

    logisOpen = () => this.setState({ isOpen: !this.state.isOpen })
}