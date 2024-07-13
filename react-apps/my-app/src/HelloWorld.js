import React, { Fragment, useState } from 'react'
import "./HelloWorld.css"
function HelloWorld(props) {

    // state
    const [isTrue, setIsTrue] = useState(true)
    const toggleTrue = () => {
        isTrue ? setIsTrue(false) : setIsTrue(true)
    }
    return (
        // <Fragment></Fragment> and <></> are some 
        <Fragment>
            <hr />
            <h1 className='h1-green'>{props.msg}</h1>
            <hr />
            {isTrue &&
                <Fragment>
                    <p>The current value of isTrue is true</p>
                    <hr />
                </Fragment>
            }
            <hr />
            {isTrue
                ? <p> Is true</p>
                : <p>Is false</p>

            }
            <hr />
            <a href="#!" className='btn btn-outline-secondary' onClick={toggleTrue}>Toggle isTrue</a>
        </Fragment>
    )
}

export default HelloWorld;