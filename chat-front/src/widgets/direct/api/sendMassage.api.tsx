import type {RequestMassage} from "../model/request-massage.tsx";
import axios from "axios";

async function sendMassageApi(dto: RequestMassage) {
    const response = await axios.post(`http://localhost:3000/direct-room/send-massage`, dto, {withCredentials: true})
    return response.data
}

export default sendMassageApi