import { Router } from 'express';
import { getAllShoes } from '../controllers/shoes.controller';

const router: Router = Router();

router.get('/shoes', getAllShoes);

export default router;