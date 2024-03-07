import epreuve_form_validator from "../../validator/epreuve_form_validator.js";

const epreuve_form_middleware = (req, res, next) => {
    const validate = epreuve_form_validator.validate(req, req.body, { abortEarly: false });
    if(validate.error){
        return res.status(400).json({
            status: 400,
            message: 'Error',
            errors: validate.error.details.map((value) => value.message),
        })
    }

    next();
}

export default epreuve_form_middleware;