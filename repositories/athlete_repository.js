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
        return results;
    } catch (error) {
        return error;
    }
};

const insert_new_athlete = async (data) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('INSERT INTO jeux_olympiques.athlete VALUE(NULL, :nom, :prenom, :age, :sexe)',
            data)
        return results;
    } catch (error) {
        return error;
    }
};

const update_athlete_by_id = async (id, data) => {
    const db = await db_connection();
    data.id_athlete = id;
    try {
        const [ results ] = await db.query('UPDATE jeux_olympiques.athlete SET athlete.nom = :nom, athlete.prenom = :prenom, athlete.age = :age, athlete.sexe = :sexe where athlete.id_athlete = :id_athlete:',
            data)
        return results;
    } catch (error) {
        return error;
    }
};

const delete_athlete_by_id = async (id) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('DELETE FROM jeux_olympiques.athlete WHERE athlete.id_athlete = :id',
            {
                id: id,
            })
        return results;
    } catch (error) {
        return error;
    }
};

export { get_all_athletes, get_one_athlete_by_id, insert_new_athlete, update_athlete_by_id, delete_athlete_by_id };