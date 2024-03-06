import db_connection from "../service/db_connection.js";

const get_all_pays = async () => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('SELECT pays.* FROM jeux_olympiques.pays')
        return results;
    } catch (error) {
        return error;
    }
};

const get_one_pays_by_id = async (id) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('SELECT pays.* FROM jeux_olympiques.pays WHERE pays.id_pays = :id',
            {
                id: id,
            })
        return results[0];
    } catch (error) {
        return error;
    }
};

export {get_all_pays, get_one_pays_by_id}