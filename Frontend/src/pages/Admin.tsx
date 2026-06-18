import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { API_URL } from '../config/api';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export function Admin() {

  const [users, setUsers] = useState<User[]>([]);

  const { user } = useAuth();

  // Obtener lista de usuarios al cargar el componente 
  
  useEffect(() => {

    const fetchUsers = async () => {

      try {

        const token = localStorage.getItem('token');

        const response = await fetch(
          `${API_URL}/api/users/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        console.log(data);

        setUsers(data);

      } catch (error) {

        console.error(error);

      }

    };

    fetchUsers();

  }, []);

  // Función para eliminar un usuario

  const handleDelete = async (id: number) => {

  const confirmed = window.confirm(
    'Are you sure you want to delete this user?'
  );

  if (!confirmed) {

    return;

  }

  try {

   const token = localStorage.getItem('token');

    const response = await fetch(
      `${API_URL}/api/users/${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    console.log(data);

    if (!response.ok) {

      alert(data.message);

      return;

    }

    setUsers(
      users.filter((user) => user.id !== id)
    );

  } catch (error) {

    console.error(error);

  }

  };

  //funcion para actualizar el rol de un usuario (admin o user)

  const handleRoleChange = async (
  id: number,
  role: string
  ) => {

  try {

    const token = localStorage.getItem('token');

    const response = await fetch(
      `${API_URL}/api/users/${id}/role`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          role,
        }),
      }
    );

    const updatedUser = await response.json();

    if (!response.ok) {

      alert(updatedUser.message);

      return;

    }

    setUsers(
      users.map((user) =>
        user.id === id
          ? updatedUser
          : user
      )
    );

  } catch (error) {

    console.error(error);

  }

  };




  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 to-slate-100 p-6">

      <div className="max-w-6xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <div className="bg-blue-600 text-white rounded-2xl p-6 mb-8 shadow-lg">

            <h1 className="text-3xl font-bold">
              Admin Panel
            </h1>
          
            <p className="text-blue-100 mt-2">
              Manage users and roles
            </p>
          
            </div>

          <div className="overflow-x-auto">

            <table className="w-full border border-slate-300 rounded-xl overflow-hidden">

              <thead>

                <tr className="border-b border-slate-200">

                  <th className="text-left py-4 px-3">
                    ID
                  </th>

                  <th className="text-left py-4 px-3">
                    Name
                  </th>

                  <th className="text-left py-4 px-3">
                    Email
                  </th>

                  <th className="text-left py-4 px-3">
                    Role
                  </th>

                  <th className="text-left py-4 px-3">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {users.map((listedUser) => (

                  <tr
                    key={listedUser.id}
                    className="border-b border-slate-100 hover:bg-slate-50"
                  >

                    <td className="py-4 px-3">
                      {listedUser.id}
                    </td>

                    <td className="py-4 px-3 font-medium">
                      {listedUser.name}
                    </td>

                    <td className="py-4 px-3">
                      {listedUser.email}
                    </td>

                    <td className="py-4 px-3">

                    <select
                    value={listedUser.role}
                    disabled={listedUser.id === user?.id}
                    onChange={(e) =>
                      handleRoleChange(
                        listedUser.id,
                        e.target.value
                      )
                    }
                    className={`border rounded-lg px-3 py-2 ${
                      listedUser.id === user?.id
                        ? 'bg-slate-100 cursor-not-allowed'
                        : ''
                    }`}
                   >
                                      
                      <option value="user">
                        User
                      </option>
                    
                      <option value="admin">
                        Admin
                      </option>
                    
                    </select>
                    
                    </td>

                    <td className="py-4 px-3">

                      {listedUser.id === user?.id ? (

                   <span className="text-blue-600 font-medium">
                     Current Admin
                   </span>

                  ) : (

                    <button
                    onClick={() => handleDelete(listedUser.id)}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full text-sm"
                    >
                     Delete
                    </button>

                    )}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}