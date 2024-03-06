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

export { get_all_participation };