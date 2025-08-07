import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import findDirectRoomByIdApi from "../api/findDirectRoomById.api.tsx";
import getFriend from "../api/getFriend.tsx";
import type { UserModel } from "../../../entities/user/model/user.model.tsx";

function FriendName() {
    const { id } = useParams();
    const [friend, setFriend] = useState<UserModel | null>(null);

    useEffect(() => {
        if (!id) return;
        (async () => {
            const direct = await findDirectRoomByIdApi(id);
            const friendUser = await getFriend(direct);
            setFriend(friendUser);
        })();
    }, [id]);

    if (!id) throw new Error('не нашли айди комнаты');
    if (!friend) return <div>Загрузка...</div>;

    return (
        <div>
            {friend.name}
        </div>
    );
}

export default FriendName;