import {get_all_epreuves, get_one_epreuve_by_id} from "../repositories/epreuve_repository.js";

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
        'epreuve': epreuve,
    })
}

const editOfEpreuveBack = async (req, res) => {
    const { id } = { ...req.params };
    const epreuve = await get_one_epreuve_by_id(id);
    return res.render('back/epreuve/form.njk', {
        'epreuve': epreuve,
        'title': 'Epreuve modif'
    })
}

const newOfEpreuveBack = (req, res) => {
    return res.render('back/epreuve/form.njk', {
        'epreuve': null,
        'title': 'Epreuve creation'
    })
}

export { getAllEpreuve, tableauOfEpreuveBack, showOfEpreuveBack, editOfEpreuveBack, newOfEpreuveBack };