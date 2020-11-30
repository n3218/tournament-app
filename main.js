import React from "react"
import ReactDOM from "react-dom"
import HomePage from "./components/HomePage"
import TeamDetailsPage from "./components/TeamDetailsPage"
import GameDetailsPage from "./components/GameDetailsPage"
import "./style.css"
import { combineReducers, createStore } from "redux"
import { Provider } from "react-redux"
import teamsReducer from "./reducers/TeamsReducer"
import gamesReducer from "./reducers/GamesReducer"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"

const reducer = combineReducers({
  teams: teamsReducer,
  games: gamesReducer
})
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div id="app-container">
        <Link to="/">Home</Link>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/teams/:id" component={TeamDetailsPage} />
          <Route path="/games/:id" component={GameDetailsPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
