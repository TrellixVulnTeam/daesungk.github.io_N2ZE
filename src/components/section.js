import React from "react"

export default function Section(props) { 
    return (
        <div>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    )
}
