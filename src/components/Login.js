import React, {Component} from "react";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import { withRouter } from '../common/with-router';

const required = value => {
//if no data, required message
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};


class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    //set login state
    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
      role: ""
    };
  }
//event handlers
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();
//if no errors on login, navigate to patient page
    if (this.checkBtn.context._errors.length === 0 ) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.router.navigate("/Patient");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } 

    else {
      this.setState({
        loading: false
      });
    }
  }

render(){
    return(      
      //login modal
      <>
        <div className="modal">
          <div className="x-btn login-x" onClick={() => window.location.reload(false)}>
            &times;
          </div>
          <div className="form-header">
            <h1>Welcome</h1>
            <h3>LOGIN</h3>
          </div>
          {
            //submit login form on check button
          }
          <Form className="form"
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}>
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" name="Username" placeholder="username" value={this.state.username} onChange={this.onChangeUsername} validations={[required]} required/>
            </div>
            <div className="input-group">
              <i className="fas fa-key"></i>
              <input type="password" name="Password" placeholder="password" value={this.state.password} onChange={this.onChangePassword} validations={[required]} required/>
            </div>
            <div>
              <button
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span></span>
                )}
                <span>Login</span>
              </button>
            </div>
            {this.state.message && (
              <div >
                <div role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />      
          </Form>
        </div>
      </>
    );
  }
}
  


export default withRouter(Login);