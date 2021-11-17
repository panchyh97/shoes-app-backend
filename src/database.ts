import mongoose from 'mongoose';
import config from './config';

const URI: string = `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`;

const db = mongoose.connect(URI)
    .then(db => console.log(`Connected to ${db.connection.name} database`))
    .catch(err => console.error(err));

export default db;