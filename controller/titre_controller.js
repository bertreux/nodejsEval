import {
    delete_titre_by_id,
    get_all_participation,
    get_one_titre_by_id,
    insert_new_titre,
    update_titre_by_id
} from "../repositories/titre_repository.js";
import {get_all_athletes} from "../repositories/athlete_repository.js";
import {get_all_epreuves} from "../repositories/epreuve_repository.js";
import {get_all_medailles} from "../repositories/medaille_repository.js";

const getAllTitres = (req, res) => {
    return res.render('front/titre/liste_titres.njk');
}

const tableauOfTitreBack = async (req, res) => {
    const titres = await get_all_participation();
    return res.render('back/titre/index.njk', {
        'titres': titres
    });
}

const showOfTitreBack = async (req, res) => {
    const { id } = { ...req.params };
    const titre = await get_one_titre_by_id(id);
    return res.render('back/titre/show.njk', {
        'titre': titre[0],
    })
}

const deleteOfTitreBack = async (req, res) => {
    const { id } = { ...req.params };
    const query = await delete_titre_by_id(id);
    const titres = await get_all_participation();
    return res.render('back/titre/index.njk', {
        'titres': titres
    });
}

const editOfTitreBack = async (req, res) => {
    const { id } = { ...req.params };
    const titre = await get_one_titre_by_id(id);
    const athletes = await get_all_athletes();
    const epreuves = await get_all_epreuves();
    const medailles = await get_all_medailles();
    return res.render('back/titre/form.njk', {
        'titre': titre[0],
        'athletes': athletes,
        'epreuves': epreuves,
        'medailles': medailles,
        'title': 'Titre modif',
        'type_url_api': titre[0].id_participation+'/edit/'
    })
}

const insertDataEditOfTitreBack = async (req, res) => {
    const {id} = {...req.params};
    const body = req.body;
    const query = await update_titre_by_id(id, body);
    if (query.errno) {
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

const newOfTitreBack = async (req, res) => {
    const athletes = await get_all_athletes();
    const epreuves = await get_all_epreuves();
    const medailles = await get_all_medailles();
    return res.render('back/titre/form.njk', {
        'titre': null,
        'athletes': athletes,
        'epreuves': epreuves,
        'medailles': medailles,
        'title': 'Titre creation',
        'type_url_api': 'new/'
    })
}

const insertDataNewOfTitreBack = async (req, res) => {
    const body = req.body;
    const query = await insert_new_titre(body);
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

export { getAllTitres, tableauOfTitreBack, showOfTitreBack, editOfTitreBack, newOfTitreBack, insertDataNewOfTitreBack, insertDataEditOfTitreBack, deleteOfTitreBack };