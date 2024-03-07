import joi from "joi";

const athlete_form_validator = joi.object({
    nom: joi.string().min(5).max(255).required().messages({
        'string.base': 'Le nom doit être une chaîne de caractères',
        'string.empty': 'Le nom ne doit pas être vide',
        'string.max': 'Le nom ne doit pas dépasser 255 caractères',
        'string.min': 'Le nom doit etre supérieur à 5 caractères',
        'any.required': 'Le nom est requis',
    }),
    prenom: joi.string().min(5).max(255).required().messages({
        'string.base': 'Le prénom doit être une chaîne de caractères',
        'string.empty': 'Le prénom ne doit pas être vide',
        'string.max': 'Le prénom ne doit pas dépasser 255 caractères',
        'string.min': 'Le prénom doit etre supérieur à 5 caractères',
        'any.required': 'Le prénom est requis',
    }),
    age: joi.number().integer().min(16).max(150).required().messages({
        'number.base': 'L\'âge doit être un nombre',
        'number.integer': 'L\'âge doit être un entier',
        'number.min': 'L\'âge doit être supérieur ou égal à 16',
        'number.max': 'L\'âge ne doit pas dépasser 150',
        'any.required': 'L\'âge est requis',
    }),
    sexe: joi.string().valid('M', 'F').required().messages({
        'any.only': 'Le sexe doit être "M" ou "F"',
        'any.required': 'Le sexe est requis',
    }),
    pays_id: joi.number().integer().positive().required().messages({
        'number.base': 'L\'identifiant du pays doit être un nombre',
        'number.integer': 'L\'identifiant du pays doit être un entier',
        'number.positive': 'L\'identifiant du pays doit être positif',
        'any.required': 'L\'identifiant du pays est requis',
    }),
}).options({ convert: true, abortEarly: false, stripUnknown: true });

export default athlete_form_validator;