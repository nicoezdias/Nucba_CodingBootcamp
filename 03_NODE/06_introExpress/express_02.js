import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

let contacts = {
  user1: {
    firstName: 'Facu',
    lastName: 'Diaz',
    phoneNumber: '123456',
  },
  user2: {
    firstName: 'Nico',
    lastName: 'Dias',
    phoneNumber: '123456',
  },
  user3: {
    firstName: 'Juanito',
    lastName: 'Ponch',
    phoneNumber: '123456',
  },
};

app.get('/', (req, res) => {
  res.send(` <html>
    <head><title>Hola Express</title></head>
    <body>
        <h1>Hola Express</h1>
        <a href="about">Go about</a>
        <a href="data">get data</a>
    </body>
</html>`);
});

app.get('/about', (req, res) => {
  res.send(` <html>
      <head><title>Hola Express About</title></head>
      <body>
          <h1>Hola About</h1>
          <a href="/">Go Home</a>
      </body>
  </html>`);
});

app.get('/data', (req, res) => {
  res.json(contacts);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server runnig in port ${PORT}`);
});
