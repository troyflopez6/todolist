import { FC } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import style from './style/home.module.scss'
import Header from '../../components/Header/Header'
interface Home {}

const Home: FC<Home> = () => {
  const { pathname } = useLocation()
  const withRightSideLayout = pathname === '/'
  return (<>
    <Navbar/>
    <main className={withRightSideLayout ? style.rightLayout : ''}>
      <Header pathname={pathname}/>
      <Outlet />
    </main>
  </>)
}

export default Home
