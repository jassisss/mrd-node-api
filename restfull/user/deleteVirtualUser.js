module.exports = function (server, knex, errs) {

    server.put('/userdelete/:id', (req, res, next) => {

        const { id } = req.params;

        const newDate = new Date();

        const newStatus = 4;

        knex('user')
            .where('id', id)
            .update({ date_update: newDate, user_status_id: newStatus })
            .then((dados) => {
                if(!dados) return res.send(new errs.NotFoundError('nada foi encontrado'))
                res.send(id);
            }, next)

    });

}