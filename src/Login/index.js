import React, { Component } from 'react';



class Login extends Component {
  constructor(){
    super();
    // super() calls the Component class's constructor, which allows
    // us to use 'this'

    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput = (e) => {
    console.log(e.currentTarget.name, ' < --e.currentTarget.name', e.currentTarget.value, ' < --e.currentTarget.value');

    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });

    // This is shorthand
    // const state = this.state;
    // state[e.currentTarget.name] = e.currentTarget.value;
    // this.setState(state);
  }

  handleSubmit = (e) => {
    // Stop the page from refreshing
    e.preventDefault();
// This is the messenger function from the app Component
// that will allow us to LIFT UP STATE to the parent Component
    this.props.handleLogin(this.state.username, true);
  }

  render(){
    console.log(this.props, ' props in Login Component')
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name="username" onChange={this.handleInput} value={this.state.username} placeholder="username" />
        <input type='password' onChange={this.handleInput} name="password" value={this.state.password} placeholder="password" />
        <input type='submit' value="Submit" />
      </form>
      )
  }
}


export default Login;
