import express from 'express'
import {regis,log,log2} from '../controls/my-control.js';

const Router=express.Router();

Router.post('/register', regis);

Router.post('/login', log);

Router.get('/logout', log2);

function isAuthenticated(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}

Router.get('/dashboard', isAuthenticated, (req, res) => {
    res.send(`Hi, ${req.session.user}, welcome to the App`);
});

export default Router;

