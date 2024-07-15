# Frontend - React
React is all about components.

Note: I'm going to discuss only about functional components.
## How to create a react app
open terminal and follow below steps:
<br><b>Firstly you have to installed node js on your system if you've already done then no worries you can follow steps.</b>
To Download NodeJs visit official website, download and install for you respective os and make it work. [NodeJs](https://nodejs.org/en)
<br><i>To Check installation of NodeJs</i>
```node --version``` in terminal, and also make sure you've npm installed by running ```npm --version```.

#### Create React App
```bash
npx create-react-app app-name
```
```bash
cd app-name
code .
```
Note: Basics are not covered now file files structure and others.

### How to Create a Component
```js
import React from 'react'

const ComponentName = () => {
    // jsx (kind of HTML) return
  return (
    <div>
      <h1> Welcome to the Components</h1>
    </div>
  )
}
export default ComponentName
```
### Bootstrap
Visit [GetBootstrap](https://getbootstrap.com/) and copy css CDN from website:
CDN
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
```
Copy this Link and paste it in index.html in public folder 
```index.html```
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

    <!-- Here is our bootstrap link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <title>Go Watch a Movie</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  
  </body>
</html>
```

### Props
Props is a hook which used to pass variables/parameter/arguments/attributes from one component to another.

Example:
##### Sending props to a component
```js
import React from 'react'
import Hello from './Hello'
const App = () => {
  return (
    <div>
        <Hello username="BugsFounder" />
    </div>
  )
}

export default App
```

##### Excepting props in a component
```js
import React from 'react'

const Hello = (props) => {
    return (
        <div>
            <h1>Welcome {props.msg}</h1>
        </div>
    )
}

export default Hello
```
we are accessing ```msg``` in ```Hello``` component passed from ```App```.

### State (useState)
State is also a hook which used to manipulate state of a variable.

Example: 
#### Creating a State

Syntax:
```js
const [<variable_name>, <set_variable_name>] = useState(<default_value>)
```
```js
import React from 'react'
import Hello from './Hello'
import { useState } from "react";

const App = () => {
    // state
    const [username_i, setUsername_i] = useState("")
    
    // setting state 
    setUsername_i("BugsFounder")
  return (
    <div>
        <Hello username={username_i} />
    </div>
  )
}

export default App
```
You can see in above example we are creating a state and passing it to Hello Component.
```setUsername_i``` is a method used to change the default value of the current state.
```js
setUsername_i("BugsFounder")
```

### UseEffect Hook
```js
import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  // runs each time when count is updated
  useEffect(() => {
    document.title = `You clicked ${count} times`;

    // Optional cleanup
    return () => {
      console.log('Cleanup');
    };
  }, [count]); // Only re-run the effect if count changes

  // runs once when component mounts
  useEffect(() => {
    console.log("Component Mounted");
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default ExampleComponent;
```

### Ref
Refs provide a way to access DOM nodes or React elements created in the render method.

For example, when we create a form and put some input fields ex: name, email, password etc. so we want to make these fields blank if user clicked on submit button.
This is also worked with other elements as well.
```js
import React, {   useRef, useState } from 'react'
import "./App.css"
import Input from './Input'
function HelloWorld(props) {

    // state
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [DOB, setDOB] = useState("")

    // refs 
    const firstNameRef = useRef();
    const lastNameRef = useRef(null);
    const dobRef = useRef(null);

    // handleSubmit --> when form is submitted, then making fields blank again
    // pretending it is handled by backend -> fake for now
    const handleSubmit = (e) => {
        e.preventDefault();
        if (lastName !== "") {
            addPerson(firstName, lastName, DOB)
        }

        setFirstName("")
        setLastName("")
        setDOB("")

        // updating ref values to "" after submit button clicked
        firstNameRef.current.value = ""
        lastNameRef.current.value = ""
        dobRef.current.value = ""
    }
    return (
        <>
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
        </>
    )
}

export default HelloWorld;
```

### Forward Ref - forwardRef
What if i want to pass ref to another component as we see in above example we are using ```Input``` Component and passing ```ref={exampleRef}```. Now Let's see how we can accept this ref in the Input component.

```js
import React from 'react'
import { forwardRef } from 'react'

// wrap entire function into forwardRef 
const Input = forwardRef((props, ref) => {
    return (
        <div className='mb-3'>
            <label htmlFor={props.name} className="form-label">{props.title}</label>
            <input type={props.type}
                className={props.className}
                id={props.name}
                ref={ref} // using ref
                autoComplete={props.autoComplete}
                onChange={props.onChange}
            />
        </div>
    )
})

export default Input
```
### React Router 

##### index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import Movie from './components/Movie';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/movies',
        element: <Movies />,
      },
      {
        path: '/movies/:id', // id is a variable id=1,2,3,etc
        element: <Movie />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```
#### Outlet
Outlet is a component in React Router used to render child routes in nested routing.
```JS
{/* OUTLET */}
<Outlet context={{
jwtToken,
setJwtToken,
setAlertClassName,
setAlertMessage
}} />
```
##### App.js
```js
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Alert from "./components/Alert";
function App() {
    return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-3">Go Watch a Movie!</h1>
        </div>
        <div className="col text-end">
          {jwtToken === ""
            ?
            <Link to="/login"><span className="badge bg-success">Login</span></Link>
            :
            <a href="#!" onClick={logOut}><span className="badge bg-danger">Logout</span></a>
          }
        </div>
        <hr className="mb-3" />
      </div>

      <div className="row">

        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action">Home</Link>
              <Link to="/movies" className="list-group-item list-group-item-action">Movies</Link>
              <Link to="/genres" className="list-group-item list-group-item-action">Genres</Link>
              {jwtToken !== "" &&
                <>
                  <Link to="/admin/movie/0" className="list-group-item list-group-item-action">Add Movie</Link>
                  <Link to="/manage-catalogue" className="list-group-item list-group-item-action">Manage Catalogue</Link>
                  <Link to="/graphql" className="list-group-item list-group-item-action">GraphQL</Link>
                </>
              }
            </div>
          </nav>
        </div>

        <div className="col-md-10">
          <Alert
            message={alertMessage}
            className={alertClassName}
          />

          {/* OUTLET */}
          <Outlet />

        </div>

      </div>
    </div>

  );
}

export default App;
```
### Link 
In Html we use ```<a href="">```which makes page refresh we don't want it so we use Link and to in React instead of a.
example:

HTML
```html
<a href="/">Home</a>
```

JSX
```js
<Link to="/">Home</Link>
```
To use Link we need to import it also, keep in mind.
```js
import { Link } from 'react-router-dom'
```
### Login Form
### Navigate (navigate())
If you want to navigate to a different url then we use navigate().

Example:

import
```js
import { Link, Outlet, useNavigate } from "react-router-dom";
```
using
```js
  const navigate = useNavigate();
  const logOut = () => {
    setJwtToken("")
    navigate("/login")
  }
```
jsx
```html
 <a href="#!" onClick={logOut}><span className="badge bg-danger">Logout</span></a>
```
### Outlet Context
When we want to pass some variables to some components we can use outlet context.
```jsx
<Outlet context={{
jwtToken,
setJwtToken,
setAlertClassName,
setAlertMessage
}} />
```
### Showing Error, warning, message
### OnSubmit
### HandleSubmit