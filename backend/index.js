const express = require("express");
const port = process.env.PORT || 4444;
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
const exerciseRoutes = require("./routes/exerciseRoutes");

// middleware
app.use(express.json());
app.use(cors());
app.use("/api/exercises", exerciseRoutes);

// establish connections
mongoose.connect(
  process.env.mongoURI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("...connected to mongoDB")
);

app.listen(port, console.log(`Server running on http://localhost:${port}`));
