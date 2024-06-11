const { Product } = require("../models");
async function productSeeder() {
  const products = [
    {
      name: "Zapatilla Bliss media punta",
      description:
        " Zapatilla unisex. La combinación perfecta de comodidad, elegancia y rendimiento con nuestras zapatillas de media punta. Diseñadas especialmente para bailarines de todos los niveles, son ideales tanto para clases como para ensayos y presentaciones.",
      photo:
        "https://www.sodanca.com/cdn/shop/products/SD16-light-pink-1-2_48090a13-806b-4bcf-8ad1-4aa3c2dd0184_1800x1800.jpg?v=1692997107",
      color: "rosa, negro, blanco, Arena,",
      price: 30.0,
      stock: 20,
      featured: false,
      categoryId: 1,
    },
    {
      name: "Zapatilla Bellamy media punta",
      description:
        "Nuestras nuevas medias zapatillas de lona elástica han sido diseñadas para moverse con velocidad y realizar giros sin esfuerzo. Nuestra tecnología abrazar el pie brinda una sensación de estar descalzo con protección metatarsiana que elimina fracturas, rasguños y raspaduras.",
      photo:
        "https://www.sodanca.com/cdn/shop/products/BA45-nude-1_540x.jpg?v=1647611997",
      color: "rosa, negro, blanco, Arena,",
      price: 23.0,
      stock: 20,
      featured: false,
      categoryId: 1,
    },
    {
      name: "Zapatilla Brio media punta",
      description:
        "Só Dança entiende que los bailarines son personas que tienen un pie derecho y un pie izquierdo. Entonces, ¿por qué no crear zapatillas de ballet específicas para cada pie? Hemos revolucionado el mundo del ballet con estas zapatillas de lona elástica con suela dividida y una única costura, que incluyen almohadillas más pequeñas para los dedos y el talón, facilitando una mejor conexión con el suelo.",
      photo:
        "https://www.sodanca.com/cdn/shop/products/SD120-light-pink-1-1_540x.jpg?v=1647611983",
      color: "rosa, negro, blanco, arena, marron ",
      price: 32.0,
      stock: 20,
      featured: false,
      categoryId: 1,
    },
    {
      name: "Zapatilla para hombre",
      description:
        "Zapatilla de lona con suela dividida, de ajuste ancho están diseñadas para el pie de los hombres con un empeine más alto y ancho para lo último en comodidad.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/BA26black-1_d1294b0d-fd2a-485c-baaa-3eb59bdf0983_540x.jpg?v=1697658027",
      color: "Blanco, beigen, negro",
      price: 35.0,
      stock: 20,
      featured: false,
      categoryId: 1,
    },
    {
      name: "Zapatilla Bali para hombre",
      description:
        "Mantiene el mismo ajuste y sensación increíbles. Con una parte superior de lona elástica suave que se adapta perfectamente al pie.",
      photo:
        "https://www.sodanca.com/cdn/shop/products/SD18-Black-Adult-Men_1800x1800.jpg?v=1662498429",
      color: "blanco, beigen, negro, gris,",
      price: 36.0,
      stock: 20,
      featured: false,
      categoryId: 1,
    },

    {
      name: "Zapatillas de punta Toshie",
      description:
        "Las zapatillas Toshie, que lleva el nombre de la fallecida profesora de ballet Toshie Kobayashi, es un hermoso zapato para dedos más largos y empeine alto.",
      photo:
        "https://www.sodanca.com/cdn/shop/products/SD40V-Lt.-Salmon_911aaa1e-51ea-4a11-a60e-9e01731f605a_720x.jpg?v=1650998469",
      color: "rosa, negro, blanco, rojo, marron",
      price: 116.0,
      stock: 20,
      featured: false,
      categoryId: 1,
    },
    {
      name: "Zapatilla elástica de punta",
      description:
        "El perfil bajo, brinda una apariencia excepcionalmente elegante y ofrece un gran soporte a través del largo empeine y las alas. El empeine genera una línea continua, este zapato te acompañará en todo, desde lo clásico hasta lo contemporáneo, ¡especialmente con las opciones de tonos carne para completar la línea de las piernas!",
      photo:
        "https://www.sodanca.com/cdn/shop/files/SD09-Sand_a6ce4519-0de4-4e0a-9488-b6b400a5075d_720x.jpg?v=1706637509",
      color: "gris, marron, arena",
      price: 126.0,
      stock: 20,
      featured: false,
      categoryId: 1,
    },
    {
      name: "Zapatilla de punta Alina",
      description:
        "Alina I es una zapatilla de punta que ofrece tecnología e innovación nunca antes vistas. Estas zapatillas de punta con empeine más cortas ofrecen durabilidad, equilibrio en punta, cañas prearqueadas y un cordón elástico lateral.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/P88-light-pink-1_1800x1800.jpg?v=1685107650",
      color: "rosa, marron, negro",
      price: 165.0,
      stock: 20,
      featured: false,
      categoryId: 1,
    },
    {
      name: "Zapatilla de punta Aurora",
      description:
        "Aurora fue diseñada para combatir un problema común; un metatarsiano más ancho con un talón estrecho. Con pies así, los bailarines suelen acabar con demasiada tela en el talón si sus metatarsianos se han ajustado correctamente. ¡No más! ¡Este es el zapato perfecto para el pie de una princesa!",
      photo:
        "https://www.sodanca.com/cdn/shop/files/SD34-Pink_720x.jpg?v=1694722055",
      color: "rosa, rojo, negro, marron, blanco",
      price: 180.0,
      stock: 20,
      featured: false,
      categoryId: 1,
    },
    {
      name: "Medias para hombre Jacob",
      description:
        "Las mallas Jacob se centran en brindar comodidad, flexibilidad y estilo en toda la pista de baile. Las propiedades de la microfibra garantizan que las medias permanezcan puestas sin importar la situación. Ponte y quítatelos con el diseño convertible.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/SL159-black1_720x.jpg?v=1694442687",
      color: "negro, gris",
      price: 57.0,
      stock: 20,
      featured: false,
      categoryId: 3,
    },
    {
      name: "Medias para hombre Beau",
      description:
        "Estas calzas en tono piel hasta el tobillo son suaves, duraderos y flexibles. ¡Se ofrecen en una variedad de tonos de piel y son perfectos para usar como delineadores corporales!",
      photo:
        "https://www.sodanca.com/cdn/shop/files/UG216-black-bottom_720x.jpg?v=1692910541",
      color: "negro, blanco, marron",
      price: 8.0,
      stock: 20,
      featured: false,
      categoryId: 3,
    },
    {
      name: "Medias para hombre ",
      description:
        "Con su comodidad, estilo y la cantidad justa de elasticidad, las mallas de ballet para hombre seguramente se convertirán en su nueva prenda de baile favorita. ¡Así que abraza al bailarín que llevas dentro y deja que estas mallas lleven tu actuación a nuevas alturas!",
      photo:
        "https://www.sodanca.com/cdn/shop/files/D-301_black_front_540x.jpg?v=1715104709",
      color: "negro",
      price: 20.0,
      stock: 20,
      featured: false,
      categoryId: 3,
    },
    {
      name: "Medias para hombre Soren",
      description:
        "Las medias que estabas buscando! Las medias Soren son livianas, suaves y duraderas y tienen una pieza de color en el costado para ayudar a crear líneas impresionantes en el estudio y en el escenario.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/RDE2486-platinum-white_540x.jpg?v=1712675245",
      color: "gris, negro",
      price: 80.0,
      stock: 20,
      featured: false,
      categoryId: 3,
    },
    {
      name: "Suspensor Maverik",
      description:
        "Este suspensor para hombre brinda sujeción y comodidad. Ofrece una una apariencia de no presentación.",
      photo:
        "https://www.sodanca.com/cdn/shop/products/UG220-light-beige-1_1800x1800.jpg?v=1654629722",
      color: "negro, beige",
      price: 32.0,
      stock: 20,
      featured: false,
      categoryId: 3,
    },
    {
      name: "Suspesor Leonardo",
      description:
        "Este suspensor brinda sujeción y es cómodo con un forro de malla en la línea de la pierna, se ofrece una apariencia de no presentación.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/UG219-black-1_720x.jpg?v=1709328191",
      color: "negro, beige, marron",
      price: 30.0,
      stock: 20,
      featured: false,
      categoryId: 3,
    },

    {
      name: "Camiseta para niño",
      description:
        "Esta camiseta suave y liviana abraza cada movimiento para brindar un rango de movimiento óptimo y comodidad diaria. El clásico cuello redondo se combina con el estilo en esta camisa de microfibra, lo que la convierte en un elemento básico para el guardarropa de cualquier niño.",
      photo:
        "https://www.sodanca.com/cdn/shop/products/SL112-black-1_1800x1800.jpg?v=1647612611",
      color: "blanco, negro",
      price: 34.0,
      stock: 20,
      featured: false,
      categoryId: 3,
    },
    {
      name: "Musculosa para hombre",
      description:
        "Este body liner es una camiseta sin mangas delgada con cuello alto y espalda alta. ¡Esta camisa es perfecta para usar en el escenario debajo de disfraces que necesitan más cobertura",
      photo:
        "https://www.sodanca.com/cdn/shop/files/UG215-black-1_540x.jpg?v=1709327397",
      color: "marron, negro",
      price: 36.0,
      stock: 20,
      featured: false,
      categoryId: 3,
    },
    {
      name: "Camiseta para hombre",
      description:
        "Esta camiseta suave y liviana abraza cada movimiento para brindar un rango de movimiento óptimo y comodidad diaria. El clásico cuello redondo se combina con el estilo en esta camisa de microfibra, lo que la convierte en un elemento básico para el día a día.",
      photo:
        "https://www.sodanca.com/cdn/shop/products/SL111-white-1_720x.jpg?v=1647612612",
      color: "blanco, negro",
      price: 41.0,
      stock: 20,
      featured: false,
      categoryId: 3,
    },
    {
      name: "Camiseta sin mangas para hombre",
      description:
        "Esta camiseta sin mangas, suave y liviana, abraza cada movimiento para brindar un rango de movimiento óptimo y comodidad diaria. Un básico para el guardarropa de cualquier chico.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/D-300_black_540x.jpg?v=1715104314",
      color: "blanco, negro",
      price: 12.0,
      stock: 20,
      featured: false,
      categoryId: 3,
    },
  ];
  await Product.bulkCreate(products);
  console.log("The seeder of products has been runned!");
}

module.exports = productSeeder;
