/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Link id="home" to="/app">
      <div className="home">CALCULATOR</div>
    </Link>
  )
}

export default Home
