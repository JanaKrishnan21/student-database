import user1 from '../models/user.model.js'

export const createuser =async (req,res)=>{
    try{
        const {name,email}=req.body;
        const user=await user1.create({name,email});
        res.json(user);
    }catch{
        res.status(500).json({error:err.message});
    }
};

export const getalluser=async (req,res)=>{
    const users=await user1.findAll();
    res.json(users);
};


export const getUserById = async (req, res) => {
  const user = await user1.findByPk(req.params.id);
  if (!user) return res.status(404).send('User not found');
  res.json(user);
};

export const updateUser = async (req, res) => {
  const { name, email } = req.body;
  const user = await user1.findByPk(req.params.id);
  if (!user) return res.status(404).send('User not found');

  user.name = name;
  user.email = email;
  await user.save();
  res.json(user);
};

export const deleteUser = async (req, res) => {
  const user = await user1.findByPk(req.params.id);
  if (!user) return res.status(404).send('User not found');

  await user.destroy();
  res.send('User deleted');
};

