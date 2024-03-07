import db_connection from "../service/db_connection.js";

const is_email_and_password_valid = async (data) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('SELECT count(user.id_user) FROM jeux_olympiques.user WHERE user.email = :email and user.pwd = :pwd',
            data)
        return results;
    } catch (error) {
        return error;
    }
};

const insert_user = async (data) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('INSERT INTO jeux_olympiques.user VALUE(NULL, :email, :pwd)',
            data)
        return results;
    } catch (error) {
        return error;
    }
}

const is_email_already_exist = async (data) => {
    const db = await db_connection();
    try {
        const [ results ] = await db.query('SELECT count(user.id_user) FROM jeux_olympiques.user WHERE user.email = :email',
            data)
        return results;
    } catch (error) {
        return error;
    }
};

export { is_email_and_password_valid, insert_user, is_email_already_exist };