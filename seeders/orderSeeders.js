const { Order } = require("../models");

async function orderSeeder() {
  const orders = [
    {
      products: [
        {
          id: 3,
          qty: 4,
          price: 32,
        },
        {
          id: 1,
          qty: 2,
          price: 30,
        },
      ],
      address: "29906 Bartholome Burg Apt. 827",
      userId: 3,
      status: "pending",
    },
    {
      products: [
        {
          id: 23,
          qty: 4,
          price: 25,
        },
        {
          id: 12,
          qty: 2,
          price: 45,
        },
      ],
      address: "29906 Bartholome Burg Apt. 827",
      userId: 13,
      status: "pending",
    },
    {
      products: [
        {
          id: 5,
          qty: 4,
          price: 36,
        },
        {
          id: 10,
          qty: 2,
          price: 45,
        },
      ],
      address: "29906 Bartholome Burg Apt. 827",
      userId: 19,
      status: "pending",
    },
    {
      products: [
        {
          id: 30,
          qty: 4,
          price: 38,
        },
        {
          id: 16,
          qty: 2,
          price: 38,
        },
      ],
      address: "29906 Bartholome Burg Apt. 827",
      userId: 11,
      status: "pending",
    },
    {
      products: [
        {
          id: 25,
          qty: 4,
          price: 35,
        },
        {
          id: 12,
          qty: 2,
          price: 45,
        },
      ],
      address: "29906 Bartholome Burg Apt. 827",
      userId: 16,
      status: "pending",
    },
    {
      products: [
        {
          id: 11,
          qty: 4,
          price: 50,
        },
        {
          id: 2,
          qty: 2,
          price: 23,
        },
      ],
      address: "29906 Bartholome Burg Apt. 827",
      userId: 20,
      status: "pending",
    },
    {
      products: [
        {
          id: 6,
          qty: 4,
          price: 116,
        },
        {
          id: 9,
          qty: 2,
          price: 180,
        },
      ],
      address: "29906 Bartholome Burg Apt. 827",
      userId: 1,
      status: "pending",
    },
    {
      products: [
        {
          id: 18,
          qty: 4,
          price: 55,
        },
        {
          id: 33,
          qty: 2,
          price: 57,
        },
      ],
      address: "29906 Bartholome Burg Apt. 827",
      userId: 9,
      status: "pending",
    },
    {
      products: [
        {
          id: 7,
          qty: 4,
          price: 126,
        },
        {
          id: 5,
          qty: 2,
          price: 36,
        },
      ],
      address: "29906 Bartholome Burg Apt. 827",
      userId: 6,
      status: "pending",
    },
    {
      products: [
        {
          id: 2,
          qty: 4,
          price: 23,
        },
        {
          id: 1,
          qty: 2,
          price: 30,
        },
      ],
      address: "29906 Bartholome Burg Apt. 827",
      userId: 1,
      status: "pending",
    },
    {
      products: [
        {
          id: 14,
          qty: 4,
          price: 42,
        },
        {
          id: 19,
          qty: 2,
          price: 19,
        },
      ],
      address: "29906 Bartholome Burg Apt. 827",
      userId: 12,
      status: "pending",
    },
    {
      products: [
        {
          id: 34,
          qty: 4,
          price: 40,
        },
        {
          id: 42,
          qty: 2,
          price: 12,
        },
      ],
      address: "29906 Bartholome Burg Apt. 827",
      userId: 7,
      status: "pending",
    },
    {
      products: [
        {
          id: 37,
          qty: 4,
          price: 32,
        },
        {
          id: 29,
          qty: 2,
          price: 46,
        },
      ],
      address: "29906 Bartholome Burg Apt. 827",
      userId: 2,
      status: "pending",
    },
  ];
  await Order.bulkCreate(orders);
  console.log("The seeder of orders has been runned!");
}

module.exports = orderSeeder;
