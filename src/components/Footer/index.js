import React from 'react'
import "./styles.css"
import footerImg from "./footer.png"

export default (props) => {
    return(
        <div className = "main-footer">
            <img className = "main-footer-img" src = {footerImg} alt = "footer"/>
        </div>
        )
}