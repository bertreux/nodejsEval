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
        return results;
    } catch (error) {
        return error;
    }
};

const insert_new_titre = async (data) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('INSERT INTO jeux_olympiques.participation VALUE(NULL, :athlete_id, :epreuve_id, :medaille_id)',
            data)
        return results;
    } catch (error) {
        return error;
    }
};

const update_titre_by_id = async (id, data) => {
    const db = await db_connection();
    data.id_participation = id;
    try {
        const [ results ] = await db.query('UPDATE jeux_olympiques.participation SET participation.athlete_id = :athlete_id, participation.epreuve_id = :epreuve_id, participation.medaille_id = :medaille_id where participation.id_participation = :id_participation',
            data)
        return results;
    } catch (error) {
        return error;
    }
};

const delete_titre_by_id = async (id) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('DELETE FROM jeux_olympiques.participation WHERE participation.id_participation = :id',
            {
                id: id,
            })
        return results;
    } catch (error) {
        return error;
    }
};

export { get_all_participation, get_one_titre_by_id, insert_new_titre, update_titre_by_id, delete_titre_by_id };