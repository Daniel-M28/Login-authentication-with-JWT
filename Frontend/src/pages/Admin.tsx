export function Admin() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-sky-200 to-slate-100 flex items-center justify-center">

      <div className="bg-white p-10 rounded-3xl shadow-2xl">

        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Admin Panel
        </h1>

        <p className="text-slate-500">
          Only admins can access this page.
        </p>

      </div>

    </div>

  );

}