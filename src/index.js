import dotenv from 'dotenv';
import express from 'express';
import contactsRouter from './api/contacts';
import bodyParser from 'body-parser';
import postsRouter from './api/posts';

import favicon from 'serve-favicon';
import logger  from 'morgan';

dotenv.config();

const app = express();

const port = process.env.PORT;

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// app.use(express.static('public'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger(''));
    app.use(express.static(__dirname + '/public'));

app.use('/api/contacts', contactsRouter);
app.use('/api/posts', postsRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
