import mongoose from 'mongoose';

const MongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Database Connected")
    } catch (error) {
        console.error(error)
    }
}

export default MongoDB