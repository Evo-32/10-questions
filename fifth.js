const team{
    _players:[],
    _games:[],

    get players() {
        return this._players;
      },

      get games() {
        return this._games;
      },

      addplayer(newfirstName,newLastName ,newAge){
        const player={
            firstName:newFirstName,
            lastName:newLastName,
           age:newFirstName,
        };
        this._players.push(player);
      };
      addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {
          opponent: newOpponent,
          teamPoints: newTeamPoints,
          opponentPoints: newOpponentPoints
        };
        this._games.push(game);
      }
    };
}

team.addPlayer("Pete", "Wheeler", 54);
team.addPlayer("Bugs", "Bunny", 76);
team.addPlayer("Daffy", "Duck", 65);

// Adding games to the team
team.addGame("TeamA", 90, 85);
team.addGame("TeamB", 95, 92);
team.addGame("Titans", 100, 98);

// Logging the team's players and games
console.log("Team Players:", team.players);
console.log("Team Games:", team.games);