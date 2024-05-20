import express from 'express';
import mongoose from 'mongoose';
import orderRoutes from './routes/orderRoutes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', orderRoutes);

const mongoURI='mongodb+srv://bernard:rra12345@cluster0.bkjcaza.mongodb.net/?retrywrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongoURI)
    .then(() => console.log('Mongodb connected'))
    .catch(err => console.error(err));
export default app;
