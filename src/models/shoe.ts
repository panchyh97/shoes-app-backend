import { Schema, model } from 'mongoose';

const ShoeSchema = new Schema(
    {
        modelo: {
            type: String, 
            required: true
        },
        marca: {
            type: String, 
            required: true
        },
        descripcion: {
            type: String, 
            required: true
        },
        precio: {
            type: Number, 
            required: true
        },
        stock: {
            type: Number, 
            required: true
        }
    }
);

export default model('Shoe', ShoeSchema);