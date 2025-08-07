import axios from "axios";
import type {UserModel} from "../model/user.model.tsx";

async function findUserBySessionApi(): Promise<UserModel> {
        const response = await axios.get("http://localhost:3000/users/by-session", {withCredentials: true});
        return response.data as UserModel;
}

export default findUserBySessionApi;
