module.exports = function (server, knex, errs) {

    server.del('/userphoto/:id', (req, res, next) => {

        const { id } = req.params;

        knex('user_photo')
            .where('id', id)
            .delete()
            .then((data) => {
                if(!data) return res.send(new errs.NotFoundError('Nada foi encontrado'))
                res.send({id});
            }, next)

    });

}