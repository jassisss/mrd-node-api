module.exports = function (server, knex, errs) {

    server.get('/userphoto', (req, res, next) => {

        knex('user_photo').then((data) => {
            if(!data) return res.send(new errs.NotFoundError('Nada foi encontrado'))
            res.send(data);
        }, next)

    });

}