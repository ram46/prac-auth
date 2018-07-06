import React from 'react';
import Home from './Login.jsx';



class Signup extends React.Component {

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
        Signup
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )

  }



}




// function Signup(props) {
//     return (
//       <form onSubmit={props.handleSubmit}>
//         <label>
//           Signup
//           <input type="text" name="username" value={props.username}/>
//           <input type="password" name="password"/>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     )
// }




// class Signup extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);

//     this.state = {
//       username: '',
//       password: '',
//     }
//   }

//   handleChange(e) {
//     if (e.target.name === 'username') {
//       this.setState({username: e.target.value});
//     }
//     if (e.target.name === 'password') {
//       this.setState({password: e.target.value});
//     }
//   }


//   handleSubmit(e) {
//     e.preventDefault();
//     // debugger
//     $.post('/signup', {username: this.state.username, password: this.state.password})
//       .done((result ) => {
//         console.log(result.status)
//         this.props.status('true');
//       })
//       // .fail((err) => {
//       //   alert(err.msg);
//       // })
//     }


//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
//           <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     )
//   }
// }



export default Signup;


