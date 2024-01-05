import React from 'react';

import * as Hooks from '@/modules/auth/hooks';

import RoleDenied from '@/pages/RoleDenied';

interface IProps {
  page: React.ReactNode;
  roles: string[];
}

const CheckRole: React.FC<IProps> = ({ page, roles }) => {
  const { profile } = Hooks.useAuth();

  if (!profile.role) return null;

  if (roles.includes(profile.role)) return <>{page}</>;

  return <RoleDenied />;
};

export default CheckRole;
