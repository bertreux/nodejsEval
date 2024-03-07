import joi from "joi";

const titre_form_validator = joi.object({
    athlete_id: joi.number().integer().positive().required().messages({
        'number.base': "L'identifiant de l'athlète doit être un nombre",
        'number.integer': "L'identifiant de l'athlète doit être un entier",
        'number.positive': "L'identifiant de l'athlète doit être positif",
        'any.required': "L'identifiant de l'athlète est requis",
    }),
    epreuve_id: joi.number().integer().positive().required().messages({
        'number.base': "L'identifiant de l'épreuve doit être un nombre",
        'number.integer': "L'identifiant de l'épreuve doit être un entier",
        'number.positive': "L'identifiant de l'épreuve doit être positif",
        'any.required': "L'identifiant de l'épreuve est requis",
    }),
    medaille_id: joi.number().integer().positive().required().messages({
        'number.base': "L'identifiant de la médaille doit être un nombre",
        'number.integer': "L'identifiant de la médaille doit être un entier",
        'number.positive': "L'identifiant de la médaille doit être positif",
        'any.required': "L'identifiant de la médaille est requis",
    }),
});

export default titre_form_validator;