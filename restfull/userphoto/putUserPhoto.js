module.exports = function (server, knex, errs) {

    server.put('/userphoto/:id', (req, res, next) => {

        const { id } = req.params;

        knex('user_photo')
            .where('id', id)
            .update(req.body)
            .then((data) => {
                if(!data) return res.send(new errs.NotFoundError('Erro na alteração'))
                res.send('Dados atualizados');
            }, next)

    });

}