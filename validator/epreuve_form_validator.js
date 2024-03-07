import joi from "joi";

const epreuve_form_validator = joi.object({
    Nom: joi.string().min(5).max(255).required().messages({
        'string.base': "Le nom de l'épreuve doit être une chaîne de caractères",
        'string.empty': "Le nom de l'épreuve ne doit pas être vide",
        'string.max': "Le nom de l'épreuve ne doit pas dépasser 255 caractères",
        'string.min': "Le nom de l'épreuve doit dépasser 5 caractères",
        'any.required': "Le nom de l'épreuve est requis",
    }),
    sport_id: joi.number().integer().positive().required().messages({
        'number.base': "L'identifiant du sport doit être un nombre",
        'number.integer': "L'identifiant du sport doit être un entier",
        'number.positive': "L'identifiant du sport doit être positif",
        'any.required': "L'identifiant du sport est requis",
    }),
    athlete_id: joi.number().integer().positive().required().messages({
        'number.base': "L'identifiant de l'athlète doit être un nombre",
        'number.integer': "L'identifiant de l'athlète doit être un entier",
        'number.positive': "L'identifiant de l'athlète doit être positif",
        'any.required': "L'identifiant de l'athlète est requis",
    }),
}).options({ convert: true, abortEarly: false, stripUnknown: true });

export default epreuve_form_validator;