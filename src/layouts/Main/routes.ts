import { ROLE } from '@/helpers/enums';

import { IMenu } from '@/components/Menu/Types';

const routes: IMenu[] = [
  {
    key: '/',
    icon: 'Dashboard',
    title: 'dashboard',
    roles: [ROLE.ADMIN, ROLE.MODERATOR]
  },
  {
    key: '/networks',
    icon: 'Banner',
    title: 'networks',
    roles: [ROLE.ADMIN, ROLE.MODERATOR]
  },
  {
    key: '/banners',
    icon: 'Banner',
    title: 'banners',
    roles: [ROLE.ADMIN, ROLE.MODERATOR]
  },
  {
    key: '/blogs',
    icon: 'Video',
    title: 'blogs',
    roles: [ROLE.ADMIN, ROLE.MODERATOR]
  },
  {
    key: '/partners',
    icon: 'Partner',
    title: 'partners',
    roles: [ROLE.ADMIN, ROLE.MODERATOR]
  },
  {
    key: '/page-infos',
    icon: 'Banner',
    title: 'page_infos',
    roles: [ROLE.ADMIN, ROLE.MODERATOR]
  },
  {
    key: '/users',
    icon: 'UserCircle',
    title: 'users',
    roles: [ROLE.ADMIN]
  },
  {
    key: '/translations',
    icon: 'Translation',
    title: 'translations',
    roles: [ROLE.ADMIN, ROLE.MODERATOR]
  },
];

export default routes;
