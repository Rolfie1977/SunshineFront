import { useContext, useState } from "react";
import { CartContext } from "../../utils/CartContext";
import { NavLink } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import s from './Navbar.module.scss';

export const Navbar = () => {
  const { isCartOpen, toggleCart } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <>
      <nav className={s.navStyle}>
      <div className={s.logoStyle}>
          <h1><NavLink to={'/'}>Sunshine Coffee</NavLink></h1>
        </div>
        <button className={s.hamburger} onClick={toggleMenu}>
          <span className={isMenuOpen ? s.open : ''}>&#9776;</span>
        </button>
        <ul className={`${s.menuStyle} ${isMenuOpen ? s.active : ''}`}>
          <li><NavLink className={s.regionMenu}>Europa</NavLink></li>
          <li onClick={toggleCart}><p>Cart</p></li>
          <li><NavLink to={'/AccountPage'}>Login</NavLink></li>
        </ul>
      </nav>
      {isCartOpen && <Cart onClose={toggleCart} />} 
    </>
  );
};