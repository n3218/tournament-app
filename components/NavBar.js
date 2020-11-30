import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/team/create">Create Team</Link>
    </>
  )
}

export default NavBar
