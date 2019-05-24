module.exports = function (server, knex, errs) {

    server.post('/userphoto', (req, res, next) => {

        knex('user_photo')
            .insert(req.body)
            .then((data) => {
                if(!data) return res.send(new errs.BadRequestError('Erro na inclusão da foto'))
                res.send(data);
            }, next)

    });

}