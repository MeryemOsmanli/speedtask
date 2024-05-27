import express from 'express'
import mongoose from 'mongoose';
import cors from "cors"
const app = express()
app.use(cors())

app.use(express.json());

const MeryySchema = new mongoose.Schema({
  image:String,
    title: String,
    price:Number
  });
  const MeryModel= mongoose.model('MeryModel', MeryySchema);

app.get('/meryem', async (req, res)=> {
    const getAll= await MeryModel.find()
  res.send(getAll)
})
app.get('/meryem/:id', async (req, res)=> {
    const {id}=req.params
    const getbyId= await MeryModel.findById(id)
  res.send(getbyId)
})
app.post('/meryem', async (req, res)=> {
    const obj=req.body
    const add= new MeryModel(obj)
    await add.save()
  res.send(add)
})
app.delete('/meryem/:id', async (req, res)=> {
    const {id}=req.params
    const deletebyId= await MeryModel.findByIdAndDelete(id)
  res.send(deletebyId)
})
mongoose.connect('mongodb+srv://meryemosmanova24:meryemosmanova24@codem.0uejvk1.mongodb.net/')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
app.listen(3002)