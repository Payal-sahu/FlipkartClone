import { products } from "./constants/products.js";
import Product from './model/productSchema.js';

const DefaultData = async () => {
    try {
        await Product.deleteMany({}); //deleteMany is used to remove duplicasy
        await Product.insertMany(products); //insertMany is a asynchronous call thats why taking await

        console.log('Data imported successflly');
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default DefaultData;