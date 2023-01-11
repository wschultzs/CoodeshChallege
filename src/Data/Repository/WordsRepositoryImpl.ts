import { Words } from "../../Domain/Model/Words";
import { WordsRepository } from "../../Domain/Repository/WordsRepository";
import WordsDataSource from "../DataSource/WordsDataSource";

export class WordsRepositoryImpl implements WordsRepository {
    dataSource: WordsDataSource;

    constructor(_datasource: WordsDataSource) {
        this.dataSource = _datasource;
    }

    async getWords(): Promise<Words[]> {
        return this.dataSource.getWords();
    }
}