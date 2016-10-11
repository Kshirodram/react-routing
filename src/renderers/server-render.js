import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOMServer from 'react-dom/server';

import Footer from '../components/footer';
import Header from '../components/header';

const serverRender = () => (
  ReactDOMServer.renderToString(
    <div className="components-container">
      <Header.Header />
      <Footer.Footer />
    </div>)
);

export default {serverRender};
