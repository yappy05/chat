import axios from "axios";

interface CreateDirectResponse {
  id: string;
  // добавь другие поля которые возвращает сервер
}

interface CreateDirectError {
  error: unknown;
}

export const createApi = async (
  hostId: string,
  friendId: string
): Promise<CreateDirectResponse | CreateDirectError> => {
  try {
    const requestData = { userIds: [hostId, friendId] };
    console.log(hostId, friendId)
    console.log("Отправляем запрос:", {
      url: "http://localhost:3000/direct-room",
      data: requestData,
      hostId,
      friendId,
    });

    const response = await axios.post(
      "http://localhost:3000/direct-room",
      requestData,
      { withCredentials: true }
    );

    console.log("Успешный ответ:", response.data);
    return response.data;
  } catch (error) {
    console.log("не удалось создать комнату", error);

    // Подробная информация об ошибке
    if (axios.isAxiosError(error)) {
      console.error("Детали ошибки:", {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        message: error.message,
      });
    }

    return { error };
  }
};

export default createApi;
