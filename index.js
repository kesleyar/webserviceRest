const restify = require('restify');

const server = restify.createServer({
    name: 'oportunidades-ti',
    version: '1.0.0'
});

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'u0zbt18wwjva9e0v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'cvsifa9wgrawbkv2',
        password: 'wzd2kvhuoo98027x',
        database: 'lev5vlhpma5n0mu6'
    }
});

const errs = require('restify-errors');

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});

//rotas
server.get('/', (req, res, next) => {
    knex('vaga').orderBy('empresa').then((dados) => {
        res.send(dados);
    }, next)
});

server.get('/positions/:id', (req, res, next) => {
    const { id } = req.params;

    knex('vaga').where('id', id).first().then((dados) => {
        if (!dados) return res.send(new errs.BadRequestError('Nenhum registro encontrado'));
        res.send(dados);
    }, next)
});

server.get('/positions.json', (req, res, next) => {
    var aux;
    var { description } = req.query;
    var { location } = req.query;
    var { full_time } = req.query;

    if (full_time == 'false') {
        aux = 0;
    } else if (full_time == 'true') {
        aux = 1;
    }

    if (description != undefined) {
        if (location != undefined) {
            if (full_time != undefined) {
                //todos os parametros
                console.log('todos os parametros');
                knex('vaga').where('descricao', 'like', '%' + description + '%')
                    .orWhere('cidade', 'like', location)
                    .orWhere('periodo', 'like', aux)
                    .then((dados) => {
                        if (!dados) return res.send(new errs.BadRequestError('Nenhum registro encontrado'));
                        res.send(dados);
                    }, next)
            } else {
                console.log('dois parametros descrição e cidade');
                knex('vaga').where('descricao', 'like', '%' + description + '%')
                    .orWhere('cidade', 'like', location)
                    .then((dados) => {
                        if (!dados) return res.send(new errs.BadRequestError('Nenhum registro encontrado'));
                        res.send(dados);
                    }, next)
            }
        } else {
            if (full_time != undefined) {
                console.log('dois parametros descrição e periodo');
                knex('vaga').where('descricao', 'like', '%' + description + '%')
                    .orWhere('periodo', 'like', aux)
                    .then((dados) => {
                        if (!dados) return res.send(new errs.BadRequestError('Nenhum registro encontrado'));
                        res.send(dados);
                    }, next)
            } else {
                //um parametro descrição 
                console.log('um parametro descrição');
                knex('vaga').where('descricao', 'like', '%' + description + '%')
                    .then((dados) => {
                        if (!dados) return res.send(new errs.BadRequestError('Nenhum registro encontrado'));
                        res.send(dados);
                    }, next)
            }
        }

    } else {
        if (location != undefined) {
            if (full_time != undefined) {
                //dois parametros cidade e periodo
                console.log('dois parametros cidade e periodo');
                knex('vaga').where('cidade', 'like', location)
                    .orWhere('periodo', 'like', aux)
                    .then((dados) => {
                        if (!dados) return res.send(new errs.BadRequestError('Nenhum registro encontrado'));
                        res.send(dados);
                    }, next)
            } else {
                console.log('um parametro cidade');
                knex('vaga').where('cidade', 'like', location)
                    .then((dados) => {
                        if (!dados) return res.send(new errs.BadRequestError('Nenhum registro encontrado'));
                        res.send(dados);
                    }, next)
            }
        } else {
            //um parametro periodo
            console.log('um parametro periodo');
            knex('vaga').where('periodo', 'like', aux)
                .then((dados) => {
                    if (!dados) return res.send(new errs.BadRequestError('Nenhum registro encontrado'));
                    res.send(dados);
                }, next)
        }
    }

});