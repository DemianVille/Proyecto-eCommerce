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

const corsOptions = {
  origin: ["https://copellia.vercel.app", "https://copellia-admin.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.options("*", cors(corsOptions));
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api", routes);

app.listen(port, () =>
  console.log(`Server running in http://${process.env.APP_DOMAIN}.\n`)
);

module.exports = app;
