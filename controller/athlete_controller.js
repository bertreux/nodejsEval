import {get_all_athletes, get_one_athlete_by_id} from "../repositories/athlete_repository.js";

const tableauOfAthleteBack = async (req, res) => {
    const athletes = await get_all_athletes();
    return res.render('back/athlete/index.njk', {
        'athletes': athletes,
    })
}

const showOfAthleteBack = async (req, res) => {
    const { id } = { ...req.params };
    const athlete = await get_one_athlete_by_id(id);
    return res.render('back/athlete/show.njk', {
        'athlete': athlete,
    })
}

const editOfAthleteBack = async (req, res) => {
    const { id } = { ...req.params };
    const athlete = await get_one_athlete_by_id(id);
    return res.render('back/athlete/form.njk', {
        'athlete': athlete,
        'title': 'Athlete modif'
    })
}

const newOfAthleteBack = (req, res) => {
    return res.render('back/athlete/form.njk', {
        'athlete': null,
        'title': 'Athlete creation'
    })
}

export {tableauOfAthleteBack, showOfAthleteBack, editOfAthleteBack, newOfAthleteBack};