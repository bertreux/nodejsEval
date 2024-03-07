import {
    delete_athlete_by_id,
    get_all_athletes,
    get_one_athlete_by_id,
    insert_new_athlete,
    update_athlete_by_id
} from "../repositories/athlete_repository.js";
import {get_all_pays} from "../repositories/pays_repository.js";

const tableauOfAthleteBack = async (req, res) => {
    const athletes = await get_all_athletes();
    return res.render('back/athlete/index.njk', {
        'athletes': athletes,
        'user': req.session.user
    })
}

const showOfAthleteBack = async (req, res) => {
    const { id } = { ...req.params };
    const athlete = await get_one_athlete_by_id(id);
    return res.render('back/athlete/show.njk', {
        'athlete': athlete[0],
        'user': req.session.user
    })
}

const deleteOfAthleteBack = async (req, res) => {
    const { id } = { ...req.params };
    const query = await delete_athlete_by_id(id);
    const athletes = await get_all_athletes();
    return res.render('back/athlete/index.njk', {
        'athletes': athletes,
        'user': req.session.user
    })
}

const editOfAthleteBack = async (req, res) => {
    const { id } = { ...req.params };
    const athlete = await get_one_athlete_by_id(id);
    const pays = await get_all_pays();
    return res.render('back/athlete/form.njk', {
        'athlete': athlete[0],
        'pays': pays,
        'title': 'Athlete modif',
        'type_url_api': athlete[0].id_athlete+'/edit/',
        'user': req.session.user
    })
}

const insertDataEditOfAthleteBack = async (req, res) => {
    const { id } = { ...req.params };
    const body = req.body;
    const query = await update_athlete_by_id(id, body);
    if(query.errno){
        return res.status(400).json({
            status: 400,
            message: 'Bad Request'
        });
    }
    return res.status(201).json({
        status: 201,
        message: 'Created'
    });
}

const newOfAthleteBack = async (req, res) => {
    const pays = await get_all_pays();
    return res.render('back/athlete/form.njk', {
        'athlete': null,
        'pays': pays,
        'title': 'Athlete creation',
        'type_url_api': 'new/',
        'user': req.session.user
    })
}

const insertDataNewOfAthleteBack = async (req, res) => {
    const body = req.body;
    const query = await insert_new_athlete(body);
    if(query.errno){
        return res.status(400).json({
            status: 400,
            message: 'Bad Request'
        });
    }
    return res.status(201).json({
        status: 201,
        message: 'Created'
    });
}

export {tableauOfAthleteBack, showOfAthleteBack, editOfAthleteBack, newOfAthleteBack, insertDataNewOfAthleteBack, insertDataEditOfAthleteBack, deleteOfAthleteBack};