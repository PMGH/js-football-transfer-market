use transfer_market;
db.dropDatabase();

var celticfc = [
  {
    name: "Craig Gordon",
    nationality: "Scotland",
    club: "Celtic FC",
    position: "Goalkeeper",
    value: "6000000",
    transferListed: false
  },
  {
    name: "Mikael Lustig",
    nationality: "Sweden",
    club: "Celtic FC",
    position: "Defender",
    value: "4500000",
    transferListed: false
  },
  {
    name: "Leigh Griffiths",
    nationality: "Scotland",
    club: "Celtic FC",
    position: "Striker",
    value: "8000000",
    transferListed: false
  },
  {
    name: "Liam Henderson",
    nationality: "Scotland",
    club: "Celtic FC",
    position: "Midfielder",
    value: "1500000",
    transferListed: true
  }
];

var arsenalfc = [
  {
    name: "Jack Wilshere",
    nationality: "England",
    club: "Arsenal FC",
    position: "Midfielder",
    value: "10000000",
    transferListed: true
  },
  {
    name: "Olivier Giroud",
    nationality: "France",
    club: "Arsenal FC",
    position: "Striker",
    value: "30000000",
    transferListed: false
  },
  {
    name: "Nacho Monreal",
    nationality: "Spain",
    club: "Arsenal FC",
    position: "Defender",
    value: "15000000",
    transferListed: true
  }
];

var arrays = [celticfc, arsenalfc];

var populatePlayers = function(arrays){
  var players = [];
  arrays.forEach(function(arr){
    arr.forEach(function(player){
      players.push(player);
    });
  });
  db.players.insertMany(players);
}

populatePlayers(arrays);

db.players.find();
