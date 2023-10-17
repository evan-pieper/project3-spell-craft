const db = require('../config/connection');

const { Card, Index, User } = require('../models');

const userSeedData = require('./userSeedData.json');

db.once('open', async () => {
  await Card.deleteMany({});
  await Index.deleteMany({});
  await User.deleteMany({});


  const users = await User.insertMany(userSeedData);

  console.log('Technologies seeded!');
  process.exit(0);
});