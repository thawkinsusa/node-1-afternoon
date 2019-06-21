let products = require('../products.json');

let getProduct = (req, res) => {
    let item = products.find(val => +val.id === +req.params.id)
    if(!item){
        return res.status(500).send('item not in list');
    }
    res.status(200).send(item);
}

module.exports = getProduct
