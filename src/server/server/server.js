import express from 'express';
import tourRouter from '../routers/tourRouter.js';

const app = express();

app.use(express.static(__dirname +'./../../../'));
app.use(tourRouter);

app.listen(3000, () => {
    console.log('Server listening on 3000')
});