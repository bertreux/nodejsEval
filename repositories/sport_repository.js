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
        return results;
    } catch (error) {
        return error;
    }
};

const insert_new_sport = async (data) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('INSERT INTO jeux_olympiques.sport VALUE(NULL, :Nom, :Image)',
            data)
        return results;
    } catch (error) {
        return error;
    }
};

const update_sport_by_id = async (id, data) => {
    const db = await db_connection();
    data.id_sport = id;
    try {
        const [ results ] = await db.query('UPDATE jeux_olympiques.sport SET sport.Nom = :Nom, sport.Image = :Image where sport.id_sport = :id_sport',
            data)
        return results;
    } catch (error) {
        return error;
    }
};

const delete_sport_by_id = async (id) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('DELETE FROM jeux_olympiques.sport WHERE sport.id_sport = :id',
            {
                id: id,
            })
        return results;
    } catch (error) {
        return error;
    }
};

export { get_all_sports, get_one_sport_by_id, insert_new_sport, update_sport_by_id, delete_sport_by_id };