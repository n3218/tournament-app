// keep track of games

const gamesReducer = (state, action) => {
  return {
    games: [
      {
        id: 1234,
        team1: {
          points: 4,
          name: "Spartak"
        },
        team2: {
          points: 2,
          name: "Dinamo"
        }
      }
    ]
  }
}

export default gamesReducer
