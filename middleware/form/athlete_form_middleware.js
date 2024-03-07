import athlete_form_validator from "../../validator/athlete_form_validator.js";

const athlete_form_middleware = (req, res, next) => {
    const validate = athlete_form_validator.validate(req, req.body, { abortEarly: false });
    if(validate.error){
        return res.status(400).json({
            status: 400,
            message: 'Error',
            errors: validate.error.details.map((value) => value.message),
        })
    }

    next();
}

export default athlete_form_middleware;