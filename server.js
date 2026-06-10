const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");

const requestRoutes =
require("./routes/requestRoutes");

const authRoutes =
require("./routes/authRoutes");

const donationRoutes =
require("./routes/donationRoutes");

const app = express();

app.use(cors());

app.use(
bodyParser.json()
);

app.use(
"/uploads",
express.static(
"uploads"
)
);

app.use(
"/api",
requestRoutes
);

app.use(
"/api",
authRoutes
);

app.use(
"/api",
donationRoutes
);

const PORT =
process.env.PORT || 5000;

app.listen(
PORT,
() => {

console.log(
`Server Running on Port ${PORT}`
);

});