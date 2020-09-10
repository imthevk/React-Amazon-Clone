import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/amazon-com-light.svg" alt="logo"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* {logo} */}
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header_menu">
          <span className="menu_lineOne">Hello</span>
          <span className="menu_lineTwo">Sign In</span>
        </div>
        <div className="header_menu">
          <span className="menu_lineOne">Returns</span>
          <span className="menu_lineTwo">& Orders</span>
        </div>
        <div className="header_menu">
          <span className="menu_lineOne">Your</span>
          <span className="menu_lineTwo">Prime</span>
        </div>
        <div className="header__shoppingCart">
          <ShoppingCartIcon  className=""/>
          <span className="menu_lineTwo cart__count">0</span>
        </div>
      </div>
    </div>
  );
}
