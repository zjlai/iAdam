
export default [
  {
    path: '/',
    component: () => import('layouts/footermenu'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },

  {
    path: '/info',
    component: () => import('layouts/footermenu'),
    children: [
      { path: '', component: () => import('pages/info') },
      { path: 'details/:id', component: () => import('pages/message') }
    ]
  },

  {
    path: '/activities',
    component: () => import('layouts/footermenu'),
    children: [
      { path: '', component: () => import('pages/activities') },
      { path: 'details/:id', component: () => import('pages/message') }
    ]
  },

  {
    path: '/subdetails',
    component: () => import('layouts/footermenu'),
    children: [
      { path: '', component: () => import('pages/subdetails') }
    ]
  },

  {
    path: '/treemap',
    component: () => import('layouts/footermenu'),
    children: [
      { path: '', component: () => import('pages/treemap') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
