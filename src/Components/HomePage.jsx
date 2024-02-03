import React from 'react'
import user_icon from '../Components/Assests/person-icon.jpg'
import { Link } from 'react-router-dom'
import './HomePage.css'
const HomePage = () => {
  return (
   <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/home">KeepItSimple</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
      </li>
    </ul>
    <Link class="btn  btn-light btn-round" to="/profile" role="button"><img src={user_icon} alt="" className='person-img' /></Link>
  </div>
</nav>

    <div className="container mt-5">
    <div className="jumbotron">
  <h1 className="display-4">Welcome to home page!</h1>
  <hr className="my-4"/>
  <p>You can edit you profile in profile section of navbar.</p>
  <a class="btn btn-primary btn-lg" href="/login" role="button">Logout</a>
</div>
    </div>
    </>
  )
}

export default HomePage
