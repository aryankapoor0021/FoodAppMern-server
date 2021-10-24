const express=require('express')
const router=express.Router()
const Food=require('../models/food')
const Order=require('../models/order')

router.get('/allfoods',async (req,res)=>{

	try {
		const allfoods=await Food.find({})
		res.status(200).json(allfoods)
	} catch(e) {
		res.status(404).json({msg:"Cannot Fetch The Data"})
		console.log(e)
	}
})


router.post('/placeorder',async (req,res)=>{

	try {
		const {cart:orderedItems}=req.body;
		const newOrder=new Order({orderedItems});
		await newOrder.save();
		console.log("Order Placed")
		res.status(200).json({msg:"Order Placed successfully"})
	} catch(e) {
		res.status(400).json({msg:"Error in placing Order"});
	}
})

module.exports=router