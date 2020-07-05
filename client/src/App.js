import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';

import Login from './components/users/Login'
import SignUp from './components/users/SignUp'

import axios from './config/axios'

function App(props) {
  return (
    <div className="container">
      <div className="center">
        <div className="col-md-5" style={{ marginTop: '5%' }}>
          <BrowserRouter>
            <Nav variant="pills">
            <Nav.Item>
                <Nav.Link href="/"  size="lg"></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/users/login"  size="lg" >Log In</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/users/signup"  size="lg">Sign Up</Nav.Link>
              </Nav.Item>
            </Nav>

            <Switch>
            <Route path="/" component={Login} exact = {true}/>
              <Route path="/users/login" component={Login} />
              <Route path="/users/signup" component={SignUp} />
              <Route path="/users/logout" render={(props) => {
                axios.delete('/users/logout', {
                  headers: {
                    'x-auth': localStorage.getItem('authToken')
                  }
                }).then(res => {
                  localStorage.removeItem("authToken")
                  props.history.push('/')
                  window.location.reload()
                })
                  .catch(err => {
                    alert(err)
                  })

              }} />

            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  )
}

export default App
