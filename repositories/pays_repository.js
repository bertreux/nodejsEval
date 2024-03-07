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

const get_one_pays_by_id = async (id) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('SELECT pays.* FROM jeux_olympiques.pays WHERE pays.id_pays = :id',
            {
                id: id,
            })
        return results;
    } catch (error) {
        return error;
    }
};

const insert_new_pays = async (data) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('INSERT INTO jeux_olympiques.pays VALUE(NULL, :Nom)',
            data)
        return results;
    } catch (error) {
        return error;
    }
};

const update_pays_by_id = async (id, data) => {
    const db = await db_connection();
    data.id_pays = id;
    try {
        const [ results ] = await db.query('UPDATE jeux_olympiques.pays SET pays.Nom = :Nom where pays.id_pays = :id_pays',
            data)
        return results;
    } catch (error) {
        return error;
    }
};

const delete_pays_by_id = async (id) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('DELETE FROM jeux_olympiques.pays WHERE pays.id_pays = :id',
            {
                id: id,
            })
        return results;
    } catch (error) {
        return error;
    }
};

export {get_all_pays, get_one_pays_by_id, insert_new_pays, update_pays_by_id, delete_pays_by_id}