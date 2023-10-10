import { lazy } from 'react';

import { ROLE } from '@/helpers/enums';

export default [
  {
    path: '/',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Dashboard')),
  },
  {
    path: '/networks',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Network/List')),
  },
  {
    path: '/networks/create',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Network/Create')),
  },
  {
    path: '/networks/update/:id',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Network/Update')),
  },
  {
    path: '/banners',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Banner/List')),
  },
  {
    path: '/banners/create',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Banner/Create')),
  },
  {
    path: '/banners/update/:id',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Banner/Update')),
  },
  {
    path: '/blogs',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Blog/List')),
  },
  {
    path: '/blogs/create',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Blog/Create')),
  },
  {
    path: '/blogs/update/:id',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Blog/Update')),
  },
  {
    path: '/partners',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Partner/List')),
  },
  {
    path: '/partners/create',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Partner/Create')),
  },
  {
    path: '/partners/update/:id',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Partner/Update')),
  },
  {
    path: '/page-infos',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/PageInfo')),
  },
  {
    path: '/users',
    roles: [ROLE.ADMIN],
    Page: lazy(() => import('@/pages/User/List')),
  },
  {
    path: '/users/create',
    roles: [ROLE.ADMIN],
    Page: lazy(() => import('@/pages/User/Create')),
  },
  {
    path: '/users/update/:id',
    roles: [ROLE.ADMIN],
    Page: lazy(() => import('@/pages/User/Update')),
  },
  {
    path: '/translations',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Translation/List')),
  },
  {
    path: '/translations/create',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Translation/Create')),
  },
  {
    path: '/translations/update/:id',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Translation/Update')),
  },
];
