import Sidebar from "../components/layout/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}

export default DashboardLayout;
