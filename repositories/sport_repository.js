import db_connection from "../service/db_connection.js";

const get_all_sports = async () => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('SELECT sport.* FROM jeux_olympiques.sport')
        return results;
    } catch (error) {
        return error;
    }
};

const get_one_sport_by_id = async (id) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('SELECT sport.* FROM jeux_olympiques.sport WHERE sport.id_sport = :id',
            {
                id: id,
            })
        return results[0];
    } catch (error) {
        return error;
    }
};

export { get_all_sports, get_one_sport_by_id };