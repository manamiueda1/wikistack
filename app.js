const express = require('express');
const app = express()
const main = require("./views/main");
const models = require('./models');


const init = async () => {
    await models.User.sync({force: true})
    await models.Page.sync({force: true})

    let PORT = 3001;
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}!`)
    })
}
init();


//   User.sync()
//   Page.sync()

app.listen(3000, () => {
    console.log('listening to port')
})




