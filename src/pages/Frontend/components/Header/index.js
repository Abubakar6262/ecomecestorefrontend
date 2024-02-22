import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaSearch, FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function Index() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <h2>Manor</h2>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/support"}>Support</Link>
            </li>
          </ul>
        </div>

        <ul className="navbar-nav ms-auto me-5"> {/* Adjust me-5 for distance */}
          <li className="nav-item">
            <Link className="nav-link" to="/auth/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="">Dashboard</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FaPhoneAlt />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FaSearch />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FaShoppingCart />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Index;
