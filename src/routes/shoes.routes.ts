import { Router } from 'express';
import { getAllShoes, addShoe } from '../controllers/shoes.controller';

const router: Router = Router();

router.get('/shoes', getAllShoes);

router.post('/', addShoe);

export default router;