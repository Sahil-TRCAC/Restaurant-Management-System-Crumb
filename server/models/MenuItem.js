import mongoose from 'mongoose';
const menuItemSchema = new mongoose.Schema({
  name:{type:String,required:true,trim:true}, category:{type:String,required:true}, price:{type:Number,required:true,min:0},
  image:{type:String,default:''}, available:{type:Boolean,default:true}, description:{type:String,default:''}
},{timestamps:true});
export default mongoose.model('MenuItem',menuItemSchema);
