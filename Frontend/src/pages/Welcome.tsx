import {Link} from 'react-router-dom';

export function Welcome(){

    return (
  <div className="min-h-screen bg-gradient-to-br from-sky-200 to-slate-100 flex items-center justify-center px-4">
    <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-[2rem] shadow-2xl overflow-hidden">
      
      {/* Panel izquierdo */}
      <div className="relative bg-gradient-to-r from-sky-500 to-blue-600 text-white p-12 flex flex-col justify-center items-center">
        {/* Formas decorativas */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-20 -translate-y-20"></div>
        <div className="absolute top-10 right-0 w-56 h-56 bg-white/10 rounded-full translate-x-16 -translate-y-10"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-white/5 rounded-full -translate-x-1/2 translate-y-40"></div>

        {/* Contenido */}
        <div className="relative z-10 text-center">
         

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome
          </h1>

          <p className="text-lg leading-relaxed text-white/90 max-w-md">
            This is an authentication app built with React, Node.js,
            Express, TypeScript and PostgreSQL.
          </p>
        </div>
      </div>

      {/* Panel derecho */}
      <div className="bg-white p-10 md:p-14 flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-3">
          Get Started
        </h2>

        <p className="text-slate-500 mb-10 max-w-sm">
          Login to your account or create a new one to continue.
        </p>

        <div className="w-full max-w-xs space-y-4">
          <Link to="/login" className="block">
            <button className="w-full py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Login
            </button>
          </Link>

          <Link to="/register" className="block">
            <button className="w-full py-3 rounded-full border-2 border-sky-500 text-sky-600 font-semibold hover:bg-sky-50 hover:-translate-y-1 transition-all duration-300">
              Register
            </button>
          </Link>
        </div>

        <p className="mt-8 text-sm text-slate-400">
          Secure authentication with JWT and PostgreSQL
        </p>
      </div>
    </div>
  </div>
);
    
  




}