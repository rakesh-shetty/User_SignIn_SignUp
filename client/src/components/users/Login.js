import React from 'react'
import axios from '../../config/axios'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(formData)
        axios.post('/users/login', formData)
            .then(response => {
                if (response.data.hasOwnProperty("error")) {
                    alert(response.data.error)
                    window.location.reload()
                }
                else {
                    const { token } = response.data
                    if (token) {
                        localStorage.setItem("authToken", token)
                        alert('You have succesfully logged in')
                    }

                }
            })
            .catch(err => {
                alert(err)
            })

    }

    render() {
        return (
            <div className="container">
                <h2 className="center">Log In</h2><br />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input placeholder="Email" className="form-control" type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <input placeholder="Password" className="form-control" type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

export default Login
