import { lazy } from 'react';

import { ROLE } from '@/helpers/enums';

export default [
  {
    path: '/',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Dashboard')),
  },
  {
    path: '/social-networks',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/SocialNetwork/List')),
  },
  {
    path: '/social-networks/create',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/SocialNetwork/Create')),
  },
  {
    path: '/social-networks/update/:id',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/SocialNetwork/Update')),
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
    path: '/faqs',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Faq/List')),
  },
  {
    path: '/faqs/create',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Faq/Create')),
  },
  {
    path: '/faqs/update/:id',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Faq/Update')),
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
