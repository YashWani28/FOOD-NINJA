const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:ufo12345@cluster0.zkjkqyj.mongodb.net/gofoodmern?retryWrites=true&w=majority';

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(mongoURI);
        console.log("Database connected: ", connect.connection.host, connect.connection.name);

        const food_items = mongoose.connection.db.collection("food_items");
        const food_category = mongoose.connection.db.collection("foodCategory");
        const fooddata = await food_items.find({}).toArray();
        const foodcatdata = await food_category.find({}).toArray();

        global.food_category = foodcatdata
        global.food_items = fooddata;
        // console.log(data);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDb;
