import { useNavigate } from "react-router-dom";
import { createApi } from "./api/create.api.tsx";
import socket from "../connect-websocket";

export const useCreateDirect = () => {
  const navigate = useNavigate();

  const createDirect = async (hostId: string, friendId: string) => {
    try {
      const response = await createApi(hostId, friendId);
      if ("error" in response) {
        console.error("Ошибка создания директ-комнаты:", response.error);
        alert("Не удалось создать директ-комнату");
        return null;
      }
      socket.emit('join-direct-room', response.id)

      console.log("Директ-комната создана:", response);
      navigate(`/direct/${response.id}`)
      return response.id;
    } catch (error) {
      console.error("Ошибка при создании директ-комнаты:", error);
      alert("Произошла ошибка при создании директ-комнаты");
      return null;
    }
  };

  return { createDirect };
};
