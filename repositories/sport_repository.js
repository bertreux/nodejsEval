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

export { get_all_sports };