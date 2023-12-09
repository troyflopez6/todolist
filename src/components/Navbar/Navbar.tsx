import  { FC } from 'react';
import { sideNavbar } from '../../constants/navbar';
import style from './style/navbar.module.scss'
import { LogoutIcon, SettingsIcon, UserIcon } from '../icons/Icons';
import { NavLink } from 'react-router-dom';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const name = 'Troy Lopez'
  
  return (
    <nav>
      <div className={style.user}>
        <div className={style.icon}>
          <UserIcon viewBox = '7 0 48 48'/>
        </div>
        <div className={style.userDetails}>
          {name}
        </div>
      </div>
      <div className={style.navItemsContainer}>
        <div className={style.topNavItems}>
          {sideNavbar.map((nav, i) => (
            <NavLink
              key={`${i}-${nav.name}`} 
              className={`${style.navItem}`}
              to={nav.link}
            >
              <div className={style.itemIcon}>
                {nav.icon}
              </div>
              <div className={style.itemName}>
                {nav.name}
              </div>
            </NavLink>
          ))}
        </div>
        <hr/>
        <div className={style.bottomNavItems}>
          <NavLink to={'/settings'} className={({ isActive }) =>
            isActive ? style.error : style.navItem
          }>
            <SettingsIcon viewBox='0 0 24 24'/>
            <span>
              Settings
            </span>
          </NavLink>
          <div className={style.navItem}>
            <LogoutIcon/>
            <span>
              Logout
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;