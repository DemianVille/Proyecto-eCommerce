/* 
Miembros del grupo.
Anthony Piñeyro, Demian Brinville, Sofia Rovati, Alhena Latorre, Franco Rodriguez
 */
require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes");
const port = process.env.APP_PORT;

app.use(express.json());
app.use(routes);

app.listen(port, () =>
  console.log(`Server running in http://${process.env.APP_DOMAIN}.\n`)
);
