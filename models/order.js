const mongoose=require('mongoose')


const orderSchema=new mongoose.Schema({
	orderedItems:[
	   {
	   	  _id:{id:false},
	   	  name:String,
	   	  desc:String,
	   	  price:Number,
	   	  qty:Number
	   }
	]
},{ timeStamps:true});


const Order=mongoose.model('Order',orderSchema);

module.exports=Order;