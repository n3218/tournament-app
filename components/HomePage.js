import React, { Component } from "react"
import GamesList from "./GamesList"
import TeamsList from "./TeamsList"

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <TeamsList />
        <GamesList />
      </div>
    )
  }
}
