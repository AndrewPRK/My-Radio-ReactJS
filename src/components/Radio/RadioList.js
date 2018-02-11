import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

class RadioList extends React.Component {

    render() {  
        const radiostations = this.props.radios.map((radio, i) => {
            var img = require(`../../imgs/${radio.img}`);    
            return (  
                <div key = {i} className="radio">
                    <NavLink to={ "/radio" + radio.url }>
                    <h5 className = {"names"} > {radio.name} </h5>
                    <img className = {"imgs"} src = {img} alt={`station+${i}`} ></img>
                    </NavLink>
                </div>
            )
        });

    return (     
        <div>  
            <div className = {"radio_list"}>    
                {radiostations}  
            </div>
        </div>
    ); 
    } 
}

export default RadioList

