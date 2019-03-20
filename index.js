const Koa = require('koa');
const app = new Koa();

const PORT = 3001;
const HOST = '0.0.0.0';

app.use(async ctx => {
    ctx.body = "A said hey! what's going on!?";
});

app.listen(PORT, HOST);
