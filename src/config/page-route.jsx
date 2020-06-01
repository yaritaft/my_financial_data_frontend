import React from 'react';


// Components
import Home from '/pages/home.js'
import Account from '/pages/account.js'



const routes = [
  {
    path: '/',
    title: 'Home',
    component: () => <Home />
  },
  {
    path: '/account/',
    title: 'Account',
    component: () => <Account />
  }
  // ,
  // {
  //   path: '/card',
  //   title: 'Home',
  //   component: () => <Home />
  // },
  // {
  //   path: '/transaction',
  //   title: 'Home',
  //   component: () => <Home />
  // },
  // {
  //   path: '/dashboard',
  //   title: 'Home',
  //   component: () => <Home />
  // }

]


export default routes;