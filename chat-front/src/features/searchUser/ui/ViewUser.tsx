import { useParams } from "react-router-dom";
import { useCreateDirect } from "../../createDirect";
import { useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface ViewUserProps {
  users: User[];
}

const ViewUser = ({ users }: ViewUserProps) => {
  const { createDirect } = useCreateDirect();
  const { id } = useParams();
  const [loading, setLoading] = useState<string | null>(null); // ID пользователя для которого идёт создание

  const handleUserClick = async (userId: string) => {
    if (id && id !== userId && !loading) {
      // Проверяем что это не тот же пользователь и не идёт уже создание
      setLoading(userId);
      try {
        await createDirect(id, userId);
      } finally {
        setLoading(null);
      }
    }
  };

  return (
    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
      {users.map((user) => (
        <div
          key={user.id}
          className={`px-4 py-3 border-b border-gray-100 last:border-b-0 transition-colors duration-150 ${
            id === user.id
              ? "bg-gray-100 cursor-not-allowed"
              : loading === user.id
              ? "bg-gray-50 cursor-wait"
              : "hover:bg-gray-50 cursor-pointer"
          }`}
          onClick={() => handleUserClick(user.id)}
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user.name}
              </p>
              <p className="text-sm text-gray-500 truncate">{user.email}</p>
            </div>
            {id === user.id && (
              <span className="text-xs text-gray-400">(Вы)</span>
            )}
            {loading === user.id && (
              <span className="text-xs text-blue-500">Создание...</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewUser;
