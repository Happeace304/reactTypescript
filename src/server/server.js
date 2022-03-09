const express = require('express');
const bodyParser = require("body-parser");
const uniqid = require("uniqid");

const app = express();
const port = 5000;
const mockData = [{
  id: uniqid(),
  name: 'nhat',
  password: 'xxxxxx',
  isMarried: false,
  gender: 'male',
  biography: 'stoic',
}];
app.use(bodyParser.json());

app.get('/api/data', (req, res)=> {
  res.send(mockData)
})
app.get('/api/data/:id', (req, res)=> {
  const data = mockData.find(el=> el.id === req.params.id);

  res.send(data)
})
app.post('/api/data', (req, res)=> {
    const newData= {...req.body, id: uniqid()};
    mockData.push(newData);

  res.send(mockData)
})
app.put('/api/data', (req, res)=> {
  let data = mockData.find(el=>el.id === req.body.id);

  data.password = req.body.password;
  data.gender = req.body.gender;
  data.biography = req.body.biography;
  data.name = req.body.name;
  data.isMarried = req.body.isMarried;

  res.send(mockData)
})
app.listen(port, ()=> {
  console.log(`Server is listening on port ${port}`)
});


