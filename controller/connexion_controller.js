import {insert_user, is_email_and_password_valid} from "../repositories/connexion_repository.js";

const connexion = (req, res) => {
    return res.render('connexion/connexion.njk', {
        'type_url_api': 'login/',
        'user': req.session.user
    });
}

const inscriptionPost = async (req, res) => {
    const query = await insert_user(req.body);
    if(query.errno){
        return res.status(400).json({
            status: 400,
            message: 'Bad Request'
        });
    }
    return res.status(201).json({
        status: 201,
        message: 'Created'
    });
}

const inscription = async (req, res) => {
    return res.render('connexion/inscription.njk', {
        'type_url_api': 'inscription/',
        'user': req.session.user
    });
}

const login = (req, res) => {
    req.session.regenerate(function (err) {
        if (err) {
            return res.status(400).json({
                status: 400,
                message: 'Bad Request'
            });
        }
        req.session.user = req.body.email;

        req.session.save(function (err) {
            if (err) {
                return res.status(400).json({
                    status: 400,
                    message: 'Bad Request'
                });
            }
        })
        return res.status(301).json({
            status: 301,
            message: 'Redirect',
            url: `${req.origin}/`
        });
    })
}


const logout = (req, res) => {
    req.session.user = null
    req.session.save(function (err) {
        if (err) {
            return res.status(400).json({
                status: 400,
                message: 'Bad Request'
            });
        }

        req.session.regenerate(function (err) {
            if (err) {
                return res.status(400).json({
                    status: 400,
                    message: 'Bad Request'
                });
            }
        })
        return res.redirect('/');
    })
}

export { connexion, inscription, logout, login, inscriptionPost };