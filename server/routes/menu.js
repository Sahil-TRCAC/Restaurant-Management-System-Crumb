import express from 'express';
import MenuItem from '../models/MenuItem.js';
const router=express.Router();
router.get('/',async(req,res)=>{try{res.json(await MenuItem.find().sort({createdAt:-1}));}catch(e){res.status(500).json({message:e.message});}});
router.post('/',async(req,res)=>{try{const {name,category,price}=req.body;if(!name||!category||price===undefined)return res.status(400).json({message:'Name, category and price are required'});res.status(201).json(await MenuItem.create(req.body));}catch(e){res.status(400).json({message:e.message});}});
router.put('/:id',async(req,res)=>{try{res.json(await MenuItem.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true}));}catch(e){res.status(400).json({message:e.message});}});
router.delete('/:id',async(req,res)=>{try{await MenuItem.findByIdAndDelete(req.params.id);res.json({message:'Menu item deleted'});}catch(e){res.status(400).json({message:e.message});}});
export default router;
