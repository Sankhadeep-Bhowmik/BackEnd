import express from 'express';
import { userController } from './controller/userController.js';
const app= express();
app.set('view engine','ejs');
app.get('/',userController);

app.listen(3200);