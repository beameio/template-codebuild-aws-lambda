import serverless from "serverless-http";
import _debug from "debug";
import express from "express";

const debug = _debug('beameio:codebuild-aws-lambda');
const app = new express();

app.get('/health', (req, res) => {
    debug('req: %j', req);
    res.send('OK');
});
app.get('/', (req, res) => {
    debug('req: %j', req);
    res.send(`Hello World ${process.env.APP_VERSION}!`);
});

export const handler = serverless(app);
