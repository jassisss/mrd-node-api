module.exports = function (server, knex, errs) {

    server.put('/userphoto/:id', (req, res, next) => {

        const md5 = require('md5');

        const md5Date = md5(new Date());

        const { id } = req.params;

        const base64data = new Buffer.from(req.body.img, "base64");

        const photo = req.body;

        photo.date_update = new Date();

        photo.name = photo.name + '_' + md5(photo.name + md5Date);

        photo.img = base64data;

        knex('user_photo')
            .where('user_id', id)
            .update(photo)
            .then((data) => {
                if(!data) return res.send(new errs.NotFoundError('Erro na alteração'))
                res.send('Dados atualizados');
            }, next)

    });

}