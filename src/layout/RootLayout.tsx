import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const RootLayout = () => {
  return (
    <div className="text-dark-100">
      <Suspense fallback={<p>Loading</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default RootLayout;
