const { default: mongoose } = require('mongoose')
mongoose.set('strictQuery', false)
const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI, {});
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log("MongoDB connected successfully");
    }
};
module.exports = dbConnect 