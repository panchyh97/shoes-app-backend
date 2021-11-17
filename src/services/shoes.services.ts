import { IShoes } from '../interfaces/IShoes';
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

export const removeShoes = async () => {
    await Shoe.deleteMany();
};

export const setUpData = async (data: IShoes, iterations: number) => {
    removeShoes();

    for (let index = 0; index < iterations; index++) {
        await createShoe(
            `${data.modelo} ${index}`,
            `${data.marca} ${index}`,
            `${data.descripcion} ${index}`,
            data.precio * index,
            data.precio * index
        );
    };

};