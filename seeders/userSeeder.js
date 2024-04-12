const { faker } = require("@faker-js/faker");
const { User } = require("../models");

async function userSeeder() {
  const users = [];
  for (let i = 0; i < 20; i++) {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const newUser = {
      firstname,
      lastname,
      email: faker.internet.email({ firstName: firstname, lastName: lastname }),
      address: faker.location.streetAddress({ useFullAddress: true }),
      phone: faker.phone.number(),
      password: "123",
    };
    users.push(newUser);
  }
  await User.bulkCreate(users);
  console.log("The seeder of users has been runned!");
}

module.exports = userSeeder;
