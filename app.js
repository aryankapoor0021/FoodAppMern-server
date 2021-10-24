const express=require('express');
const app=express();
const seedDB=require('./seed');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const cors=require('cors');



dotenv.config();


const url=process.env.URL;
mongoose.connect(url)
    .then(() => {
        console.log('DB Connected');
    })
    .catch((err) => {
        console.log(err);
    });

seedDB()
app.use(express.json());
app.use(cors(
    {
    origin:['http://localhost:3000','https://optimistic-raman-528183.netlify.app'],
    credentials:true
    },
))
const foodRoutes=require('./api/foodRoutes');

app.get('/hello',(req,res)=>{
	res.status(200).json({msg:"Hello Server is Ready To Handle tasks"});
})
app.use(foodRoutes);

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`server running at ${port}`)
})