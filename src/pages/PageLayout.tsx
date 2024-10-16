import SideMenu from '@/components/SideMenu';
import { Outlet } from 'react-router-dom';

function PageLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <SideMenu />

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-y-auto bg-gray-100">
        <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
          <div className="flex items-center px-4">Test1</div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default PageLayout;
