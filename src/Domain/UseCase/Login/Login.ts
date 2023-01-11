import { Auth } from "../../Model/Auth";
import { AuthRepository } from "../../Repository/LoginRepository";

export interface LoginUseCase {
    invoke: (email: string, password: string) => Promise<Auth>
}

export class Login implements LoginUseCase {
    private LoginRepo: AuthRepository
    constructor(_WordsRepo: AuthRepository) {
        this.LoginRepo = _WordsRepo;
    }

    async invoke(email: string, password: string) {
        return this.LoginRepo.login(email, password)
    }
}