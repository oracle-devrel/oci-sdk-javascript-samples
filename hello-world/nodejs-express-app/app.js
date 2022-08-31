const express = require('express');

const listInstances = require('./list-instances');
const startInstance = require('./start-instance');
const stopInstance = require('./stop-instance');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instances', listInstances);

//Note: Start and Stop requests are marked as GET in this example to execute this from Browser.
//      In real time, we should use actual recommended HTTP method.

app.get('/instance/start', startInstance);
app.get('/instance/stop', stopInstance);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})