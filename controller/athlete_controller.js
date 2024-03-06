import {get_all_athletes} from "../repositories/athlete_repository.js";

const tableauOfAthleteBack = async (req, res) => {
    const athletes = await get_all_athletes();
    return res.render('back/athlete/index.njk', {
        'athletes': athletes,
    })
}

export {tableauOfAthleteBack};