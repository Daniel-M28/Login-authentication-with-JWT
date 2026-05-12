import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (
    e: React.SyntheticEvent<HTMLFormElement, SubmitEvent> // tipo para el evento de submit del formulario 
  ) => {
    e.preventDefault();

    const response = await fetch(
      'http://localhost:3000/api/auth/login',  // URL del endpoint de login en el backend
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // Enviamos los datos en formato JSON
        },
        body: JSON.stringify({                 // Convertimos el email y password a JSON para enviarlos en el cuerpo de la solicitud
          email,
          password,
        }),
      }
    );

    const data = await response.json();        // Esperamos la respuesta del backend y la convertimos a JSON

    console.log(data);
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-sky-200 to-slate-100 flex items-center justify-center px-4">
    <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-[2rem] shadow-2xl overflow-hidden">
      
      {/* Panel izquierdo */}
      <div className="relative hidden md:flex bg-gradient-to-r from-sky-500 to-blue-600 text-white p-12 flex-col justify-center items-center">
        {/* Formas decorativas */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-20 -translate-y-20"></div>
        <div className="absolute top-10 right-0 w-56 h-56 bg-white/10 rounded-full translate-x-16 -translate-y-10"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-white/5 rounded-full -translate-x-1/2 translate-y-40"></div>

        <div className="relative z-10 text-center">
         

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome Back
          </h1>

          <p className="text-lg leading-relaxed text-white/90 max-w-md">
            Sign in to access your account and continue using the
            authentication system.
          </p>
        </div>
      </div>

      {/* Panel derecho - Formulario */}
      <div className="bg-white p-8 md:p-14 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-slate-800 text-center mb-2">
          Login
        </h2>

        <p className="text-slate-500 text-center mb-8">
          Enter your credentials to continue
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 rounded-full bg-emerald-50 border border-emerald-100 text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 rounded-full bg-emerald-50 border border-emerald-100 text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Links */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-slate-500">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-sky-600 font-semibold hover:text-sky-700 transition"
            >
              Register
            </Link>
          </p>

          <p className="text-slate-500">
            Back to{" "}
            <Link
              to="/"
              className="text-sky-600 font-semibold hover:text-sky-700 transition"
            >
              Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);
}