import mongoose from "mongoose";

const connectDB = async () => {
    let connected = false; 

    if (connected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log('MongoDB is connected');
    } catch (error) {
        console.error(error);
    }
};

export default connectDB;