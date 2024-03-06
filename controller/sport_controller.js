import {get_all_sports} from "../repositories/sport_repository.js";
import {get_epreuve_by_sport_id} from "../repositories/epreuve_repository.js";

const getAllSports = async (req, res) => {
    const sports = await get_all_sports();
    return res.render('front/sport/liste_sports.njk', {
        'sports': sports,
    });
}

const EpreuveOfSport = async (req, res) => {
    const { id } = { ...req.params };
    const epreuves = await get_epreuve_by_sport_id(id);
    return res.render('front/sport/epreuve_sport.njk', {
        'epreuves': epreuves,
    });
}

const tableauOfSportBack = async (req, res) => {
    const sports = await get_all_sports();
    return res.render('back/sport/index.njk', {
        'sports': sports,
    });
}

export { getAllSports, EpreuveOfSport, tableauOfSportBack };