import { connect } from 'mqtt'
import express from 'express'

const app = express();

// const client = connect('mqtt://test.mosquitto.org');
const client = connect('mqtt://localhost:1883');

client.on('connect', () => {
  client.subscribe('prec');
});

client.on('message', (topic, message) => {
  // message is Buffer
  console.log(JSON.parse(message.toString()));
  client.end();
});

app.listen(4001, ()=> console.log('App running at PORt:4001'))