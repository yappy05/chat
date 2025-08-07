import { useState } from "react";
import { LoginApi } from "../api/login.api.ts";
import * as React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await LoginApi({ email, password });

    if (response && !response.error) {
      navigate(`/home/${response.id}`);
      console.log(response);
    } else {
      const errorMessage =
        response?.error?.response?.data?.message ||
        "Ошибка входа! Проверьте email и пароль.";
      alert(errorMessage);
      console.log("не получилось войти", response?.error);
    }
  };

  return (
    <form action="" onSubmit={handelSubmit} className={"flex flex-col gap-3 "}>
      <input
        type="text"
        placeholder={"Введите почту"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder={"Введите пароль"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type={"submit"}>Войти</button>
    </form>
  );
}

export default LoginForm;
