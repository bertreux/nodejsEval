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

export { get_all_athletes };