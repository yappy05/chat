import axios from "axios";

async function findUserByIdApi (id: string) {
    const response = await axios.get(`http://localhost:3000/users/by-id/${id}`)
    return response.data
}

export default findUserByIdApi