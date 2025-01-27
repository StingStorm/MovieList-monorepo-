import { ComponentType } from 'react';

export type SecureRouteProps = {
  component: ComponentType;
  redirectTo?: string;
};
