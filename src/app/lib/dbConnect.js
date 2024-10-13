import mongoose from "mongoose";

const connectToDatabase = async () =>{
    if(mongoose.connection.readyState >= 1){return;}
    try {

        console.log(process.env.MONGO_DB_URI,"connection")
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Database Connection is Ready")        
    }catch (error) {
        console.log("Database Connection Failed...",error)
        throw error; 
    }
}
export default connectToDatabase;

