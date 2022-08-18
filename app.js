const express = require("express");
const app = express();
const env = require("dotenv");
const cors = require("cors");

env.config();

const allowedOrigins = [
  "https://fmgaportfolio.netlify.app",
  "http://localhost:4200",
];

const origin = function (origin, callback) {
  if (!origin) return callback(null, true);

  // if (allowedOrigins.indexOf(origin) === -1) {
  //   console.log(origin);
  //   const message = `This site ${origin} doesn't have a permission to access this site.`;
  //   return callback(new AppError(message, 403), false);
  // }
  return callback(null, true);
};

app.use(
  cors({
    origin,
    methods: ["POST", "PATCH", "PUT", "DELETE", "GET"],
  })
);
app.use(express.json());

app.get("/tester", (request, response) => {
  response.status(200).json({
    status: process.env.NODE_ENV,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`server is running at port ${process.env.PORT}`);
});

module.exports = app;
