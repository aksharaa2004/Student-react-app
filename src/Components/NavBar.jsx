import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>

    <nav className="navbar navbar-expand-lg bg-success navbar-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Student</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">AddStudent</Link>
        <Link class="nav-link" to="/Search">Search</Link>
        <Link class="nav-link" to="/Delete">Delete</Link>
        <Link class="nav-link" to="/ViewStudents">View Students</Link>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar