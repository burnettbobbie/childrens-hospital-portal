import React, { Component } from "react";
import { Link} from "react-router-dom";
import AuthService from "../services/auth.service";
import ShowNotices from "../components/admin/Notices";
import CreateNotice from "../components/admin/CreateNotice";



export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showAdminBoard: true,
      currentUser: [{firstname: "", lastname: ""}]
    };
  }

  componentDidMount() {
    //get current user
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

  }

  logOut() {
    AuthService.logout();
    this.setState({
      showAdminBoard: true,
      currentUser: undefined,
    });
  }

  render() {

    const { currentUser, showAdminBoard} = this.state;

    return (
      <>
      
      <div className="admin-panel">
          <h3 className="admin-session">
            {//display admin name 
            }
              {currentUser.firstname +' '+ currentUser.lastname}
          </h3>
        <nav className="admin-nav">
          <div className="user-nav">
       
            {//if admin, show patients

            }
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/User-Records"} className="nav-link">
                  Patients
                </Link>
              </li>
            )}
          </div>
              {//If logged in, log out current user
              }
          {currentUser ? (
            <div className="user-nav">          
              <li className="nav-item">
                <Link to={"/"} className="nav-link" onClick={this.logOut}>
                  Logout
                </Link>
              </li>
            </div>
            
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Login
                </Link>
              </li>
            </div>
          )}
        </nav>
      </div>
   
        <div className="section-1"> 
          <div className="notifications">
            {//admin notice board
            }
          <ShowNotices/>    
          </div>
        </div>
        <div className="section-2">
          <div className="notifications">
            {//post admin notice
            }
            <CreateNotice/>          
          </div>
        </div>
      </>
    );
  }
}

