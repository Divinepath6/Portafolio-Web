import React, { useState, useEffect } from 'react';
import '../css/principal.css';

const MenuContenedor = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`contenedor-menu ${isScrolled ? 'menu-sticky' : ''}`}>
      {children}
    </div>
  );
};

export default MenuContenedor;