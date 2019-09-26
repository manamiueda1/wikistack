const express = require('express');
const app = express()
const main = require("./views/main");
const models = require('./models');


app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use('/wiki', require('./routes/wiki'))
app.use('/user', require('./routes/user'))

app.get('/', (req, res) => {
    res.redirect('/wiki')
});

//   User.sync()
//   Page.sync()




const init = async () => {
    // await models..sync({force: true})
    await models.db.sync({force: true})
console.log('database succeeded!>>>>>>>>>>>>>>>>>>>')

    let PORT = 3001;
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}!`)
    })
}
init();

