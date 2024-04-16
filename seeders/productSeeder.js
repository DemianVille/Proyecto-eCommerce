const { Product } = require("../models");
async function productSeeder() {
  const products = [
    {
      name: "Adult footed tights",
      description:
        "These high quality, adult footed tights are just what you need for the classic, flattering. Lots of color options that can fit all your needs and styles to help you be at your peak performance!",
      photo:
        "https://thedanceshop.com.uy/wp-content/uploads/2021/07/ca-n15bpk-capezio-convertible-toe-ballet-tights-pink_no1__30388.1605318408-e1627494699384.jpg",
      color: "Ballet pink, Black and White",
      price: 15.0,
      stock: 25,
      featured: true,
      categoryId: 2,
    },
    {
      name: "Pointe Shoes Gaynor Minden",
      description:
        "They are made of synthetic polymers with extraordinary flexibility, resistance and strength, and therefore last 3-4 times longer than a traditional tip",
      photo:
        "https://carolinabdancewear.com/wp-content/uploads/2021/09/1A7498A5-B446-4147-918E-4601BEC76A36.jpg",
      price: 116.0,
      stock: 18,
      featured: false,
      categoryId: 1,
    },
    {
      name: "Men's mesh with handles",
      description:
        "Pointe shoes Gaynor Minden with soft sole ideal for beginner dancers. Comfortable and flexible.",
      photo:
        "https://36580daefdd0e4c6740b-4fe617358557d0f7b1aac6516479e176.ssl.cf1.rackcdn.com/products/23883.25230.jpg",
      price: 13.99,
      stock: 10,
      featured: true,
      categoryId: 3,
    },
    {
      name: "Men's quilted dance belt",
      description:
        "Signature cotton-lycra technology meets comfort to give you your new favorite dance belt. This staple piece delivers premium stretch and comfort in a stylish, simplistic way.",
      photo:
        "https://www.capezio.com/media/catalog/product/c/a/capezio_quilted_dance_belt_black_n5930_base.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=815&width=610&canvas=610:815",
      color: "Black and Tan",
      price: 42.0,
      stock: 32,
      featured: false,
      categoryId: 3,
    },
    {
      name: "Leotard Camilla",
      description:
        "The Camilla is a variation of a usual leotard. Spotlighting front and mesh inserts with strap details on the shoulders and back for a polished look. Comfort is promised with a mix of microfiber and mesh spandex supporting every move you make.",
      photo:
        "https://www.sodanca.com/cdn/shop/products/SL135-midnight-blue-2_1_360x.jpg?v=1647614216",
      price: 57.0,
      stock: 15,
      featured: true,
      categoryId: 2,
    },
    {
      name: "Leotard Lucille",
      description:
        "This long sleeve adult leotard features a pinch in the front and low back to help dancers give an image of beauty.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/SL117-black-1_2_540x.jpg?v=1706642084",
      price: 44.0,
      stock: 40,
      featured: false,
      categoryId: 2,
    },
    {
      name: "Platter Tutu",
      description:
        "Dish-shaped tutu with 6 layers of tulle. The tutu incorporates a fully lined lycra fabric panty and elastic waist.",
      photo:
        "https://cdn11.bigcommerce.com/s-m12047qc85/images/stencil/1280x1280/products/147435/6218843/THPL002_white_1_w__22001.1690060133.jpg?c=3",
      price: 67.93,
      stock: 22,
      featured: true,
      categoryId: 2,
    },
    {
      name: "Ballet knee leg warmers",
      description:
        "Protect your legs from the cold with these excellent quality and durable wool leg warmers.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/E8778-Burgundy_540x.jpg?v=1710341739",
      price: 22.0,
      stock: 35,
      featured: false,
      categoryId: 2,
    },
  ];
  await Product.bulkCreate(products);
  console.log("The seeder of products has been runned!");
}

module.exports = productSeeder;
