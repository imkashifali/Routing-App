import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Routing</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

      <li className="nav-item active">
      <Link to ="/" className="nav-link">Home</Link>
      </li>

      <li>
      <Link to ="/About" className="nav-link">About</Link>
      </li>
      <li>
      <Link to ="/contact" className="nav-link">Contact</Link>
      </li>
      <li >
      <Link to ="/account" className="nav-link">Form</Link>
      </li>
      <li >
      <Link to ="/table" className="nav-link">Table</Link>
      </li>
      <li>
      <Link to ="/post" className="nav-link">Posts</Link>
      </li>
     
     
    </ul>
  </div>
</nav>
    )
}
