const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const enquire = require('./enquire/enquire')

app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true,
}));

app.use(bodyParser.json());

app.post("/", function (req, res) {
  const newForm = req.body;
  newForm.createdAt = new Date();
  enquire.addForm(newForm).then(data => {
    res.json(data);
  })
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});