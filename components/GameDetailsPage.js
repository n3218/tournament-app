import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

const GameDetailsPage = ({ match, games }) => {
  const gameId = match.params.id
  const game = games.filter(game => game.id == gameId)[0]
  console.log(game)
  return (
    <div>
      <h1>
        {game.team1.name} vs {game.team2.name}
      </h1>
      <h2>
        {game.team1.name}: {game.team1.points}
      </h2>
      <h2>
        {game.team2.name}: {game.team2.points}
      </h2>
    </div>
  )
}

const mapStateToProps = state => ({
  games: state.games.games
})

export default connect(mapStateToProps, null)(withRouter(GameDetailsPage))
