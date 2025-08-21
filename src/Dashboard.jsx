import { LayoutDashboard, Users, Settings, Bell, LogOut } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="flex items-center justify-center h-16 border-b">
          <h1 className="text-xl font-bold text-indigo-600 flex items-center gap-2">
            <LayoutDashboard className="w-5 h-5" />
            MyDashboard
          </h1>
        </div>
        <nav className="mt-4 space-y-2">
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
          >
            <Users className="w-5 h-5" />
            Users
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
          >
            <Settings className="w-5 h-5" />
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="flex items-center justify-between bg-white shadow-md h-16 px-6">
          <h2 className="text-lg font-semibold">Dashboard Overview</h2>
          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-indigo-600" />
            <LogOut className="w-5 h-5 text-gray-600 cursor-pointer hover:text-red-600" />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-sm font-medium text-gray-500">Users</h3>
              <p className="text-2xl font-bold text-indigo-600">1,245</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
              <p className="text-2xl font-bold text-green-600">$56,200</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-sm font-medium text-gray-500">Orders</h3>
              <p className="text-2xl font-bold text-orange-600">320</p>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="min-w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-sm font-medium text-gray-600">Name</th>
                  <th className="px-6 py-3 text-sm font-medium text-gray-600">Role</th>
                  <th className="px-6 py-3 text-sm font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">John Doe</td>
                  <td className="px-6 py-4">Admin</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">Active</td>
                </tr>
                <tr className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">Jane Smith</td>
                  <td className="px-6 py-4">Editor</td>
                  <td className="px-6 py-4 text-yellow-600 font-semibold">Pending</td>
                </tr>
                <tr className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">Mike Johnson</td>
                  <td className="px-6 py-4">Viewer</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">Inactive</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
