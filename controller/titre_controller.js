import {get_all_participation, get_one_titre_by_id} from "../repositories/titre_repository.js";

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
        'titre': titre,
    })
}

export { getAllTitres, tableauOfTitreBack, showOfTitreBack };