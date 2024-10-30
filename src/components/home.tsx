"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingUserId, setEditingUserId] = useState<number | null>(null);

  // Função para adicionar usuário
  const addUser = () => {
    if (name && email) {
      setUsers([...users, { id: Date.now(), name, email }]);
      setName("");
      setEmail("");
    }
  };

  // Função para deletar usuário
  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Função para iniciar edição
  const startEdit = (user: User) => {
    setEditingUserId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  // Função para salvar edição
  const saveEdit = () => {
    setUsers(
      users.map((user) =>
        user.id === editingUserId ? { ...user, name, email } : user
      )
    );
    setEditingUserId(null);
    setName("");
    setEmail("");
  };

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">User Management CRUD</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />

        {editingUserId ? (
          <Button
            onClick={saveEdit}
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Save
          </Button>
        ) : (
          <Button
            onClick={addUser}
            className="w-full bg-green-500 text-white py-2 rounded"
          >
            Add User
          </Button>
        )}
      </div>

      <ul className="w-full max-w-md mt-6">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-white p-4 rounded shadow-md mb-3 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => startEdit(user)}
                className="text-blue-500 bg-slate-300"
              >
                Edit
              </button>
              <button
                onClick={() => deleteUser(user.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
