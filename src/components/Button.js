import React from "react";

function Button(props){
    const clickHndler = props.makeClick; 
    return (
        <button onClick={clickHndler}> 
            click me!!! I'm button
        </button>
        )
}

export default Button