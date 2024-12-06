
const mongoose = require("mongoose")


const db =process.env.MONGO_URI;
mongoose.set('strictQuery',false);
mongoose.connect(db).then(() => {
    console.log(`Database is Connected `);
}).catch((e) => console.log(`Sorry No connection`));
