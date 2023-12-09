import { FC } from 'react'
import style from './style/header.module.scss'
import { CommentsIcon, MessageIcon, NotificationIcon, SearchIcon } from '../icons/Icons'
interface HeaderProps {
  title?: string
  pathname?: string
}

const Header: FC<HeaderProps> = ({ title = 'Dashboard', pathname }) => {
  const showHeader = pathname === '/'
  return (
    <>
      {showHeader && 
        <header>
          {title && 
          <p className={style.title}>
            {title}
          </p>
          }
          <div className={style.headerItem}>
            <div className={style.search}>
              <SearchIcon className={style.searchIcon} height={20} width={20}/>
              <input type="text" placeholder='Search Tasks...'/>
            </div>
            <div className={style.headerMenu}>
              <NotificationIcon />
              <CommentsIcon />
              <MessageIcon />
            </div>
          </div>
        </header>
      }
    </>
  )}

export default Header