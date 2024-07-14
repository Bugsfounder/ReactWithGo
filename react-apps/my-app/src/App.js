import React, { Fragment, useEffect, useRef, useState } from 'react'
import "./App.css"
import Input from './Input'
function HelloWorld(props) {

    // state
    const [isTrue, setIsTrue] = useState(true)
    const [crowd, setCrowd] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [DOB, setDOB] = useState("")

    // refs 
    const firstNameRef = useRef();
    const lastNameRef = useRef(null);
    const dobRef = useRef(null);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (lastName !== "") {
            addPerson(firstName, lastName, DOB)
        }
    }

    const addPerson = (newFirst, newLast, newDob) => {
        // create the object
        let newPerson = {
            id: crowd.length + 1,
            firstName: newFirst,
            lastName: newLast,
            dob: newDob,
        }

        const newList = crowd.concat(newPerson)
        const sorted = newList.sort((a, b) => {
            if (a.lastName < b.lastName) {
                return -1
            } else if (a.lastName > b.lastName) {
                return 1
            }
            return 0
        })

        setCrowd(sorted)
        setFirstName("")
        setLastName("")
        setDOB("")

        firstNameRef.current.value = ""
        lastNameRef.current.value = ""
        dobRef.current.value = ""
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

            <hr />

            <form autoComplete='off' onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="first-name" className="form-label">First Name</label>
                    <input type="text" name='first-name' id="first-name"
                        ref={firstNameRef} autoComplete='first-name-new' className='form-control' onChange={(event) => setFirstName(event.target.value)} />
                </div>

                <Input title="Last Name"
                    type="text"
                    name="last-name"
                    autoComplete="last-name-new"
                    className="form-control"
                    ref={lastNameRef}
                    onChange={(e) => setLastName(e.target.value)}
                ></Input>

                <Input title="Date of Birth"
                    type="date"
                    name="dob"
                    ref={dobRef}
                    autoComplete="dob-new"
                    className="form-control"
                    onChange={(e) => setDOB(e.target.value)}
                ></Input>

                <button className="btn btn-primary">Submit</button>
            </form>

            <div>
                First Name : {firstName} <br />
                Last Name : {lastName} <br />
                DOB : {DOB} <br />
            </div>
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