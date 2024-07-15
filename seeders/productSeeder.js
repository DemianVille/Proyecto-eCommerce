const { Product } = require("../models");
async function productSeeder() {
  const products = [
    {
      name: "Zapatilla Bliss media punta",
      description:
        " Zapatilla unisex. La combinación perfecta de comodidad, elegancia y rendimiento con nuestras zapatillas de media punta. Diseñadas especialmente para bailarines de todos los niveles, son ideales tanto para clases como para ensayos y presentaciones.",
      photo:
        "https://www.sodanca.com/cdn/shop/products/SD16-light-pink-1-2_48090a13-806b-4bcf-8ad1-4aa3c2dd0184_1800x1800.jpg?v=1692997107",
      colors: {
        colors: ["Rosa", "Negro", "Blanco", "Crema"],
      },
      price: 30,
      stock: 376,
      featured: false,
      categoryId: 1,
    },
    {
      name: "Zapatilla Bellamy media punta",
      description:
        "Nuestras nuevas medias zapatillas de lona elástica han sido diseñadas para moverse con velocidad y realizar giros sin esfuerzo. Nuestra tecnología abrazar el pie brinda una sensación de estar descalzo con protección metatarsiana que elimina fracturas, rasguños y raspaduras.",
      photo:
        "https://www.sodanca.com/cdn/shop/products/BA45-nude-1_540x.jpg?v=1647611997",
      colors: {
        colors: ["Rosa", "Negro", "Blanco", "Crema"],
      },
      price: 23,
      stock: 270,
      featured: false,
      categoryId: 1,
    },
    {
      name: "Zapatilla Brio media punta",
      description:
        "Só Dança entiende que los bailarines son personas que tienen un pie derecho y un pie izquierdo. Entonces, ¿por qué no crear zapatillas de ballet específicas para cada pie? Hemos revolucionado el mundo del ballet con estas zapatillas de lona elástica con suela dividida y una única costura, que incluyen almohadillas más pequeñas para los dedos y el talón, facilitando una mejor conexión con el suelo.",
      photo:
        "https://www.sodanca.com/cdn/shop/products/SD120-light-pink-1-1_540x.jpg?v=1647611983",
      colors: {
        colors: ["Rosa", "Negro", "Blanco", "Crema", "Marrón"],
      },
      price: 32,
      stock: 321,
      featured: false,
      categoryId: 1,
    },
    {
      name: "Zapatilla para hombre",
      description:
        "Zapatilla de lona con suela dividida, de ajuste ancho están diseñadas para el pie de los hombres con un empeine más alto y ancho para lo último en comodidad.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/BA26black-1_d1294b0d-fd2a-485c-baaa-3eb59bdf0983_540x.jpg?v=1697658027",
      colors: {
        colors: ["Blanco", "Beige", "Negro"],
      },
      price: 35,
      stock: 285,
      featured: false,
      categoryId: 1,
    },
    {
      name: "Zapatilla Bali para hombre",
      description:
        "Mantiene el mismo ajuste y sensación increíbles. Con una parte superior de lona elástica suave que se adapta perfectamente al pie.",
      photo:
        "https://www.sodanca.com/cdn/shop/products/SD18-Black-Adult-Men_1800x1800.jpg?v=1662498429",
      colors: {
        colors: ["Blanco", "Beige", "Negro", "Gris"],
      },
      price: 36,
      stock: 316,
      featured: false,
      categoryId: 1,
    },
    {
      name: "Zapatillas de punta Toshie",
      description:
        "Las zapatillas Toshie, que lleva el nombre de la fallecida profesora de ballet Toshie Kobayashi, es un hermoso zapato para dedos más largos y empeine alto.",
      photo:
        "https://www.sodanca.com/cdn/shop/products/SD40V-Lt.-Salmon_911aaa1e-51ea-4a11-a60e-9e01731f605a_720x.jpg?v=1650998469",
      colors: {
        colors: ["Rosa", "Negro", "Blanco", "Rojo", "Marrón"],
      },
      price: 116,
      stock: 250,
      featured: false,
      categoryId: 1,
    },
    {
      name: "Zapatilla elástica de punta",
      description:
        "El perfil bajo, brinda una apariencia excepcionalmente elegante y ofrece un gran soporte a través del largo empeine y las alas. El empeine genera una línea continua, este zapato te acompañará en todo, desde lo clásico hasta lo contemporáneo, ¡especialmente con las opciones de tonos carne para completar la línea de las piernas!",
      photo:
        "https://www.sodanca.com/cdn/shop/files/SD09-Sand_a6ce4519-0de4-4e0a-9488-b6b400a5075d_720x.jpg?v=1706637509",
      colors: {
        colors: ["Gris", "Marrón", "Crema"],
      },
      price: 126,
      stock: 340,
      featured: false,
      categoryId: 1,
    },
    {
      name: "Zapatilla de punta Alina",
      description:
        "Alina I es una zapatilla de punta que ofrece tecnología e innovación nunca antes vistas. Estas zapatillas de punta con empeine más cortas ofrecen durabilidad, equilibrio en punta, cañas prearqueadas y un cordón elástico lateral.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/P88-light-pink-1_1800x1800.jpg?v=1685107650",
      colors: {
        colors: ["Rosa", "Marrón", "Negro"],
      },
      price: 165,
      stock: 183,
      featured: false,
      categoryId: 1,
    },
    {
      name: "Zapatilla de punta Aurora",
      description:
        "Aurora fue diseñada para combatir un problema común; un metatarsiano más ancho con un talón estrecho. Con pies así, los bailarines suelen acabar con demasiada tela en el talón si sus metatarsianos se han ajustado correctamente. ¡No más! ¡Este es el zapato perfecto para el pie de una princesa!",
      photo:
        "https://www.sodanca.com/cdn/shop/files/SD34-Pink_720x.jpg?v=1694722055",
      colors: {
        colors: ["Rosa", "Rojo", "Negro", "Marrón", "Blanco"],
      },
      price: 180,
      stock: 364,
      featured: false,
      categoryId: 1,
    },
    {
      name: "Botas Wesley de calentamiento",
      description:
        "Nuestros NUEVOS botines de calentamiento Wesley ofrecen máximo soporte y comodidad, para que tengas todo lo que necesitas para calentar con confianza. A las personas que les gusta bailar y son muy activas les encanta este botín cómodo, calentito y bien diseñado.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/BT40-lilac-1_720x.jpg?v=1705005719",
      colors: {
        colors: ["Beige", "Negro", "Rosa", "Azul"],
      },
      price: 45,
      stock: 325,
      featured: false,
      categoryId: 1,
    },
    {
      name: "Botas Winn de calentamiento",
      description:
        "Este botín de edición limitada cuenta con una suela de EVA para acompañarte durante todo el calentamiento y enfriamiento. Mantendrán tus pies calientes sin necesidad de quitarte las zapatillas de ballet. Este botín se puede usar tanto en interiores como en exteriores. ¡Están en la lista de deseos de todo bailarín!",
      photo:
        "https://www.sodanca.com/cdn/shop/products/1gfHULZq5-qTTHYu3CJNe_whmamgSGvCW_1800x1800.jpg?v=1690374196",
      colors: { colors: ["Verde"] },
      price: 50,
      stock: 420,
      featured: false,
      categoryId: 1,
    },
    {
      name: "Botas Nube de calentamiento",
      description:
        "Estos botines de nailon soportan el uso tanto en interiores como en exteriores con su parte superior resistente al agua. ¿Necesitas entrar y salir corriendo del estudio? ¡Ningún problema! Protege tus zapatillas de ballet sin problemas. Estos botines te harán sentir cómoda y acogedora.",
      photo:
        "https://www.sodanca.com/cdn/shop/products/BT20-light-lilac-light-pink-1_540x.jpg?v=1647612191",
      colors: {
        colors: ["Negro", "Rosa", "Violeta"],
      },
      price: 45,
      stock: 411,
      featured: false,
      categoryId: 1,
    },
    {
      name: "Malla Jenna",
      description:
        "Las delicadas mangas japonesas ofrecen un toque de elegancia vintage, mientras que los detalles de malla de puntos añaden un toque moderno que seguramente llamará la atención. Es como usar una obra de arte, con cada punto y panel de malla creando un patrón que es cautivador como cada uno de tus movimientos.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/RDE2069-black-1_1_720x.jpg?v=1716320716",
      colors: { colors: ["Negro"] },
      price: 48,
      stock: 352,
      featured: false,
      categoryId: 2,
    },
    {
      name: "Malla Miley",
      description:
        "Nuestra malla Miley con costuras Princess con forro de estantes para adultos con curvas está diseñado para brindar estilo y soporte a bailarinas de todos los tamaños. El diseño con costura princesa acentúa tus líneas, mientras que el estilo camisola ofrece una apariencia clásica y atemporal. El revestimiento del estante brinda mayor soporte y cobertura, lo que garantiza un ajuste seguro y cómodo. Este leo es duradero y elástico, lo que permite una gama completa de movimiento.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/SL192-burgundy-2_360x.jpg?v=1706040091",
      colors: {
        colors: ["Negro", "Rojo", "Rosa", "Blanco"],
      },
      price: 42,
      stock: 348,
      featured: false,
      categoryId: 2,
    },
    {
      name: "Malla Inés",
      description:
        "El diseño de manga japonesa añade un toque de elegancia y sofisticación, mientras que el diseño con costura princesa acentúa tus líneas. El revestimiento del estante brinda mayor soporte y cobertura, lo que garantiza un ajuste seguro y cómodo. Hecho de material de alta calidad, este leo es duradero y elástico, lo que permite una gama completa de movimiento.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/SL194-black-1_5d0c788c-089d-4d52-8765-489511d6d6b0_540x.jpg?v=1706116392",
      colors: {
        colors: ["Negro", "Rojo", "Blanco"],
      },
      price: 59,
      stock: 237,
      featured: false,
      categoryId: 2,
    },
    {
      name: "Malla Kristen",
      description:
        "Cuello barco y forro para adultos con espalda baja, diseñado para brindar estilo y funcionalidad a bailarines de todos los niveles. El diseño de cuello barco añade un toque de elegancia y sofisticación, mientras que la espalda baja proporciona transpirabilidad y flexibilidad durante tu práctica o actuación de baile.  Ya seas principiante o bailarina profesional, esta malla seguramente se convertirá en un elemento básico en tu guardarropa de danza.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/SL201-black-1_720x.jpg?v=1710877842",
      colors: {
        colors: ["Negro", "Azul", "Verde", "Fucsia", "Blanco", "Rosa"],
      },
      price: 38,
      stock: 298,
      featured: false,
      categoryId: 2,
    },
    {
      name: "Malla Gelsey",
      description:
        "Elegante malla con tirantes finos y fruncido. Es una de las favoritas para usar durante la clase de ballet. No solo es cómodo y fácil de mover, sino que también tiene un escote muy favorecedor que agrega un poco de extra a un leotardo básico.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/TPE-20-Mulberry-2_360x.jpg?v=1715177970",
      colors: {
        colors: ["Rosa", "Verde"],
      },
      price: 55,
      stock: 370,
      featured: false,
      categoryId: 2,
    },
    {
      name: "Malla Sofía",
      description:
        "Es la combinación perfecta de moda y vanguardismo, y realmente te diferencia de otros bailarines en el estudio. El diseño con cuello halter brinda excelente soporte y cobertura, mientras que el Los recortes laterales añaden un detalle único y llamativo. Además, el forro del estante garantiza que me sienta segura en clase y en el ensayo.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/TPE-24-Black-1_540x.jpg?v=1683059332",
      colors: { colors: ["Negro"] },
      price: 55,
      stock: 332,
      featured: false,
      categoryId: 2,
    },
    {
      name: "Pollerín Ankara",
      description:
        "Un dobladillo ligeramente más largo en la parte posterior brinda un diseño alto y bajo para fluir sin miedo con tus movimientos. Entrelazado con lazos de grosgrain para máxima flexibilidad y comodidad.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/SL60-Black_720x.png?v=1682955715",
      colors: {
        colors: ["Negro", "Azul", "Rosa", "Blanco"],
      },
      price: 19,
      stock: 353,
      featured: false,
      categoryId: 2,
    },
    {
      name: "Pollerín Lois",
      description:
        "Una falda circular brillante y transparente es imprescindible en el guardarropa de cualquier bailarina. El material de microfibra crepé permite ponerse la falda rápidamente y se adapta a cualquier cambio de guardarropa.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/SL93-White1_720x.png?v=1683061924",
      colors: {
        colors: ["Blanco", "Rosa", "Rojo", "Azul", "Negro"],
      },
      price: 20,
      stock: 282,
      featured: false,
      categoryId: 2,
    },
    {
      name: "Pollerín Evelyn",
      description:
        "Esta falda cruzada de microfibra crepé es simplemente hermosa. Está diseñado para fluir con su movimiento y puede envolverse a lo largo de su cintura o cadera.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/RDE2596_1800x1800.jpg?v=1694188895",
      colors: {
        colors: ["Negro", "Rojo", "Rosa"],
      },
      price: 31,
      stock: 291,
      featured: false,
      categoryId: 2,
    },
    {
      name: "Pollerín Pulina",
      description:
        "Esta falda de ballet sin cordones es como un susurro de elegancia, lista para transformar tu conjunto de baile de simple a sublime con solo un rápido movimiento de colocación. No es sólo una falda; añade gracia y encanto a cada movimiento.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/SL216-light-gray-1_540x.jpg?v=1707766745",
      colors: {
        colors: [
          "Negro",
          "Blanco",
          "Gris",
          "Rosa",
          "Rojo",
          "Celeste",
          "Violeta",
          "Verde",
          "Azul",
        ],
      },
      price: 20,
      stock: 358,
      featured: false,
      categoryId: 2,
    },
    {
      name: "Malla Amapola",
      description:
        "Una prenda tan elegante como un vals y súmamente vibrante. Mientras giras y saltas en esta obra maestra floral te acompañará en cada movimiento.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/RDE1726-SB526_540x.jpg?v=1695936142",
      colors: { colors: ["Rosa"] },
      price: 25,
      stock: 299,
      featured: false,
      categoryId: 2,
    },
    {
      name: "Medias para adulta",
      description:
        "Estas medias con pie para adultos de alta calidad son justo lo que necesitas para lograr el aspecto clásico, favorecedor y sin costuras de tus medias favoritas. ¡Muchas opciones de colores que pueden adaptarse a todas tus necesidades y estilos para ayudarte a alcanzar tu máximo rendimiento!",
      photo:
        "https://www.sodanca.com/cdn/shop/files/TS74-BALLET-PINK_1800x1800.jpg?v=1692892213",
      color: { colors: ["Negro", "Rosa", "Blanco"] },
      price: 15,
      stock: 249,
      featured: false,
      categoryId: 2,
    },
    {
      name: "Medias de rejilla",
      description:
        "Estas medias de rejilla para adultos de alta calidad son justo lo que necesitas para añadir un poco de sabor a tu vestuario de danza. ¡Estas mallas fueron creadas para ayudarte a rendir al máximo en cualquier estilo que desees! ",
      photo:
        "https://www.sodanca.com/cdn/shop/files/TS98-SUNTAN_540x.jpg?v=1692891136",
      colors: { colors: ["Marrón", "Negro"] },
      price: 35,
      stock: 218,
      featured: false,
      categoryId: 2,
    },
    {
      name: "Medias sin pies",
      description:
        "Estas medias sin pies para adultos de alta calidad son justo lo que necesitas para un look clásico, sin costuras y favorecedor en cualquier clase o actuación. ¡Muchas opciones de colores que pueden satisfacer todas tus necesidades para ayudarte a estar al máximo en cualquier esfuerzo!",
      photo:
        "https://www.sodanca.com/cdn/shop/files/TS70-BLACK_540x.jpg?v=1692893149",
      colors: { colors: ["Marrón", "Negro"] },
      price: 15,
      stock: 344,
      featured: false,
      categoryId: 2,
    },
    {
      name: "Calentadores Babel",
      description:
        "La tela acrílica llega hasta las rodillas y se mantiene en su lugar de manera experta con estribos. Con abertura para el talón",
      photo:
        "https://www.sodanca.com/cdn/shop/files/E8778-Black_1800x1800.jpg?v=1715886212",
      colors: { colors: ["Negro", "Rosa", "Amarillo", "Gris"] },
      price: 22,
      stock: 257,
      featured: false,
      categoryId: 2,
    },
    {
      name: "Calentadores Cristal",
      description:
        "Un estilo espléndido es lo que tendrás. La tela acrílica llega hasta los muslos y se mantiene en su lugar de manera experta con estribos. La parte superior tiene elasticidad, por lo que se mantiene ceñida a los muslos sin apretar demasiado. Son perfectas para ¡Mantener las piernas calientes durante la clase o entre ensayos!",
      photo:
        "https://www.sodanca.com/cdn/shop/files/E8776-charcoal_1800x1800.jpg?v=1706816863",
      colors: { colors: ["Gris", "Negro", "Rosa", "Fucsia"] },
      price: 23,
      stock: 324,
      featured: false,
      categoryId: 2,
    },
    {
      name: "Body de calentamiento",
      description:
        "Body paracalentamiento, tela abrigada con tecnología para el sudor.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/RDE2242-sky-blue-dark-pink-purple_540x.jpg?v=1704231529",
      colors: { colors: ["Azul", "Rosa"] },
      price: 46,
      stock: 330,
      featured: false,
      categoryId: 2,
    },
    {
      name: "Pantalón de calentamiento de lana",
      description:
        "¿Alguna vez has conocido pantalones deportivos que no te gustaron? Estos pantalones deportivos Dia son tan cómodos como elegantes; es posible que tengas que comprar un par de todos los colores.",
      photo:
        "https://www.sodanca.com/cdn/shop/products/RDE-2248_SD-1656_1800x1800.jpg?v=1701280756",
      colors: { colors: ["Azul", "Rosa"] },
      price: 38,
      stock: 222,
      featured: false,
      categoryId: 2,
    },
    {
      name: "Pantalón de calentamiento",
      description:
        "Estos son realmente los pantalones de tus sueños. Son unos pantalones 'basura bag' con un precioso floral monocromático por un lado y monocolor por el otro.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/L2591-shamrock-1_1800x1800.jpg?v=1698427173",
      colors: { colors: ["Verde"] },
      price: 22,
      stock: 227,
      featured: false,
      categoryId: 2,
    },
    {
      name: "Malla de cuerpo completo",
      description:
        "Las mallas de ballet cubren todo el cuerpo, listas para transformar cada uno de tus movimientos. ",
      photo:
        "https://www.sodanca.com/cdn/shop/files/TA25-Eur-Pink_540x.jpg?v=1715974560",
      colors: { colors: ["Beige", "Negro", "Marrón", "Blanco"] },
      price: 8,
      stock: 303,
      featured: false,
      categoryId: 2,
    },
    {
      name: "Medias para hombre Jacob",
      description:
        "Las mallas Jacob se centran en brindar comodidad, flexibilidad y estilo en toda la pista de baile. Las propiedades de la microfibra garantizan que las medias permanezcan puestas sin importar la situación. Ponte y quítatelos con el diseño convertible.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/SL159-black1_720x.jpg?v=1694442687",
      colors: { colors: ["Negro", "Gris"] },
      price: 57.0,
      stock: 208,
      featured: false,
      categoryId: 3,
    },
    {
      name: "Medias para hombre Beau",
      description:
        "Estas calzas en tono piel hasta el tobillo son suaves, duraderos y flexibles. ¡Se ofrecen en una variedad de tonos de piel y son perfectos para usar como delineadores corporales!",
      photo:
        "https://www.sodanca.com/cdn/shop/files/UG216-black-bottom_720x.jpg?v=1692910541",
      colors: { colors: ["Blanco", "Negro", "Marrón"] },
      price: 40.0,
      stock: 312,
      featured: false,
      categoryId: 3,
    },
    {
      name: "Medias para hombre ",
      description:
        "Con su comodidad, estilo y la cantidad justa de elasticidad, las mallas de ballet para hombre seguramente se convertirán en su nueva prenda de baile favorita. ¡Así que abraza al bailarín que llevas dentro y deja que estas mallas lleven tu actuación a nuevas alturas!",
      photo:
        "https://www.sodanca.com/cdn/shop/files/D-301_black_front_540x.jpg?v=1715104709",
      colors: { colors: ["Negro"] },
      price: 20.0,
      stock: 306,
      featured: false,
      categoryId: 3,
    },
    {
      name: "Medias para hombre Soren",
      description:
        "Las medias que estabas buscando! Las medias Soren son livianas, suaves y duraderas y tienen una pieza de color en el costado para ayudar a crear líneas impresionantes en el estudio y en el escenario.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/RDE2486-platinum-white_540x.jpg?v=1712675245",
      colors: { colors: ["Gris", "Negro"] },
      price: 80.0,
      stock: 279,
      featured: false,
      categoryId: 3,
    },
    {
      name: "Suspensor Maverik",
      description:
        "Este suspensor para hombre brinda sujeción y comodidad. Ofrece una una apariencia de no presentación.",
      photo:
        "https://www.sodanca.com/cdn/shop/products/UG220-light-beige-1_1800x1800.jpg?v=1654629722",
      colors: { colors: ["Beige", "Negro"] },
      price: 32.0,
      stock: 265,
      featured: false,
      categoryId: 3,
    },
    {
      name: "Suspesor Leonardo",
      description:
        "Este suspensor brinda sujeción y es cómodo con un forro de malla en la línea de la pierna, se ofrece una apariencia de no presentación.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/UG219-black-1_720x.jpg?v=1709328191",
      colors: { colors: ["Beige", "Negro", "Marrón"] },
      price: 30.0,
      stock: 288,
      featured: false,
      categoryId: 3,
    },

    {
      name: "Camiseta para niño",
      description:
        "Esta camiseta suave y liviana abraza cada movimiento para brindar un rango de movimiento óptimo y comodidad diaria. El clásico cuello redondo se combina con el estilo en esta camisa de microfibra, lo que la convierte en un elemento básico para el guardarropa de cualquier niño.",
      photo:
        "https://www.sodanca.com/cdn/shop/products/SL112-black-1_1800x1800.jpg?v=1647612611",
      colors: { colors: ["Blanco", "Negro"] },
      price: 34.0,
      stock: 311,
      featured: false,
      categoryId: 3,
    },
    {
      name: "Musculosa para hombre",
      description:
        "Este body liner es una camiseta sin mangas delgada con cuello alto y espalda alta. ¡Esta camisa es perfecta para usar en el escenario debajo de disfraces que necesitan más cobertura",
      photo:
        "https://www.sodanca.com/cdn/shop/files/UG215-black-1_540x.jpg?v=1709327397",
      colors: { colors: ["Marrón", "Negro"] },
      price: 36.0,
      stock: 401,
      featured: false,
      categoryId: 3,
    },
    {
      name: "Camiseta para hombre",
      description:
        "Esta camiseta suave y liviana abraza cada movimiento para brindar un rango de movimiento óptimo y comodidad diaria. El clásico cuello redondo se combina con el estilo en esta camisa de microfibra, lo que la convierte en un elemento básico para el día a día.",
      photo:
        "https://www.sodanca.com/cdn/shop/products/SL111-white-1_720x.jpg?v=1647612612",
      colors: { colors: ["Blanco", "Negro"] },
      price: 41.0,
      stock: 234,
      featured: false,
      categoryId: 3,
    },
    {
      name: "Camiseta sin mangas para hombre",
      description:
        "Esta camiseta sin mangas, suave y liviana, abraza cada movimiento para brindar un rango de movimiento óptimo y comodidad diaria. Un básico para el guardarropa de cualquier chico.",
      photo:
        "https://www.sodanca.com/cdn/shop/files/D-300_black_540x.jpg?v=1715104314",
      colors: { colors: ["Blanco", "Negro"] },
      price: 12.0,
      stock: 300,
      featured: false,
      categoryId: 3,
    },
  ];
  await Product.bulkCreate(products);
  console.log("The seeder of products has been runned!");
}

module.exports = productSeeder;
