import React from 'react'
import axios from '../../config/axios'
class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
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
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        console.log(formData)
        axios.post('/users/signup', formData)
            .then(response => {
                if (response.data.errors) {
                    alert(response.data.message)
                }
                else {
                    window.alert("Hello!!\nYou have Registered Sucessfully")
                    this.props.history.push('/users/login')
                }
            })
            .catch(err => {
                alert(err)
            })


    }

    render() {
        return (
            <div className="container">
                <h2 className="center">Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input placeholder="Username" className="form-control" type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <input placeholder="Email" className="form-control" type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <input placeholder="Password" className="form-control" type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Sign Up" />

                </form>
            </div>
        )
    }
}

export default SignUp
