import { Words } from "../Model/Words";

export interface WordsRepository {
    getWords(): Promise<Words[]>;
}