// Import Express.js
const express = require("express");
//Import mongoose - object modeling tool
const mongoose = require("mongoose");
//Loads env variables like port, mongo_uri
//from a .env file into process.env
const dotenv = require("dotenv");
//Cors middleware - allows your frontend to
//communicate with the backend
const cors = require("cors");

//This reads the .env file and adds the
//variables into process.env
dotenv.config();
//Creates an instance of an express app
const app = express();

app.use(cors());

//helps your app parse JSON request bodies
//POST, PUT and PATCH
app.use(express.json());

//Test route
app.get("/", (req, res) => {
  res.send("Pizza Delivery App Backend Running");
});

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const pizzaRoutes = require("./routes/pizza");
app.use("/api/pizzas", pizzaRoutes);

//MongoDB Connection
// used to connect mongodb using the urI
// useNewURLParser: true - uses new mongoDB parser
// useUnifiedTopology: true - enables the
// new server discorvery and monitoring engine
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB Connection Failed", err));
