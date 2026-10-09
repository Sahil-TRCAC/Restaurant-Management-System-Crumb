import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
  customer:{type:String,required:true,trim:true}, items:[{name:String,price:Number,quantity:Number}], total:{type:Number,required:true,min:0},
  status:{type:String,enum:['Pending','Preparing','Ready','Completed'],default:'Pending'}
},{timestamps:true});
export default mongoose.model('Order',orderSchema);
