import React from 'react';
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Home from './Restricted.jsx'
import $ from 'jquery'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.userLoginStatus = this.userLoginStatus.bind(this);
    this.userRegisterStatus = this.userRegisterStatus.bind(this);
    this.handleUserInfo = this.handleUserInfo.bind(this);

    this.state = {
      isLoggedIn: false,
      isRegistered: false
    }
  }


  userLoginStatus(username, password) {
    return true
  }


  userRegisterStatus(username) {
    return true
  }


  handleUserInfo(username, password) {
    debugger
    if (this.userRegisterStatus(username) === true) {
      this.setState({ isRegistered: true })
    }
    if (this.userLoginStatus(username, password) === true) {
      this.setState({isRegistered: true, isLoggedIn: true})
    }
  }

  render() {
    if (this.state.isLoggedIn) return <Home />
    if (this.state.isRegistered) return <Login handleUserInfo={this.handleUserInfo}/>
    if (!this.state.isRegistered) return <Signup handleUserInfo={this.handleUserInfo}/>
  }

}

export default App;







