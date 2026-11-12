import React from 'react';

const Header = (props) => {
  const { logo, texto } = props;

  return (
    <header className="comp-header">
      <div className="header-wrapper">
        <h1 className="header-title">Webs de Empresa</h1>
        {logo && <img src={logo} alt="la imagen del logo" className="header-logo-img" />}
        <span className="header-tagline">{texto}</span>
      </div>
    </header>
  );
};

export default Header;
