import {
    delete_epreuve_by_id,
    get_all_epreuves,
    get_one_epreuve_by_id,
    insert_new_epreuve,
    update_epreuve_by_id
} from "../repositories/epreuve_repository.js";
import {get_all_sports} from "../repositories/sport_repository.js";
import {get_all_athletes, get_all_participant_from_epreuve_id} from "../repositories/athlete_repository.js";

const getAllEpreuve = async (req, res) => {
    const epreuves = await get_all_epreuves();
    return res.render('front/epreuve/liste_epreuve.njk', {
        'epreuves': epreuves,
        'title': 'Liste des Epreuves',
        'user': req.session.user
    });
}

const tableauOfEpreuveBack = async (req, res) => {
    const epreuves = await get_all_epreuves();
    return res.render('back/epreuve/index.njk', {
        'epreuves': epreuves,
        'user': req.session.user
    });
}

const deleteOfEpreuveBack = async (req, res) => {
    const { id } = { ...req.params };
    const query = await delete_epreuve_by_id(id);
    const epreuves = await get_all_epreuves();
    return res.render('back/epreuve/index.njk', {
        'epreuves': epreuves,
        'user': req.session.user
    });
}

const showOfEpreuveBack = async (req, res) => {
    const { id } = { ...req.params };
    const epreuve = await get_one_epreuve_by_id(id);
    return res.render('back/epreuve/show.njk', {
        'epreuve': epreuve[0],
        'user': req.session.user
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
        'type_url_api': epreuve[0].id_epreuve+'/edit/',
        'user': req.session.user
    })
}

const insertDataEditOfEpreuveBack = async (req, res) => {
    const { id } = { ...req.params };
    const body = req.body;
    const query = await update_epreuve_by_id(id, body);
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

const newOfEpreuveBack = async (req, res) => {
    const sports = await get_all_sports();
    const athletes = await get_all_athletes();
    return res.render('back/epreuve/form.njk', {
        'epreuve': null,
        'sports': sports,
        'athletes': athletes,
        'title': 'Epreuve creation',
        'type_url_api': 'new/',
        'user': req.session.user
    })
}

const insertDataNewOfEpreuveBack = async (req, res) => {
    const body = req.body;
    const query = await insert_new_epreuve(body);
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

const get_participant_epreuve = async (req, res) => {
    const { id } = { ...req.params };
    const athletes = await get_all_participant_from_epreuve_id(id);
    const epreuve = await get_one_epreuve_by_id(id)
    return res.render('front/athletes/athletes.njk', {
        'title': 'Listes des Athletes de l\'épreuve '+epreuve[0].Nom,
        'athletes': athletes,
        'user': req.session.user
    })
}

export { getAllEpreuve, tableauOfEpreuveBack, showOfEpreuveBack, editOfEpreuveBack, newOfEpreuveBack, deleteOfEpreuveBack, insertDataNewOfEpreuveBack, insertDataEditOfEpreuveBack, get_participant_epreuve };