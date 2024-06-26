import { Outlet } from 'react-router-dom';
import { Loader } from '@/shared/ui/loader';

export function Root() {
  return (
    <>
      <Loader />
      <div className="w-full min-h-[100vh] bg-gradient-to-r from-[rgba(4,2,42,1)] via-[rgba(4,2,55,1)] to-[rgba(4,34,48,1)] ">
        <Outlet />
      </div>
    </>
  );
}
