import { useEffect, useState } from "react";
import axios from "axios";
import ViewUser from "./ViewUser.tsx";

interface User {
  id: string;
  name: string;
  email: string;
}

export const SearchBar = () => {
  const [prefix, setPrefix] = useState("");
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (prefix.trim()) {
        const response = await axios.post(
          "http://localhost:3000/users/search-by-email",
          { prefix },
          { withCredentials: true }
        );
        setUsers(response.data);
      } else {
        setUsers(undefined);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [prefix]);

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          placeholder="Поиск пользователей..."
          onChange={(e) => setPrefix(e.target.value)}
          className="w-full px-4 py-3 pr-10 text-gray-700  bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      {users && users.length > 0 && <ViewUser users={users} />}
    </div>
  );
};
