import mongoose from "mongoose";

let isConnected = false; // Seguimiento de la conexión.

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB ya está conectado');
        return;
    }
    
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName : 'share_prompt',
            useNewUrlParser : true,
            useUnifiedTopology: true
        });

        isConnected = true;

        console.log('MongoDB conectado');
    } catch (error) {
        console.log(error);
    }
}