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

export {get_all_pays}