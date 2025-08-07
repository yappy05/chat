import axios from "axios";

interface Request {
    name: string,
    email: string,
    password: string
}


export const register = async ({name, email, password}: Request) => {
    try {
        const response = await axios.post("http://localhost:3000/auth/register", {name, email, password}, {withCredentials: true})
        return response.data
    } catch (e) {
        console.log('не удалось зарегестрировать пользователя', e)
    }
}