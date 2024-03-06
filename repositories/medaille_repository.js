import db_connection from "../service/db_connection.js";

const get_all_medailles = async () => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('SELECT medaille.* FROM jeux_olympiques.medaille')
        return results;
    } catch (error) {
        return error;
    }
};

export {get_all_medailles}