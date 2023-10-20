const db = require('../config/connection');

const { Card, User } = require('../models');

const userSeedData = require('./userSeedData.json');
const cardSeedData = require('./cardSeedData.json');

db.once('open', async () => {
  await Card.deleteMany({});  //delete all the data from the database before seeding
  await User.deleteMany({});

  const createdUsers = await User.insertMany(userSeedData);  //create the users
  //const createdCards = await Card.insertMany(cardSeedData);  //create the cards
  //console.log(createdCards);

  console.log('Database seeded!');
  process.exit(0);
});