// src/models/orderSchema.ts

import { Schema, model, Document } from 'mongoose';

interface IOrder extends Document {
    farmerName: string;
    landSize: number;
    seedType: string;
    fertilizerType: string;
    seedQuantity: number;
    fertilizerQuantity: number;
    isPaid: boolean;
}

const orderSchema = new Schema<IOrder>({
    farmerName: { type: String, required: true },
    landSize: { type: Number, required: true },
    seedType: { type: String, required: true },
    fertilizerType: { type: String, required: true },
    seedQuantity: { type: Number, required: true },
    fertilizerQuantity: { type: Number, required: true },
    isPaid: { type: Boolean, required: true }
});

export default model<IOrder>('Order', orderSchema);
