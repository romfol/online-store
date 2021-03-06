import React from 'react';
import './header.css';
import { Logo, SearchIcon, ContactIcon, ShoppingCartIcon, ArrowDown } from '../icons/';
import { Filters } from '../filters/filters';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__messaging-line">Line for messaging</div>
      <nav className="nav">
        <section className="nav__logo">
        <Link to="/">
          <Logo />
          </Link>
        </section>
        <section className="nav__search">
          <SearchIcon />
          <input className="nav__input" placeholder="Search" />
        </section>
        <section className="nav__menu">
          <div>Shag</div>
          <div>Contemporary</div>
          <div>
            More Styles <ArrowDown />
          </div>
          <div>Sale</div>
          <div>Shop All Rugs</div>
        </section>
        <section className="nav__icons">
          <div className="nav__contact">
            <ContactIcon />
          </div>
          <div className="nav__shopping-cart">
            <ShoppingCartIcon />
          </div>
        </section>
      </nav>
      <section className="header__photo" />
      <Filters />
    </header>
  );
};

export default Header;
