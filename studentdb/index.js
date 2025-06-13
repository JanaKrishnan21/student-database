import express from 'express';
import sequelize from './models/index.js';
import userRouter from './routerdb1/user.router.js';

const app=express();
const port=3000;

app.use(express.json());
app.use('/',userRouter);

try{
    await sequelize.sync({force:false});
    app.listen(port,()=>{
        console.log(`server running at http://localhost:${port} `);
        
    });
}catch{
    console.error('failed to connect to database:',err);
    
}