import { Auth } from "../../../Domain/Model/Auth";
import LoginDataSource from "../LoginDataSource";

const BASE_URL = "https://63bd5a22ce8cd0789c953b30.mockapi.io/challenge/v1";

interface TypedResponse<T = any> extends Response {
    json<P = T>(): Promise<P>;
}

function myFetch<T>(body: any, ...args: any): Promise<TypedResponse<T>> {
    console.log(body)
    return fetch.apply(window, args);
}

export default class LoginAPIDataSourceImpl implements LoginDataSource {
    async login(email: string, password: string): Promise<Auth> {
        const body = { email, password };

        let response = await myFetch<Auth>(body, `${BASE_URL}/login`);

        let data = await response.json();
        
        return data
    }
}