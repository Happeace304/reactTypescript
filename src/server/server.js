const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = 5000;
const mockData = {
  name: 'nhat',
  password: 'xxxxxx',
  isMarried: false,
  gender: 'male',
  biography: 'stoic',
};
app.use(bodyParser.json());

app.get('/api/data', (req, res)=> {
  res.send(mockData)
})

app.listen(port, ()=> {
  console.log(`Server is listening on port ${port}`)
});


