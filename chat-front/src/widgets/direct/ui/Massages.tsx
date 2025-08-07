import { useEffect, useState } from "react";
import { useMassageStore } from "../store/massage.store.tsx";
import getAllMassagesApi from "../api/getAllMassages.api.tsx";
import { useParams } from "react-router-dom";
import findUserBySessionApi from "../../../entities/user/api/findUserBySession.api.tsx";
import type { UserModel } from "../../../entities/user/model/user.model.tsx";
import socket from "../../../features/connect-websocket";

function Massages() {
  const { massages, addMany, add } = useMassageStore();
  const { id: directId } = useParams();
  const [user, setUser] = useState<UserModel | null>();

  useEffect(() => {
    const fetchMassages = async () => {
      setUser(await findUserBySessionApi());
      if (directId) {
        const response = await getAllMassagesApi(directId);
        console.log(directId);
        addMany(response);
      }
    };
    fetchMassages();
  }, [directId, addMany]);

  useEffect(() => {
    if (directId) {
      // Подключаемся к комнате
      socket.emit("join-direct-room", directId);
    }

    // Слушаем новые сообщения
    socket.on("message-received", (message) => {
      add(message);
    });

    // Очистка при размонтировании
    return () => {
      socket.off("message-received");
    };
  }, [directId, add]);

  return (
    <div className="border p-2 max-h-[300px] overflow-y-scroll pr-3">
      <div className="flex flex-col flex-wrap gap-1">
        {massages.map((m) => (
          <div
            key={m.id}
            className={`w-[240px] border p-1 overflow-hidden break-words ${
              m.userId === user?.id ? "mr-auto" : "ml-auto"
            }`}
          >
            <p
              className={`whitespace-normal ${
                m.userId === user?.id ? "text-left" : "text-right"
              }`}
            >
              {m.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Massages;
