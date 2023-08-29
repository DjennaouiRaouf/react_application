import React from "react";
import logo from './logo.png'
import avatar from './avatar.png'
import Avatar from "react-avatar";

type NavigationBarProps = {
  //
};

const NavigationBar: React.FC = () => {

    return(
        <nav
            className="navbar navbar-expand-md py-3"
            style={{ background: "#ecf1f4" }}
        >
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="#">
      <span>
        <img src={logo} width="130px" height="30px" />
      </span>
            </a>
            <button
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navcol-1"
            >
              <span className="visually-hidden">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <div id="navcol-1" className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    First Item
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Second Item
                  </a>
                </li>
                <li className="nav-item">
                  <a
                      className="nav-link"
                      href="#"
                      style={{ color: "rgba(0, 0, 0, 0.65)" }}
                  >
                    Third Item
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                  <li className="nav-item dropdown">
                      <a
                          className="dropdown-toggle nav-link mb-auto"
                          aria-expanded="false"
                          data-bs-toggle="dropdown"
                          href="#"
                          style={{ color: "rgba(0,0,0,0.65)" }}
                      >
                          <Avatar name="Djennaoui raouf" size="50" round={true} src={avatar} />
                      </a>
                      <div
                          className="dropdown-menu dropdown-menu shadow dropdown-menu-end animated--grow-in"
                          style={{ background: "#ecf1f4" }}
                      >
                          <a
                              className="dropdown-item"
                              href="#"
                              style={{ color: "rgba(0,0,0,0.65)" }}
                          >
                              <i className="icon ion-ios-gear" style={{ marginRight: 5 }} />
                              Settings
                          </a>
                          <div className="dropdown-divider" />
                          <a
                              className="dropdown-item"
                              href="#"
                              style={{ color: "rgba(0,0,0,0.65)" }}
                          >
                              <i className="icon ion-log-out" style={{ marginRight: 5 }} />
                              Logout
                          </a>
                      </div>
                  </li>
              </ul>
            </div>
          </div>
        </nav>


    );
}

export default NavigationBar;
