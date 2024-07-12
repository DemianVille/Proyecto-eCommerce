const { faker } = require("@faker-js/faker");
const { User } = require("../models");
const bcrypt = require("bcryptjs");

async function userSeeder() {
  const users = [];
  const hashedPassword = await bcrypt.hash("123", 10);
  const testerUser = {
    firstname: "Test",
    lastname: "Test",
    email: "test@user.uy",
    address: "calleFalsa 123",
    phone: "123456789",
    password: hashedPassword,
  };
  users.push(testerUser);
  for (let i = 0; i < 19; i++) {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const email = faker.internet.email({ firstName: firstname, lastName: lastname })
    const newUser = {
      firstname,
      lastname,
      email: email.toLowerCase(),
      address: faker.location.streetAddress({ useFullAddress: true }),
      phone: faker.phone.number(),
      password: hashedPassword,
    };
    users.push(newUser);
  }
  await User.bulkCreate(users);
  console.log("The seeder of users has been runned!");
}

module.exports = userSeeder;
