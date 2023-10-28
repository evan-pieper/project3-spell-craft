const db = require('../config/connection');

const { Card, User } = require('../models');

const userSeedData = require('./userSeedData.json');
const cardSeedData = require('./cardSeedData.json');

db.once('open', async () => {
  await Card.deleteMany({});
  await User.deleteMany({});

  const users = await User.create(userSeedData);
  const cards = await Card.create(cardSeedData);

  console.log('Database seeded!');
  process.exit(0);
});