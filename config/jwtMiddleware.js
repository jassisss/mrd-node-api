
const jwt = require('jsonwebtoken');
const errs = require('restify-errors');

const jwtMiddleware = (deps) => {
    return async (req, res, next) => {
        if (!deps.exclusions.includes(req.href())) {
            const token = req.headers['x-access-token'];

            if (!token) {
                res.send(new errs.UnauthorizedError('Token não fornecido'));
                return false;
            }

            try {
                req.decoded = jwt.verify(token, '5d5b7c0788f2b69e3fb13c19339feab1');
            } catch (error) {
                res.send(new errs.UnauthorizedError('Falha ao autenticar o token'));
                return false;
            }
        }

        next();
    }
};

module.exports = jwtMiddleware;
