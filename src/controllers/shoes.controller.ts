import { 
    Request, 
    RequestHandler, 
    Response 
} from 'express';
import { getShoes } from '../services/shoes.services';

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