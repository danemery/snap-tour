import express from 'express';
import Tour from '../services/Tour.js'

const tourRouter = express.Router();

tourRouter.get('/tour', (req, res) => {
    const tour = new Tour();

    tour.getTour(req, res);
});

export default tourRouter;