module.exports = function (server, knex, errs) {

    server.post('/userphoto', (req, res, next) => {

        const md5 = require('md5');

        const md5Date = md5(new Date());

        const base64data = new Buffer.from(req.body.img, "base64");

        const photo = req.body;

        photo.date_create = new Date();
        photo.date_update = new Date();

        photo.img = base64data;
        photo.name = photo.name + '_' + md5(photo.name + md5Date);

        knex('user_photo')
            .insert(photo)
            .then((data) => {
                if(!data) return res.send(new errs.BadRequestError('Erro na inclusão da foto'))
                res.send(data);
            }, next)

    });

}