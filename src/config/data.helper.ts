import { IShoes } from '../interfaces/IShoes';
import { setUpData } from '../services/shoes.services';

const base: IShoes = {
    modelo: 'MODELO',
    marca: 'MARCA',
    descripcion: 'DESCRIPCION',
    precio: 123,
    stock: 1
};

export const prepareData = async () => {
    await setUpData(base, 20)
};