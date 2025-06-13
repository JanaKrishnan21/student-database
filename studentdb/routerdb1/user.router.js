import express from 'express';
import { createuser,getUserById,getalluser,updateUser,deleteUser } from '../controllerdb1/user.controler.js';
const router=express.Router();

router.post('/users',createuser);
router.get('/users',getalluser);
router.get('/users/:id',getUserById);
router.put('/users/:id',updateUser);
router.delete('/users/:id',deleteUser);

export default router;
