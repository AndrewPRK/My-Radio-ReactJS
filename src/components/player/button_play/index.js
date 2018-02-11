import React from "react"

export default function ButtonPlay(props) {
    return(
        <div id="play-pause" onClick = {() => props.togglePlay()}>
            <i className = {props.playState ? "fa fa-play" : "fa fa-stop"} 
            aria-hidden="true" id="play" style={props.playState ?
            {padding: "7px 0 0 5px"} : {padding: "7px 0 0 1px"}}>
            </i>
        </div>
    );
}