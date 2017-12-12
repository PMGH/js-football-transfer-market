use transfer_market;
db.dropDatabase();

var players = [
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
  },
  {
    name: "Jack Wilshere",
    nationality: "England",
    club: "Arsenal FC",
    position: "Midfielder",
    value: "10000000",
    transferListed: true
  }
];

db.transfer_market.insertMany(players);
db.transfer_market.find();
