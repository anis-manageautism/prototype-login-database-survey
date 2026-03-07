import React from 'react';
import './login.css';
import Footer from './footer';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Username: '',
                      Password: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        event.preventDefault();
    }

    handleSubmit(event) {
        alert(`have submitted ${this.state.Username} ${this.state.Password}`);
        event.preventDefault();
    }

    render()  {
        return (
            <div>
              <div className="loginContainer">
                <div className="title">Login</div>
                <form onSubmit={this.handleSubmit}>  
                <label>Username 
                   <input name="Username" placeholder="Enter username" value={this.state.Username} type="text" onChange={this.handleChange}/>
                </label>
                <label>Password
                   <input name="Password" placeholder="Enter password" value={this.state.Password} type="password" onChange={this.handleChange}/>
                </label>
                <button type="submit">Submit</button>
                </form>
                <Footer/>
              </div>
           </div>
        );
    }
};


export default LoginPage;
