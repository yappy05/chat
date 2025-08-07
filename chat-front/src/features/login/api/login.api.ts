import axios from "axios";

interface loginDTO {
  email: string;
  password: string;
}

export const LoginApi = async ({ email, password }: loginDTO) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/login",
      { email, password },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.log("Не удолось авторизоваться ", error);
    return { error: error };
  }
};
