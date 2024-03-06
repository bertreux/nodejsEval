import {get_all_epreuves, get_one_epreuve_by_id} from "../repositories/epreuve_repository.js";
import {get_all_sports} from "../repositories/sport_repository.js";
import {get_all_athletes} from "../repositories/athlete_repository.js";

const getAllEpreuve = async (req, res) => {
    const epreuves = await get_all_epreuves();
    return res.render('front/epreuve/liste_epreuve.njk', {
        'epreuves': epreuves,
    });
}

const tableauOfEpreuveBack = async (req, res) => {
    const epreuves = await get_all_epreuves();
    return res.render('back/epreuve/index.njk', {
        'epreuves': epreuves,
    });
}

const showOfEpreuveBack = async (req, res) => {
    const { id } = { ...req.params };
    const epreuve = await get_one_epreuve_by_id(id);
    return res.render('back/epreuve/show.njk', {
        'epreuve': epreuve[0],
    })
}

const editOfEpreuveBack = async (req, res) => {
    const { id } = { ...req.params };
    const epreuve = await get_one_epreuve_by_id(id);
    const sports = await get_all_sports();
    const athletes = await get_all_athletes();
    return res.render('back/epreuve/form.njk', {
        'epreuve': epreuve[0],
        'sports': sports,
        'athletes': athletes,
        'title': 'Epreuve modif',
        'type_url_api': epreuve[0].id_epreuve+'/edit/'
    })
}

const newOfEpreuveBack = async (req, res) => {
    const sports = await get_all_sports();
    const athletes = await get_all_athletes();
    return res.render('back/epreuve/form.njk', {
        'epreuve': null,
        'sports': sports,
        'athletes': athletes,
        'title': 'Epreuve creation',
        'type_url_api': 'new/'
    })
}

export { getAllEpreuve, tableauOfEpreuveBack, showOfEpreuveBack, editOfEpreuveBack, newOfEpreuveBack };