// keep track of teams and team members

const teamsReducer = (state, action) => {
  return {
    teams: [
      {
        id: 1,
        name: "Spartak",
        members: ["Oleg", "Andrey", "Alex"]
      },
      {
        id: 2,
        name: "Dinamo",
        members: ["Pavel", "Konstantin", "Viktor"]
      }
    ]
  }
}

export default teamsReducer
