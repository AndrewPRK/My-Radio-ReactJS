import React from "react"

export default function ButtonPrev(props) {
    return(
        <i className="fa fa-backward" aria-hidden="true" onClick = {() => props.togglePrev()}></i>
    );
}