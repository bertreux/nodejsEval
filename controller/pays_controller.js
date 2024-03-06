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
        'pays': pays[0],
    })
}

const editOfPaysBack = async (req, res) => {
    const { id } = { ...req.params };
    const pays = await get_one_pays_by_id(id);
    return res.render('back/pays/form.njk', {
        'pays': pays[0],
        'title': 'Pays modif',
        'type_url_api': pays[0].id_pays+'/edit/'
    })
}

const newOfPaysBack = (req, res) => {
    return res.render('back/pays/form.njk', {
        'pays': null,
        'title': 'Pays creation',
        'type_url_api': 'new/'
    })
}

export { tableauOfEpreuveBack, showOfPaysBack, editOfPaysBack, newOfPaysBack };