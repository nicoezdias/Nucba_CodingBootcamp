import express from 'express';

import contactsRouter from './routes/contacts.routes.js';

const app = express();

/* ---------------------------- Global middleware --------------------------- */
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* --------------------------------- Routes --------------------------------- */
app.use('/api/contacts', contactsRouter);

app.listen(4000, () => {
  console.log('Server runnig in port 4000');
});
