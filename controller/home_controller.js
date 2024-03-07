const home = (req, res) => {
    return res.render('home/index.njk', {
        'user': req.session.user
    });
}

export { home };