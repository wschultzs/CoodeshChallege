import { useState } from "react";
import WordsAPIDataSourceImpl from "../../../Data/DataSource/API/WordsAPIDataSource";
import { WordsRepositoryImpl } from "../../../Data/Repository/WordsRepositoryImpl";
import { Words } from "../../../Domain/Model/Words";
import { GetWords } from "../../../Domain/UseCase/Words/GetWords";

export default function WordsListViewModel() {
    const [Words, setWords] = useState<Words[]>([]);

    const UseCase = new GetWords(
        new WordsRepositoryImpl(new WordsAPIDataSourceImpl())
    );

    async function getWords() {
        setWords(await UseCase.invoke());
    }

    return {
        getWords,
        Words,
    };
}
