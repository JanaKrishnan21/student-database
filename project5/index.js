import express from 'express';
import session  from 'express-session';
import myrouter from './routers5/my-router.js';
const app=express();
const PORT=3000;

app.use(express.json());

const users=[];

app.use(
    session({
        secret:'mySecretKey',
        resave:false,
        saveUninitialized:true,
        cookie:{maxAge:60000},
    }))


app.use('/step',myrouter);
app.listen(PORT,()=>{
    console.log('server started in port 3000');
}
)
