import db_connection from "../service/db_connection.js";

const get_all_epreuves = async () => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('SELECT epreuve.* FROM jeux_olympiques.epreuve')
        return results;
    } catch (error) {
        return error;
    }
};

const get_epreuve_by_sport_id = async (id) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('SELECT epreuve.* FROM jeux_olympiques.epreuve WHERE epreuve.sport_id = '+ id)
        return results;
    } catch (error) {
        return error;
    }
};

const get_one_epreuve_by_id = async (id) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('SELECT epreuve.* FROM jeux_olympiques.epreuve WHERE epreuve.id_epreuve = :id',
            {
                id: id,
            })
        return results;
    } catch (error) {
        return error;
    }
};

export { get_all_epreuves, get_epreuve_by_sport_id, get_one_epreuve_by_id };