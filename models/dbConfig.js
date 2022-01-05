import mongoose from 'mongoose';

const dbConfig = mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then((err) => {
    if(!err) {
        console.log('successful connected to database');
    }
})
.catch((err) => console.log('Error' + err));

export default db;