import mongoose from 'mongoose';

const Connection = async (username , password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.2w7um.mongodb.net/Cluster0?retryWrites=true`;
    //&w=majority1
    
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }); //, useFindAndModify: false
        console.log('Database Connected successfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;