import { connect } from 'mqtt'
import express, { json } from 'express'

const app = express();
app.use(json());

/**
 * creating connection with mosquitto brocker
 */
const client = connect('mqtt://test.mosquitto.org');

/**
 * Create connection
 */
client.on('connect', () => {
  console.log("In here:");
});

app.post('/v1/send-message', (req, res)=> {
  const { message } = req.body;

  client.publish('prec', message);

  return res.send('ok');

});

/**
 * publishing message
 * publish method took two parameter (topic, meesage)
 */
  // setInterval(()=> {
  //   client.publish('prec', 'Hello mqtt');
  // }, 2000);

app.listen(4000, ()=> console.log('App running at PORT:4000'));
