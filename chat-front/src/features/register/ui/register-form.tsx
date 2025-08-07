import {useState} from "react";
import * as React from "react";
import {register} from "../api/register.api.tsx";
import {Link, useNavigate} from "react-router-dom";
import ButtonRegisterShape from "../../../shapes/button-register.shape.tsx";

export const RegisterForm = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const handelSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const response = await register({name, email, password})
        navigate(`/home/${response.id}`)
    }

    return (
        <form action="" onSubmit={handelSubmit} className={"flex flex-col gap-0.5"}>
            <input type="text" placeholder={"Введите имя"} onChange={e => setName(e.target.value)}/>
            <input type="text" placeholder={"Введите почту"} onChange={e => setEmail(e.target.value)}/>
            <input type="text" placeholder={"Введите пароль"} onChange={e => setPassword(e.target.value)}/>
            <ButtonRegisterShape/>
            <br/>
            <Link to={"/login"}>уже есть аккаунт?</Link>
        </form>
    )
}