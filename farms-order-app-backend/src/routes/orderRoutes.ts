import { Router } from 'express';
import { placeOrder, listOrders, approveOrder } from '../controllers/orderController';

const router = Router();

router.post('/orders', placeOrder);
router.get('/orders', listOrders);
router.patch('/orders/approve', approveOrder);

export default router;
