import { Auth } from "../Model/Auth";

export interface AuthRepository {
    login(email: string, password: string): Promise<Auth>;
}