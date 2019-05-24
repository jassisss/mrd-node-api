module.exports = function (server, knex, errs) {

    server.get('/userphotouser/:id', (req, res, next) => {

        const { id } = req.params;

        knex('user_photo')
            .where('user_id', id)
            .first()
            .then((data) => {
                if(!data) return res.send(new errs.NotFoundError('Nada foi encontrado'))
                res.send(data);
            }, next)

    });

}