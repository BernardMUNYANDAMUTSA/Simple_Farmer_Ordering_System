import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

//app.use(express.json());
app.use('/pages', express.static(path.join(__dirname, 'src/pages')));

const mongoURI='mongodb+srv://bernard:rra12345@cluster0.bkjcaza.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));



app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'src/pages', 'home.html'));
});
// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello, world!');
// });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
