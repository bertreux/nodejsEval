import {get_all_sports} from "../repositories/sport_repository.js";

const home = (req, res) => {
    return res.render('home/index.njk', {
        'user': req.session.user
    });
}

const carte_sports = async (req, res) => {
    return res.render('front/carte/carte.njk', {
        'user': req.session.user
    });
}

const fetch_get_all_sports = async (req, res) => {
    const sports = await get_all_sports();
    if(sports.errno){
        return res.status(400).json({
            status: 400,
            message: 'Bad Request'
        });
    }
    return res.status(201).json({
        status: 200,
        message: 'OK',
        sports: sports
    });
}

export { home, carte_sports, fetch_get_all_sports };