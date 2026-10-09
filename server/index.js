import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import menuRoutes from './routes/menu.js';
import orderRoutes from './routes/orders.js';
import MenuItem from './models/MenuItem.js';
import Order from './models/Order.js';
dotenv.config();
const app=express();app.use(cors());app.use(express.json());
app.get('/api/health',(req,res)=>res.json({status:'ok',message:'Restaurant API is running'}));
app.use('/api/menu',menuRoutes);app.use('/api/orders',orderRoutes);
const seed=async()=>{if(await MenuItem.countDocuments()===0){await MenuItem.insertMany([
{name:'Margherita Pizza',category:'Main Course',price:249,image:'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600',description:'Classic cheese and basil'},
{name:'Crispy French Fries',category:'Starters',price:129,image:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600',description:'Golden and crispy'},
{name:'Classic Burger',category:'Main Course',price:199,image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600',description:'Juicy burger with fresh greens'},
{name:'Chocolate Brownie',category:'Desserts',price:149,image:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600',description:'Warm chocolate brownie'},
{name:'Cold Coffee',category:'Beverages',price:119,image:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600',description:'Chilled creamy coffee'}
].filter(x=>x.image&&!x.image.endsWith('146与')));}}
const start=async()=>{try{await mongoose.connect(process.env.MONGO_URI||'mongodb://127.0.0.1:27017/restaurant_management');console.log('MongoDB connected');await seed();app.listen(process.env.PORT||5000,()=>console.log('API on port '+(process.env.PORT||5000)));}catch(e){console.error('Could not connect to MongoDB:',e.message);process.exit(1);}};start();
