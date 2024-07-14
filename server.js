/* 
Miembros del grupo.
Anthony Piñeyro, Demian Brinville, Sofia Rovati, Alhena Latorre, Franco Rodriguez
 */
const cors = require("cors");
require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes");
const port = process.env.PORT || process.env.APP_PORT;

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(port, () =>
  console.log(`Server running in http://${process.env.APP_DOMAIN}.\n`)
);
