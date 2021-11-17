import Shoe from '../models/shoe';

export const getShoes = async () => {
    return await Shoe.find();
};