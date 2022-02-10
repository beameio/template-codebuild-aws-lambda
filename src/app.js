const debug = require('debug')('beameio:codebuild-aws-lambda');

exports.handler = (event, context) => {
    debug('event: %o', event);
    debug('context: %o', context);

    return { statusCode: 200, body: `Hello World ${process.env.APP_VERSION}!` };
};