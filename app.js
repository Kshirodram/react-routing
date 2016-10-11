import express from 'express';
import marko from 'marko';

import serverRender from './src/renderers/server-render';

const app = express();
app.use('/dist', express.static(`${__dirname}/dist`));

const defaultTemplate = marko.load(`${__dirname}/src/pages/default.marko`);

app.get('/', (req, res) => {
  defaultTemplate.render({title: 'home', body: serverRender.serverRender()}, res);
});

app.listen(8080, () => {
  console.log('App listening on port 8080!');
});
