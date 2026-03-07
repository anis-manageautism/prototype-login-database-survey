import React from 'react';
import Footer from './footer';
import './register.css';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstName: '',
                      lastName: '',
                      username: '',
                      password: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        event.preventDefault();
    }

    handleSubmit(event) {
        alert(`have submitted ${this.state.firstName}  ${this.state.lastName} ${this.state.Username} ${this.state.Password}`);
        event.preventDefault();
    }
    
    render()  {
        return (
            <div>
              <div className="registerContainer">
                 <div className="title">Register</div>
                 <form onSubmit={this.handleSubmit}>
                <h1>Names</h1>
                <label>first name 
                   <input name="firstName" type="text" placeholder="Enter first name"  value={this.state.firstName} onChange={this.handleChange}/>
                </label>
                <label>last name 
                   <input name="lastName" type="text" placeholder="Enter last name"  value={this.state.lastName} onChange={this.handleChange} />
                </label>   
                <h1>Username</h1>
                <label>first name 
                   <input name="Username" type="text" placeholder="Enter username" value={this.state.Username} onChange={this.handleChange}/>
                </label>
                <h1>Password</h1>
                <label>first name 
                   <input name="Password" type="password" placeholder="Enter password" value={this.state.Password} onChange={this.handleChange}/>
                </label>
                <button type="submit">Submit</button>
                </form>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc3DdP4XhmXk-kV5oOQLDEcKyOwqY3Qnte49GnHF7UfoQY6Lw/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button">Take Our Survey</button>
                </a>
              </div>
              <Footer/>
           </div>
        );
    }
}

export default RegisterPage;

