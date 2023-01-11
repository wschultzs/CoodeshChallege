import { Auth } from "../../Domain/Model/Auth";
import LoginDataSource from "../DataSource/LoginDataSource";

export class LoginRepositoryImpl implements LoginRepositoryImpl {
    dataSource: LoginDataSource;

    constructor(_datasource: LoginDataSource) {
        this.dataSource = _datasource;
    }

    async login(email: string, password: string): Promise<Auth> {
        return this.dataSource.login(email, password);
    }
}