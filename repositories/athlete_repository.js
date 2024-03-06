import db_connection from "../service/db_connection.js";

const get_all_athletes = async () => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('SELECT athlete.* FROM jeux_olympiques.athlete')
        return results;
    } catch (error) {
        return error;
    }
};

const get_one_athlete_by_id = async (id) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('SELECT athlete.* FROM jeux_olympiques.athlete WHERE athlete.id_athlete = :id',
            {
                id: id,
            })
        return results[0];
    } catch (error) {
        return error;
    }
};

export { get_all_athletes, get_one_athlete_by_id };