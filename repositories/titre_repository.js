import db_connection from "../service/db_connection.js";

const get_all_participation = async () => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('SELECT participation.* FROM jeux_olympiques.participation')
        return results;
    } catch (error) {
        return error;
    }
};

const get_one_titre_by_id = async (id) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('SELECT participation.* FROM jeux_olympiques.participation WHERE participation.id_participation = :id',
            {
                id: id,
            })
        return results[0];
    } catch (error) {
        return error;
    }
};

export { get_all_participation, get_one_titre_by_id };