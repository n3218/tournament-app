import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

const TeamDetailsPage = ({ match, teams }) => {
  const teamId = match.params.id
  const team = teams.filter(team => team.id == teamId)[0]
  return (
    <div>
      <h1>{team.name}</h1>
      <ul>
        {team.members.map((mem, i) => (
          <li key={i}>{mem}</li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  teams: state.teams.teams
})

export default connect(mapStateToProps, null)(withRouter(TeamDetailsPage))
