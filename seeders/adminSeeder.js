const { faker } = require("@faker-js/faker");
const { Admin } = require("../models");

async function adminSeeder() {
  const admin = [];
  const testerAdmin = {
    firstname: "Admin",
    lastname: "Admin",
    email: "admin@admin.uy",
    password: "123",
  };
  admin.push(testerAdmin);
  for (let i = 0; i < 9; i++) {
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
