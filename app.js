const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('nhello')
})

app.listen(4000, () => {
    console.log('the server is listening on 3000 port ')
})