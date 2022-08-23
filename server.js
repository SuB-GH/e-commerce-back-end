const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// below is the "sync method". by changing "false" to "true", database connection must sync with the model definitions and associations. By forcing the sync method to true, we will make the tables re-create if there are any association changes. Similar to "DROP TABLE IF EXISTS"
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


