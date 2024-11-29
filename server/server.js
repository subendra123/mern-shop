const mongoose = require("mongoose");
const express = require("express");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");

const app = express();


mongoose.connect("mongodb://localhost:27017/mernshop").then(() => console.log("Database is Connected")
).catch((error) => console.log(error));

// const app = express();node
const PORT = process.env.PORT || 6000;



app.listen(PORT, () => console.log(`server is running now port ${PORT}`))




