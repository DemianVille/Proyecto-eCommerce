const { faker } = require("@faker-js/faker");
const { Admin } = require("../models");

async function adminSeeder() {
  const admin = [];
  for (let i = 0; i < 20; i++) {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const newAdmin = {
      firstname,
      lastname,
      email: faker.internet.email({ firstName: firstname, lastName: lastname }),
      password: "123",
    };
    admin.push(newAdmin);
  }
  await Admin.bulkCreate(admin);
  console.log("The seeder of admins has been runned!");
}

module.exports = adminSeeder;
