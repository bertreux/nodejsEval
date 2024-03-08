import db_connection from "../service/db_connection.js";

const get_all_epreuves = async () => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('SELECT epreuve.* FROM jeux_olympiques.epreuve')
        return results;
    } catch (error) {
        return error;
    }
};

const get_epreuve_by_sport_id = async (id) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('SELECT epreuve.* FROM jeux_olympiques.epreuve WHERE epreuve.sport_id = '+ id)
        return results;
    } catch (error) {
        return error;
    }
};

const get_one_epreuve_by_id = async (id) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('SELECT epreuve.* FROM jeux_olympiques.epreuve WHERE epreuve.id_epreuve = :id',
            {
                id: id,
            })
        return results;
    } catch (error) {
        return error;
    }
};

const insert_new_epreuve = async (data) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('INSERT INTO jeux_olympiques.epreuve VALUE(NULL, :Nom, :sport_id, :Image)',
            data)
        return results;
    } catch (error) {
        return error;
    }
};

const update_epreuve_by_id = async (id, data) => {
    const db = await db_connection();
    data.id_epreuve = id;
    try {
        const [ results ] = await db.query('UPDATE jeux_olympiques.epreuve SET epreuve.Nom = :Nom, epreuve.sport_id = :sport_id, epreuve.Image = :Image where epreuve.id_epreuve = :id_epreuve',
            data)
        return results;
    } catch (error) {
        return error;
    }
};

const delete_epreuve_by_id = async (id) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('DELETE FROM jeux_olympiques.epreuve WHERE epreuve.id_epreuve = :id',
            {
                id: id,
            })
        return results;
    } catch (error) {
        return error;
    }
};

export { get_all_epreuves, get_epreuve_by_sport_id, get_one_epreuve_by_id, insert_new_epreuve, update_epreuve_by_id, delete_epreuve_by_id };