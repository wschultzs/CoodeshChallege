import { useState } from "react";
import LoginAPIDataSourceImpl from "../../Data/DataSource/API/LoginAPIDataSource";
import { LoginRepositoryImpl } from "../../Data/Repository/LoginRepositoryImpl";
import { Auth } from "../../Domain/Model/Auth";
import { Login } from "../../Domain/UseCase/Login/Login";

export default function LoginViewModel() {
    const [login, setLogin] = useState<Auth>();

    const UseCase = new Login(
        new LoginRepositoryImpl(new LoginAPIDataSourceImpl())
    );

    async function loginUser(email: string, password: string) {
        setLogin(await UseCase.invoke(email, password));
    }

    return {
        loginUser,
        login,
    };
}
