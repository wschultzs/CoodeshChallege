
import { Words } from "../../Domain/Model/Words";

export default interface WordsDataSource {
    getWords(): Promise<Words[]>;
}