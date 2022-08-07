const express = require("express");
const app = express();
const connection = require("./db");
const user = require("./routes/user");
connection();

app.use(express.json());
app.use(require("./routes/user"), user);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));


module.exports =app;
