import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT || 3000,
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'shoes-store-db',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost'
};