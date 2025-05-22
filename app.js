const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes/index");

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

app.use("/", routes);

const PORT = 4411;
app.listen(PORT, "localhost", () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
