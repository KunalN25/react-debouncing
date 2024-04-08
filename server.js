const express = require("express");
const cors = require("cors");
const data = require("./data.json");

const app = express();
app.use(cors());

app.get("/data/:value", (req, res) => {
  const searchTerm = req.params.value.toLowerCase();
  const filteredData = data.filter((item) =>
    item.city.toLowerCase().includes(searchTerm)
  );
  res.json(filteredData);
});

app.listen(8000, () => {
  console.log("App listening on port 8000");
});
