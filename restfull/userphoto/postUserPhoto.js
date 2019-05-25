module.exports = function (server, knex, errs) {

    server.post('/userphoto', (req, res, next) => {

        const base64data = new Buffer.from(req.body.img, "base64");
        req.body.img = base64data;
        knex('user_photo')
            .insert(req.body)
            .then((data) => {
                if(!data) return res.send(new errs.BadRequestError('Erro na inclusão da foto'))
                res.send(data);
            }, next)

    });

}