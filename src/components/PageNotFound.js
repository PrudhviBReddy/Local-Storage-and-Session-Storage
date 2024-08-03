import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='App'>
        <h2>Page Not Found</h2>
        <br></br>
        <Link to="/">Login</Link>
    </div>
  )
}

export default PageNotFound