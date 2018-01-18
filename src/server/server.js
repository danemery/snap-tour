import express from 'express';
import homePageRouter from '../routers/homePageRouter.js';

const app = express();

app.use(homePageRouter);

app.listen(3000, () => {
    console.log('Server listening on 3000')
});