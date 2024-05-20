import Order from '../models/order';

export const calculateQuantities = (landSize: number) => {
    const seedQuantity = landSize;
    const fertilizerQuantity = landSize * 3;
    return { seedQuantity, fertilizerQuantity };
};

export const createOrder = async (orderData: any) => {
    const { landSize } = orderData;
    const { seedQuantity, fertilizerQuantity } = calculateQuantities(landSize);
    const order = new Order({
        ...orderData,
        seedQuantity,
        fertilizerQuantity,
        isPaid: false // Assuming order is not paid initially
    });
    await order.save();
    return order;
};

export const getOrders = async (page: number, limit: number = 5) => {
    const skip = (page - 1) * limit;
    const orders = await Order.find().sort('farmerName').skip(skip).limit(limit);
    return orders;
};

export const updateOrderStatus = async (orderId: string, isPaid: boolean) => {
    const order = await Order.findByIdAndUpdate(orderId, { isPaid }, { new: true });
    return order;
};
