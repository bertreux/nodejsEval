import {
    delete_pays_by_id,
    get_all_pays,
    get_one_pays_by_id,
    insert_new_pays,
    update_pays_by_id
} from "../repositories/pays_repository.js";

const tableauOfPaysBack = async (req, res) => {
    const pays = await get_all_pays();
    return res.render('back/pays/index.njk', {
        'pays': pays,
        'user': req.session.user
    });
}

const showOfPaysBack = async (req, res) => {
    const { id } = { ...req.params };
    const pays = await get_one_pays_by_id(id);
    return res.render('back/pays/show.njk', {
        'pays': pays[0],
        'user': req.session.user
    })
}

const deleteOfPaysBack = async (req, res) => {
    const { id } = { ...req.params };
    const query = await delete_pays_by_id(id);
    const pays = await get_all_pays();
    return res.render('back/pays/index.njk', {
        'pays': pays,
        'user': req.session.user
    });
}


const editOfPaysBack = async (req, res) => {
    const { id } = { ...req.params };
    const pays = await get_one_pays_by_id(id);
    return res.render('back/pays/form.njk', {
        'pays': pays[0],
        'title': 'Pays modif',
        'type_url_api': pays[0].id_pays+'/edit/',
        'user': req.session.user
    })
}

const insertDataEditOfPaysBack = async (req, res) => {
    const { id } = { ...req.params };
    const body = req.body;
    const query = await update_pays_by_id(id, body);
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


const newOfPaysBack = (req, res) => {
    return res.render('back/pays/form.njk', {
        'pays': null,
        'title': 'Pays creation',
        'type_url_api': 'new/',
        'user': req.session.user
    })
}

const insertDataNewOfPaysBack = async (req, res) => {
    const body = req.body;
    const query = await insert_new_pays(body);
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

    export { tableauOfPaysBack, showOfPaysBack, editOfPaysBack, newOfPaysBack, insertDataNewOfPaysBack, deleteOfPaysBack, insertDataEditOfPaysBack };