import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar bg-white border-bottom border-success border-2 shadow fixed-top">
    <div className="container-fluid">
      <Link className="navbar-brand fw-bolder text-success">
        Second Nature
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <Link to= "/" className="nav-link link-dark fw-semibold">Home</Link>
        </li>
        <li className="nav-item">
            <Link to= "/list-menu" className="nav-link link-dark fw-semibold">List Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link-dark fw-semibold">Contact</Link>
        </li>
        </ul>
    </div>
  </nav>
  );
}
