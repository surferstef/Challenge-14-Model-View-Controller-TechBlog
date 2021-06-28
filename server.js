const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const routes = require('./controllers/');

//const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3001;


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, function() {
        console.log('App listening on PORT ' + PORT);
    });
});