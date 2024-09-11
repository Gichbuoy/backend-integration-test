const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./src/db/sequelize');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api', userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
