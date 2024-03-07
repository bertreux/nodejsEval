import connexion_form_validator from "../../validator/connexion_form_validator.js";
import {is_email_already_exist, is_email_and_password_valid} from "../../repositories/connexion_repository.js";

const connexion_form_middleware = (req, res, next) => {
    const validate = connexion_form_validator.validate(req.body);
    if(validate.error){
        return res.status(400).json({
            status: 400,
            message: 'Error',
            errors: validate.error.details.map((value) => value.message),
        })
    }

    next();
}

const is_credential_valid = async (req, res, next) => {
    const query = await is_email_and_password_valid(req.body);
    if(query.errno){
        return res.status(400).json({
            status: 400,
            message: 'Error',
            errors: 'Bad Request'
        });
    }
    if(query[0]['count(user.id_user)'] === 0){
        return res.status(400).json({
            status: 400,
            message: 'Error',
            errors: ['Email ou mot de passe invalide']
        });
    }

    next();
}

const utilisateur_exist_deja = async (req, res, next) => {
    const query = await is_email_already_exist(req.body);
    if(query.errno){
        return res.status(400).json({
            status: 400,
            message: 'Error',
            errors: 'Bad Request'
        });
    }
    if(query[0]['count(user.id_user)'] === 1){
        return res.status(400).json({
            status: 400,
            message: 'Error',
            errors: ["L'utilisateur existe déja"]
        });
    }

    next();
}

export {connexion_form_middleware, is_credential_valid, utilisateur_exist_deja};