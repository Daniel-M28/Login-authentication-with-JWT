import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

    
export function Profile() {

  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {

  logout();

 navigate('/login', { replace: true });

};

  return (
   
<div className="min-h-screen bg-gradient-to-br from-sky-200 to-slate-100 flex items-center justify-center px-4">

  <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6">

    {/* Header */}
    <div className="text-center mb-5">

      <div className="w-18 h-18 mx-auto mb-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
        {user?.name?.charAt(0).toUpperCase()}
      </div>

      <h1 className="text-2xl font-bold text-slate-800">
        Welcome, {user?.name}
      </h1>

      <p className="text-slate-500 text-sm mt-1">
        Your account information
      </p>

    </div>

    {/* Info */}
    {user && (
      <div className="space-y-3">

        {/* Name */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl px-4 py-3">
          
          <p className="text-xs text-slate-500">
            Name
          </p>

          <p className="text-base font-semibold text-slate-800">
            {user.name}
          </p>

        </div>

        {/* Email */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl px-4 py-3">
          
          <p className="text-xs text-slate-500">
            Email
          </p>

          <p className="text-base font-semibold text-slate-800 break-all">
            {user.email}
          </p>

        </div>

        {/* Role */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl px-4 py-3">
          
          <p className="text-xs text-slate-500">
            Role
          </p>

          <p className="text-base font-semibold text-slate-800 capitalize">
            {user.role}
          </p>

        </div>

         {/* Admin panel */}
          {user?.role === 'admin' && (
            <button
              onClick={() => navigate('/admin')}
              className="w-full py-3 mt-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" >
            Admin Panel
            </button>
          )}




        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full py-3 mt-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          Logout
        </button>

      </div>
    )}

  </div>

</div>


  );

}