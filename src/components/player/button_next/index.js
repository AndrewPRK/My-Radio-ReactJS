import React from "react"

export default function ButtonNext(props) {
    return(
        <i className="fa fa-forward" aria-hidden="true" onClick = {() => props.toggleNext()}></i>
    );
}