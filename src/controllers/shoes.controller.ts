import { 
    Request, 
    RequestHandler, 
    Response 
} from 'express';
import { getShoes, createShoe } from '../services/shoes.services';

export const getAllShoes: RequestHandler = async (req: Request, res: Response) => {
    try {
        const shoes = await getShoes();

        return res.status(200).json(shoes);
    } catch (err) {
        console.log(err);

        return res.status(500).json({
            msg: 'Ha ocurrido un error en el servidor'
        });
    };
};

export const addShoe: RequestHandler = async (req: Request, res: Response) => {
    try {
        const {
            modelo,
            marca,
            descripcion,
            precio,
            stock
        } = req.body;
    
        const newShoe = await createShoe(modelo, marca, descripcion, precio, stock);
    
        return res.status(201).json({
            msg: 'Shoe added',
            data: newShoe
        });
    } catch (err) {
        console.log(err);

        return res.status(500).json({
            msg:'Ha ocurrido un error en el servidor.',
        });
    }
};