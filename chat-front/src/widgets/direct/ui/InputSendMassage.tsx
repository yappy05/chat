import { useEffect, useState } from "react";
import * as React from "react";
import sendMassageApi from "../api/sendMassage.api.tsx";
import { useParams } from "react-router-dom";
import findUserBySessionApi from "../../../entities/user/api/findUserBySession.api.tsx";
import {useMassageStore} from "../store/massage.store.tsx";
import socket from "../../../features/connect-websocket";

function InputSendMassage() {
    const [massage, setMassage] = useState("");
    const { id: directId } = useParams();
    const [userId, setUserId] = useState("");
    const {add} = useMassageStore()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await findUserBySessionApi();
                setUserId(user.id);
            } catch (e) {
                console.log("не получилось получить пользователя ", e);
            }
        };
        fetchUser();
    }, []);

    const handelSendMassage = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(massage)
        console.log(userId)
        console.log(directId)
        if (userId && directId && massage.trim()) {
            try {
                const mess = await sendMassageApi({ text: massage, userId, directId });
                socket.emit('send-message', {
                    text: massage,
                    directId,
                    userId,
                });
                add(mess)
                setMassage(""); // очищаем поле после отправки
            } catch (e) {
                console.log("Ошибка при отправке сообщения", e);
            }
        }
    };

    return (
        <form onSubmit={handelSendMassage}>
            <div className="flex flex-row gap-2">
                <input
                    type="text"
                    placeholder="Сообщение..."
                    value={massage}
                    onChange={e => setMassage(e.target.value)}
                />
                <button type="submit">Отправить</button>
            </div>
        </form>
    );
}

export default InputSendMassage;