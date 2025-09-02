import { LogOut } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();

  return (
  <nav className="bg-white shadow-sm border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600 tracking-tight">
          &lt;CMS/&gt;
        </h1>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 font-medium hidden sm:inline">
            Welcome, {user.name}
          </span>
          <button
            onClick={logout}
            className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium 
                       text-gray-600 hover:text-white hover:bg-red-500 
                       rounded-lg transition-colors duration-200 cursor-pointer"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>

      </div>
    </div>
  </nav>
);

};

export default Header;
