import React from 'react';
import ReactDOM from 'react-dom';

import Footer from '../components/footer';
import Header from '../components/header';

const clientRender = () => {
  ReactDOM.render(
    <div className="components-container">
      <Header.Header />
      <Footer.Footer />
    </div>, document.getElementById('container'));
};

export default {clientRender};

if (document) {
  clientRender();
}
