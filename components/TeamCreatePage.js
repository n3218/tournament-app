import React from "react"
import { connect } from "react-redux"

const TeamCreatePage = ({ match, teams }) => {
  const teamId = match.params.id
  const team = teams.filter(team => team.id == teamId)[0]

  const submitHandler = e => {
    e.prevendDefault
  }
  return (
    <div>
      <h1>Create Team</h1>
      <form onSubmit={submitHandler}>
        <label>
          Team Name:
          <input type="text" placeholder="Team name" />
        </label>
        <label>
          Team Members
          <input type="text" placeholder="Team member" />
        </label>
        <label>
          Team Members
          <input type="text" placeholder="Team member" />
        </label>
        <label>
          Team Members
          <input type="text" placeholder="Team member" />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  teams: state.teams.teams
})

export default connect(mapStateToProps, null)(TeamCreatePage)
