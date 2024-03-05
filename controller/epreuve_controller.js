import {get_all_epreuves} from "../repositories/epreuve_repository.js";

const getAllEpreuve = async (req, res) => {
    const epreuves = await get_all_epreuves();
    return res.render('front/epreuve/liste_epreuve.njk', {
        'epreuves': epreuves,
    });
}

export { getAllEpreuve };