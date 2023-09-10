import React, { Component } from "react";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../services/auth.service";

//form validations
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeSavedPatient = this.onChangeSavedPatient.bind(this);

    this.state = {
      title: "",
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      savedPatient: "",
      successful: false,
      message: ""
    };
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  
  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value
    });
  }

  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeSavedPatient(e) {
    this.setState({
      savedPatient: e.target.value
    });
  }

  //on form submit, if data meets requirements--> success
  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.title,
        this.state.firstname,
        this.state.lastname,
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.savedPatient
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }
  
  render(){
    //register modal
    return(
      <>
        <div className="modal">
          <div onClick={() => window.location.reload(false)} className="x-btn signup-x">
            &times;
          </div>
        {
          //form submit on checkbutton
        }
          <Form className="form" onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}>
           {!this.state.successful && (
            <>
              <div className="form-header">
                  <h1>Get access to the portal</h1>
                  <h3>Register</h3>
              </div>
    
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="firstname"
                    className="form-control"
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.onChangeFirstname}required/>
              </div>
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="lastname"
                    className="form-control"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.onChangeLastname}required/>
              </div>
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]} required/>
            </div>
            <div className="input-group">
              <i className="far fa-envelope"></i>
              <input placeholder="Email" type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]} required/>
            </div>
            <div className="input-group">
              <i className="fas fa-key"></i>
              <input type="password" placeholder="Password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]} required/>
            </div>
            <button type="submit">Register</button> 
            </>
            )}
            {
              //if successful--> success message, if not-->alert
            }
             {this.state.message && (
              <div className="form-group">
                <div  className={
                    this.state.successful
                      ? "      alert alert-success         "
                      : "alert alert-danger"
                  }
                  role="alert"
                >
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
    )
  };
}





