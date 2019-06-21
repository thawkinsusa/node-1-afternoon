let express = require('express');
let app = express();
let port = 3001;
let getProducts = require('./getProducts');
let getProduct = require('./getProduct');

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);


app.listen(port, () => {
    console.log('its working');
});


