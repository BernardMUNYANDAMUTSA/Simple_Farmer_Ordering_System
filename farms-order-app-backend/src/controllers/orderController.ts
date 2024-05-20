import { Request, Response } from 'express';
import { createOrder, getOrders, updateOrderStatus } from '../services/orderService';

export const placeOrder = async (req: Request, res: Response) => {
    try {
        const order = await createOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};



export const listOrders = async (req: Request, res: Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const orders = await getOrders(page);
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const approveOrder = async (req: Request, res: Response) => {
    try {
        const { orderId, isPaid } = req.body;
        const order = await updateOrderStatus(orderId, isPaid);
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};
