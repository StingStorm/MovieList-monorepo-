import { ReactNode, Suspense } from 'react';
import AppBar from '@components/AppBar';
import Loader from '../ui/Loader';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
};

export default Layout;
