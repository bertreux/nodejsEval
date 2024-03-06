import {get_all_pays, get_one_pays_by_id} from "../repositories/pays_repository.js";

const tableauOfEpreuveBack = async (req, res) => {
    const pays = await get_all_pays();
    return res.render('back/pays/index.njk', {
        'pays': pays,
    });
}

const showOfPaysBack = async (req, res) => {
    const { id } = { ...req.params };
    const pays = await get_one_pays_by_id(id);
    return res.render('back/pays/show.njk', {
        'pays': pays,
    })
}

const editOfPaysBack = async (req, res) => {
    const { id } = { ...req.params };
    const pays = await get_one_pays_by_id(id);
    return res.render('back/pays/form.njk', {
        'pays': pays,
        'title': 'Pays modif'
    })
}

const newOfPaysBack = (req, res) => {
    return res.render('back/pays/form.njk', {
        'pays': null,
        'title': 'Pays creation'
    })
}

export { tableauOfEpreuveBack, showOfPaysBack, editOfPaysBack, newOfPaysBack };