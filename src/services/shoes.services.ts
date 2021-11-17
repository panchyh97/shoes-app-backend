import Shoe from '../models/shoe';

export const getShoes = async () => {
    return await Shoe.find();
};

export const createShoe = async (
    modelo: string,
    marca: string,
    descripcion: string,
    precio: number,
    stock: number
) => {
    const shoe = new Shoe({
        modelo,
        marca,
        descripcion,
        precio,
        stock
    });

    await shoe.save();
    return shoe;
};