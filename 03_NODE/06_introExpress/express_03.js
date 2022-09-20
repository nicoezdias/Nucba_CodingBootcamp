import express from 'express';

const app = express();

app.use(express.static('public'));

/* ------------------------------- OTRAS RUTAS ------------------------------ */

/* --------------------------- FIN DE OTRAS RUTAS --------------------------- */
app.all('/*');

app.listen(3000, () => {
  console.log('Server runnig in port 3000');
});
