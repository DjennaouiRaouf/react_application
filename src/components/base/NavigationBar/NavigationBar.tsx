import React from "react";
import logo from './logo.png';
import Avatar from "react-avatar";

type NavigationBarProps = {
  //
};

const NavigationBar: React.FC = () => {

    return(
        <nav
        className="navbar navbar-expand-md py-3"
        style={{ background: "#e2e8f0" }}
    >
        <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center" href="#">
      <span>
        <img width={90} height={39} src={logo} />
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
                <ul className="navbar-nav">
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
                        <a className="nav-link" href="#">
                            Third Item
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item dropdown no-arrow">
                        <div className="nav-item dropdown no-arrow">
                            <a
                                className="dropdown-toggle nav-link"
                                aria-expanded="false"
                                data-bs-toggle="dropdown"
                                href="#"
                            >
              <span className="d-none d-lg-inline me-2 text-gray-600 small">
                Username
              </span>
                                <Avatar name="Djennaoui raouf" size="40" round={true} src={""} />

                            </a>
                            <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-user fa-sm fa-fw me-2 text-gray-400" />
                                    &nbsp;Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400" />
                                    &nbsp;Settings
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-list fa-sm fa-fw me-2 text-gray-400" />
                                    &nbsp;Activity log
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400" />
                                    &nbsp;Logout
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


);
}

export default NavigationBar;
