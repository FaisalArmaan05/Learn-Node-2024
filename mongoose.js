

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
});

const main = async ()=>{
    await mongoose.connect('mongodb://localhost:27017/e-com');
    const Product = mongoose.model('products', productSchema);
    let data = new Product({name: 'testing', brand: 'oppo'});
    let result = await data.save();
    console.log(result);
}

main();