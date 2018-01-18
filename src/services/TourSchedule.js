import https from 'https';

export default class TourSchedule {
    constructor() {}

    getTourSchedule(req, res) {
        https.get('https://rest.bandsintown.com/artists/cultureabuse/events?app_id=snapTour', (tourRes) => {
            let tourData;
    
            tourRes.on('data', (data) => {
                tourData += data;
            });
            tourRes.on('end', () => {
                res.send(tourData);
            });
        });
    }
}