import { Link } from 'react-router-dom';

export function Error404() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 to-slate-100 flex items-center justify-center px-4">
      <div className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden p-10 md:p-16 text-center">

        {/* Formas decorativas */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-sky-200/40 rounded-full -translate-x-24 -translate-y-24"></div>
        <div className="absolute top-10 right-0 w-56 h-56 bg-cyan-200/40 rounded-full translate-x-20 -translate-y-10"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-blue-100/30 rounded-full -translate-x-1/2 translate-y-44"></div>

        {/* Contenido */}
        <div className="relative z-10">
          {/* Número 404 */}
          <h1 className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent mb-4">
            404
          </h1>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Page Not Found
          </h2>

          {/* Descripción */}
          <p className="text-slate-500 text-lg leading-relaxed max-w-md mx-auto mb-10">
            Sorry, the page you are looking for does not exist or may have been moved.
          </p>

          {/* Botón */}
          <Link to="/">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}