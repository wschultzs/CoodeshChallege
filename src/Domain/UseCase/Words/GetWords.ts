import { Words } from "../../Model/Words";
import { WordsRepository } from "../../Repository/WordsRepository";

export interface GetWordsUseCase {
    invoke: () => Promise<Words[]>

}

export class GetWords implements GetWordsUseCase {
    private WordsRepo: WordsRepository
    constructor(_WordsRepo: WordsRepository) {
        this.WordsRepo = _WordsRepo;
    }

    async invoke() {
        return this.WordsRepo.getWords()
    }
}