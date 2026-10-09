import express from 'express';
import Order from '../models/Order.js';
const router=express.Router();
router.get('/',async(req,res)=>{try{res.json(await Order.find().sort({createdAt:-1}));}catch(e){res.status(500).json({message:e.message});}});
router.post('/',async(req,res)=>{try{const {customer,items}=req.body;if(!customer?.trim()||!items?.length)return res.status(400).json({message:'Customer name and at least one item are required'});const total=items.reduce((s,i)=>s+(Number(i.price)*Number(i.quantity)),0);res.status(201).json(await Order.create({customer,items,total}));}catch(e){res.status(400).json({message:e.message});}});
router.patch('/:id',async(req,res)=>{try{res.json(await Order.findByIdAndUpdate(req.params.id,{status:req.body.status},{new:true,runValidators:true}));}catch(e){res.status(400).json({message:e.message});}});
router.delete('/:id',async(req,res)=>{try{await Order.findByIdAndDelete(req.params.id);res.json({message:'Order deleted'});}catch(e){res.status(400).json({message:e.message});}});
export default router;
