
import { Auth } from "../../Domain/Model/Auth";

export default interface LoginDataSource {
    login(email: string, password: string): Promise<Auth>;
}