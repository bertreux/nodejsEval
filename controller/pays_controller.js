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

export { tableauOfEpreuveBack, showOfPaysBack };