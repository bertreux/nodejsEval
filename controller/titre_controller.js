import {get_all_participation} from "../repositories/titre_repository.js";

const getAllTitres = (req, res) => {
    return res.render('front/titre/liste_titres.njk');
}

const tableauOfTitreBack = async (req, res) => {
    const titres = await get_all_participation();
    return res.render('back/titre/index.njk', {
        'titres': titres
    });
}

export { getAllTitres, tableauOfTitreBack };