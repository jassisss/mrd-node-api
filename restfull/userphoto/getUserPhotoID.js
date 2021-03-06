module.exports = function (server, knex, errs) {

    server.get('/userphoto/:id', (req, res, next) => {

        const { id } = req.params;

        knex('user_photo')
            .where('id', id)
            .first()
            .then((data) => {
                if(!data) return res.send(new errs.NotFoundError('Nada foi encontrado'))
                res.send(data);
            }, next)

    });

}