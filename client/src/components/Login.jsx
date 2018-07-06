import React from 'react';


class Login extends React.Component {

    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.state = {
        user: '',
        password: ''
      }
    }

  handleChange(e) {
    if (e.target.name === 'username') {
      this.setState({username: e.target.value});
    }
    if (e.target.name === 'password') {
      this.setState({password: e.target.value});
    }
  }


  handleSubmit(e) {
    this.props.handleUserInfo(this.state.username, this.state.password);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Login
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )

  }

}

// function Login(props) {
//     return (
//       <form onSubmit={props.handleSubmit}>
//         <label>
//           Login
//           <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
//           <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     )
// }



export default Login;

