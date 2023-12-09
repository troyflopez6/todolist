import { HomeIcon, TaskIcon } from '../components/icons/Icons';
import { SideNavbar } from '../interface/icons';

export const sideNavbar: SideNavbar[] = [
  {
    name: 'Dashboard',
    icon: <HomeIcon/>,
    link:'/',
  },
  {
    name: 'Tasks',
    icon: <TaskIcon/>,
    link:'/tasks',  
  },
]