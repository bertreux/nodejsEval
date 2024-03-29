import {
    delete_sport_by_id,
    get_all_sports,
    get_one_sport_by_id,
    insert_new_sport,
    update_sport_by_id
} from "../repositories/sport_repository.js";
import {get_epreuve_by_sport_id} from "../repositories/epreuve_repository.js";

const getAllSports = async (req, res) => {
    const sports = await get_all_sports();
    return res.render('front/sport/liste_sports.njk', {
        'sports': sports,
        'user': req.session.user
    });
}

const EpreuveOfSport = async (req, res) => {
    const { id } = { ...req.params };
    const epreuves = await get_epreuve_by_sport_id(id);
    const sport = await get_one_sport_by_id(id);
    return res.render('front/epreuve/liste_epreuve.njk', {
        'epreuves': epreuves,
        'title': 'Listes des Epreuves du sport '+sport[0].Nom,
        'user': req.session.user
    });
}

const tableauOfSportBack = async (req, res) => {
    const sports = await get_all_sports();
    return res.render('back/sport/index.njk', {
        'sports': sports,
        'user': req.session.user
    });
}

const showOfSportBack = async (req, res) => {
    const { id } = { ...req.params };
    const sport = await get_one_sport_by_id(id);
    return res.render('back/sport/show.njk', {
        'sport': sport[0],
        'user': req.session.user
    })
}

const deleteOfSportBack = async (req, res) => {
    const { id } = { ...req.params };
    const query = await delete_sport_by_id(id);
    const sports = await get_all_sports();
    return res.render('back/sport/index.njk', {
        'sports': sports,
        'user': req.session.user
    });
}

const editOfSportBack = async (req, res) => {
    const { id } = { ...req.params };
    const sport = await get_one_sport_by_id(id);
    return res.render('back/sport/form.njk', {
        'sport': sport[0],
        'title': 'Sport modif',
        'type_url_api': sport[0].id_sport+'/edit/',
        'user': req.session.user
    })
}

const insertDataEditOfSportBack = async (req, res) => {
    const { id } = { ...req.params };
    const body = req.body;
    const query = await update_sport_by_id(id, body);
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

const newOfSportBack = (req, res) => {
    return res.render('back/sport/form.njk', {
        'sport': null,
        'title': 'Sport creation',
        'type_url_api': 'new/',
        'user': req.session.user
    })
}

const insertDataNewOfSportBack = async (req, res) => {
    const body = req.body;
    const query = await insert_new_sport(body);
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

export { getAllSports, EpreuveOfSport, tableauOfSportBack, showOfSportBack, editOfSportBack, newOfSportBack, deleteOfSportBack, insertDataEditOfSportBack, insertDataNewOfSportBack };