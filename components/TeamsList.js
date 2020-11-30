import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const TeamsList = ({ teams }) => {
  return (
    <>
      <h1>Teams</h1>
      {teams.map((team, index) => {
        return (
          <div key={index}>
            <Link to={`/teams/${team.id}`}>{team.name}</Link>
          </div>
        )
      })}
    </>
  )
}

const mapStateToProps = state => ({ teams: state.teams.teams })

export default connect(mapStateToProps, null)(TeamsList)
