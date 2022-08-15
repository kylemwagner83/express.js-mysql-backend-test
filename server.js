const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// Parse json requests
app.use(express.json());

// Parse urlencoded requests
app.use(express.urlencoded({ extended: true}))

// Basic route
app.get("/", (req,res) => {
    res.json({message: "Connected to API!"})
});

// Set port and listen for requests
const PORT = process.env.PORT || 8080;
require("./app/routes/tutorial.routes.js")(app);
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});
