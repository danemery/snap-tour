import https from 'https';

export default class Tour {
    constructor() {}

    getTour(req, res) {
        https.get('https://rest.bandsintown.com/artists/pup/events?app_id=snapTour', (tourRes) => {
            let tourData = '';
    
            tourRes.on('data', (data) => {
                tourData += data;
            });
            tourRes.on('end', () => {
                res.send(tourData);
            });
        });
    }
}