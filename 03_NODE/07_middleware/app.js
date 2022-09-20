import express from 'express';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ----------------------------- Mis middleware ----------------------------- */
const fn = (req, res, next) => {
  console.log('Run middleware');
  next();
};
const onlyAbout = (req, res, next) => {
  console.log('Run middleware About');
  next();
};
/* -------------------------------------------------------------------------- */

app.use(fn);

app.get('/', (req, res) => {
  res.json('Home');
});

//app.use('/about', onlyAbout);
app.get('/about', onlyAbout, (req, res) => {
  res.json({ message: `Hola desde about ` });
});

app.post('/about', (req, res) => {
  let { name } = req.body;
  res.json({ message: `Este es el body ${name}` });
});

// Query String
app.get('/user', onlyAbout, (req, res) => {
  res.json(req.query);
});

// Query Param
app.get('/user/:id', onlyAbout, (req, res) => {
  res.json({ message: `User id: ${req.params.id} ` });
});

app.listen(4000, () => {
  console.log('Server runnig in port 4000');
});
