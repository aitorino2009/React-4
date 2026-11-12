import React from 'react';
import Header from './comp_Header.jsx';

const empresa = {
  nombre: 'Ibserveis',
  servicios: 'Páginas web y programación '
};

const imagenlogo = 'https://fakeimg.pl/150x50/?text=logo+empresa';
const texto_Header = 'Trabajos en internet';

const Principal = (props) => {
  const { slogan } = props;
  return (
    <main className="web-main">
      <div className="main-wrapper">
        <h2>{slogan}</h2>
        <p>
          Nuestra empresa <strong>{empresa.nombre}</strong> le ofrece servicios de{' '}
          <em>{empresa.servicios}</em>
        </p>
      </div>
    </main>
  );
};

const Footer = () => (
  <footer className="web-footer">
    <div className="footer-wrapper">
      <p>Copyright 2022</p>
    </div>
  </footer>
);

const WebCompleta = () => {
  const texto_slogan = 'La primera empresa en hacerlo bien';
  return (
    <div className="web-completa-app">
      <Header logo={imagenlogo} texto={texto_Header} />
      <Principal slogan={texto_slogan} />
      <br /><br />
      <Footer />
    </div>
  );
};

export default WebCompleta;
export { Header, Principal, Footer, empresa, imagenlogo, texto_Header };
