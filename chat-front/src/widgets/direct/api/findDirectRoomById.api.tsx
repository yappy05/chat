import axios from "axios";
import type {DirectModel} from "../model/direct.model.tsx";

const FindDirectRoomByIdApi = async (id: string): Promise<DirectModel> => {
    const response = await axios.get(`http://localhost:3000/direct-room/by-id/${id}`)
    return response.data as DirectModel
}

export default FindDirectRoomByIdApi