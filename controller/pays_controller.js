import {get_all_pays} from "../repositories/pays_repository.js";

const tableauOfEpreuveBack = async (req, res) => {
    const pays = await get_all_pays();
    return res.render('back/pays/index.njk', {
        'pays': pays,
    });
}

export { tableauOfEpreuveBack };