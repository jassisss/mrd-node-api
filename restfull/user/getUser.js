module.exports = function (server, knex, errs) {

	server.get('/user', (req, res, next) => {

		const newStatus = 4;

	    knex('user')
			.whereNot ('user_status_id', newStatus)
			.then((dados) => {
	    	if(!dados) return res.send(new errs.NotFoundError('nada foi encontrado'))
	        res.send(dados);
	    }, next)
	    
	});

}