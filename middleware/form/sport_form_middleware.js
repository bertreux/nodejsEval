import sport_form_validator from "../../validator/sport_form_validator.js";

const sport_form_middleware = (req, res, next) => {
    const validate = sport_form_validator.validate(req.body);
    console.log(validate.error)
    if(validate.error){
        return res.status(400).json({
            status: 400,
            message: 'Error',
            errors: validate.error.details.map((value) => value.message),
        })
    }

    next();
}

export default sport_form_middleware;