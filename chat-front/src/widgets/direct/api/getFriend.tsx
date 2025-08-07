import type {DirectModel} from "../model/direct.model.tsx";
import findUserBySessionApi from "../../../entities/user/api/findUserBySession.api.tsx";
import findUserByIdApi from "./findUserById.api.tsx";
import type {UserModel} from "../../../entities/user/model/user.model.tsx";


async function getFriend(direct: DirectModel): Promise<UserModel> {
    const host = await findUserBySessionApi()
    const hostId = host.id;
    const userIds = direct.userIds
    const friendId = userIds.filter(id => id !== hostId)[0]
    const friend = await findUserByIdApi(friendId)
    return friend
}

export default getFriend;
