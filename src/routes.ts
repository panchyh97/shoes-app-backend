import { 
    Express,
    Request,
    Response,
} from 'express';

export default (app: Express) => {

    app.get('/', (req: Request, res: Response) => {
        res.status(200).send('API Shoes App');
    });

    app.all('*', (req: Request, res: Response) => {
        res.status(404).json({
            msg: 'La solicitud realizada no es reconocida por el servidor.'
        });
    });

};