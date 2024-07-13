import React, { Fragment } from 'react'
import "./HelloWorld.css"
function HelloWorld(props) {
    return (
        // <Fragment></Fragment> and <></> are some 
        <Fragment>
            <hr />
            <h1 className='h1-green'>{props.msg}</h1>
        </Fragment>
    )
}

export default HelloWorld;