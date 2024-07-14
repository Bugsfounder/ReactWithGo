import React, { Fragment, useEffect, useState } from 'react'
import "./App.css"
function HelloWorld(props) {

    // state
    const [isTrue, setIsTrue] = useState(true)
    const [crowd, setCrowd] = useState([])
    const toggleTrue = () => {
        isTrue ? setIsTrue(false) : setIsTrue(true)
    }

    useEffect(() => {
        console.log("useEffect fired!");
        let people = [
            {
                id: 1,
                firstName: "Bugs",
                lastName: "Founder",
                dob: "10-07-2003"
            },
            {
                id: 2,
                firstName: "jack",
                lastName: "Smith",
                dob: "10-07-1996"
            },
            {
                id: 3,
                firstName: "Mary",
                lastName: "Founder",
                dob: "10-07-1995"
            },
        ]

        setCrowd(people)
    }, [])

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

            <hr />

            <h3>People</h3>
            <ul className="list-group">
                {crowd.map((m) => (
                    <li key={m.id} className='list-group-item'>{m.firstName} {m.lastName}</li>
                ))}
            </ul>
        </Fragment>
    )
}

export default HelloWorld;