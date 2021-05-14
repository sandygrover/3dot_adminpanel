import React from 'react'
import CIcon from '@coreui/icons-react'
var current=1
localStorage.getItem('current',current)
function chg(){
  if(localStorage.getItem('current')==1){
    localStorage.setItem('current',0)
  }
  else{
    localStorage.setItem('current',1)
  }
  window.location.reload()
}
const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    onClick : chg,
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Uniswap',
    //icon: 'cil-star',
    icon: <img alt="uniswap" className="c-sidebar-brand-full sidebar_icon" height="20" src={'icons/uniswap.svg'}/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Pool Explorer',
        to: '/uniswap_pool_explorer',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Pair Explorer',
        to: '/uniswap_pair_explorer',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Big Swap Explorer',
        to: '/big_swap_explorer',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pancake',
    icon: <img alt="uniswap" className="c-sidebar-brand-full sidebar_icon" height="20" src={'icons/pancake.svg'}/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Pair Explorer',
        to: '/pancake_pair_explorer',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Trending Pairs',
        to: '/pancake_trending_pairs',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'User Profile',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Wallet',
        to: '/wallet',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Profile',
        to: '/user_profile',
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Calculator',
    to: '/calculator',
    icon: 'cil-calculator'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Switch to BSC',
    className:'switch',
    to: '/',
    //icon: 'cil-puzzle'
    icon: <img alt="switch" className="c-sidebar-brand-full sidebar_icon switchimg" onClick={chg} height="20" src={localStorage.getItem('current')==1 ? 'icons/ethereum.svg'  : 'icons/bsc.svg'}/>
  },
  /*
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Base',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cards',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Forms',
        to: '/base/forms',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Jumbotron',
        to: '/base/jumbotrons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Navs',
        to: '/base/navs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Navbars',
        to: '/base/navbars',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Progress',
        to: '/base/progress-bar',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Switches',
        to: '/base/switches',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tables',
        to: '/base/tables',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tabs',
        to: '/base/tabs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Buttons',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Brand buttons',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Dropdowns',
        to: '/buttons/button-dropdowns',
      }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Charts',
    to: '/charts',
    icon: 'cil-chart-pie'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Widgets',
    to: '/widgets',
    icon: 'cil-calculator',
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Extras'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pages',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register',
        to: '/register',
      },
    ],
  },
  */
  
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
