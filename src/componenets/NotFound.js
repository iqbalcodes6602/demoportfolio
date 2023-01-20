import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      NotFound<br />
      <Link to="/" style={{color:"black", textDecoration:"underline"}} >go back to home</Link>
    </div>
  )
}

export default NotFound