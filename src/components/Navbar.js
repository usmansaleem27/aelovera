import React from "react";
import { BsCartCheck, BsPerson } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

import logo from "../images/logo.png";
const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg_color">
        <div className="container-fluid">
          <Link className="navbar-brand text-white fs-3" to="/">
            <img src={logo} className="img-fluid img_size" alt="" />
            Pure Alovera
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link text_white"
                  aria-current="page"
                  to="/home_page"
                >
                  Home
                </Link>
              </li>
              {pathname === "/home_page" ? (
                <li className="nav-item">
                  <Link className="nav-link text_white" to="/">
                    Home Link
                  </Link>
                </li>
              ) : (
                ""
              )}
              <li className="nav-item">
                <Link className="nav-link text_white" to="/about_page">
                  About
                </Link>
              </li>
              {pathname === "/about_page" ? (
                <li className="nav-item">
                  <Link className="nav-link text_white" to="/">
                    About Link
                  </Link>
                </li>
              ) : (
                ""
              )}
              <li className="nav-item">
                <Link className="nav-link text_white" to="/shop_page">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text_white" to="/editable">
                  Editable
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text_white" to="/documentation">
                  Documentation
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text_white" to="/">
                  Pages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text_white" to="/">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link ps-lg-3 text_white" href="/">
                  <BsCartCheck />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text_white" href="/">
                  <BsPerson />
                </a>
              </li>
              <li className="nav-item">
                <Link to="/login" className="btn btn-danger nav-link text_white ms-lg-3">
                    Join Now
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
