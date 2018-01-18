import express from 'express';
import TourSchedule from '../services/TourSchedule.js'

const homePageRouter = express.Router();

homePageRouter.get('/', (req, res) => {
    const tourSchedule = new TourSchedule();

    tourSchedule.getTourSchedule(req, res);
});

export default homePageRouter;