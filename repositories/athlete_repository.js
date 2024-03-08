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
        const [ results ] = await db.query('INSERT INTO jeux_olympiques.athlete VALUE(NULL, :nom, :prenom, :age, :sexe, :Image)',
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
        const [ results ] = await db.query('UPDATE jeux_olympiques.athlete SET athlete.nom = :nom, athlete.prenom = :prenom, athlete.age = :age, athlete.sexe = :sexe, athlete.Image = :Image where athlete.id_athlete = :id_athlete',
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

const get_athlete_medaille = async (id) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('SELECT a.nom AS nom_athlete, e.Nom, m.couleur FROM athletes a JOIN participation p ON a.id_athlete = p.athlete_id JOIN epreuve e ON p.epreuve_id = e.id_epreuve LEFT JOIN medaille m ON p.medaille_id = m.id_medaille;',
            {
                id: id,
            })
        return results;
    } catch (error) {
        return error;
    }
};

const get_athlete_pays = async (id) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('SELECT a.id_athlete, a.Nom, a.Prenom, a.Age, p.Nom AS nom_pays FROM athletes a JOIN pays p ON a.pays_id = p.id_pays;',
            {
                id: id,
            })
        return results;
    } catch (error) {
        return error;
    }
};

const get_all_participant_from_epreuve_id = async (id) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('SELECT DISTINCT athlete.* FROM jeux_olympiques.athlete JOIN jeux_olympiques.participation p on athlete.id_athlete = p.athlete_id JOIN jeux_olympiques.epreuve e on e.id_epreuve = p.epreuve_id WHERE e.id_epreuve = :id',
            {
                id: id,
            })
        return results;
    } catch (error) {
        return error;
    }
};


export { get_all_athletes, get_one_athlete_by_id, insert_new_athlete, update_athlete_by_id, delete_athlete_by_id, get_athlete_medaille, get_all_participant_from_epreuve_id };