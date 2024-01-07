import { IMenu } from '@/components/Menu/Types';

const routes: IMenu[] = [
  {
    key: '/',
    icon: 'Dashboard',
    title: 'dashboard',
    roles: ['admin'],
  },
  {
    key: '/social-networks',
    icon: 'Banner',
    title: 'social_networks',
    roles: ['admin'],
  },
  {
    key: '/banners',
    icon: 'Banner',
    title: 'banners',
    roles: ['admin'],
  },
  {
    key: '/blogs',
    icon: 'Video',
    title: 'blogs',
    roles: ['admin'],
  },
  {
    key: '/aphorisms',
    icon: 'Partner',
    title: 'aphorisms',
    roles: ['admin'],
  },
  {
    key: '/rectors',
    icon: 'Partner',
    title: 'rectors',
    roles: ['admin'],
  },
  {
    key: '/employees',
    icon: 'Partner',
    title: 'employees',
    roles: ['admin'],
  },
  {
    key: '/media-categories',
    icon: 'Video',
    title: 'media_categories',
    roles: ['admin'],
  },
  {
    key: '/partners',
    icon: 'Partner',
    title: 'partners',
    roles: ['admin'],
  },
  {
    key: '/faqs',
    icon: 'Partner',
    title: 'faqs',
    roles: ['admin'],
  },
  {
    key: '/departments',
    icon: 'Partner',
    title: 'departments',
    roles: ['admin'],
  },
  {
    key: '/page-infos',
    icon: 'Banner',
    title: 'page_infos',
    roles: ['admin'],
  },
  {
    key: '/users',
    icon: 'UserCircle',
    title: 'users',
    roles: ['admin'],
  },
  {
    key: '/translations',
    icon: 'Translation',
    title: 'translations',
    roles: ['admin'],
  },
];

export default routes;
