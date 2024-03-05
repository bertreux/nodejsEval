const connexion = (req, res) => {
    return res.render('connexion/connexion.njk');
}

const deconnexion = (req, res) => {
    return res.render('connexion/deconnexion.njk');
}

const inscription = (req, res) => {
    return res.render('connexion/inscription.njk');
}

export { connexion, deconnexion, inscription };