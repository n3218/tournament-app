import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const GamesList = ({ games }) => {
  return (
    <>
      <h1>Games</h1>
      {games.map((game, index) => {
        return (
          <div key={index}>
            <Link to={`/games/${game.id}`}>
              {game.team1.name} vs {game.team2.name}
            </Link>
          </div>
        )
      })}
    </>
  )
}

const mapStateToProps = state => ({ games: state.games.games })

export default connect(mapStateToProps, null)(GamesList)
