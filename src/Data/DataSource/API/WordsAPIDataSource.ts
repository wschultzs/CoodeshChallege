import { Words } from "../../../Domain/Model/Words";
import WordsDataSource from "../WordsDataSource";

const BASE_URL = "https://63bd5a22ce8cd0789c953b30.mockapi.io/challenge/v1";

interface TypedResponse<T = any> extends Response {
    json<P = T>(): Promise<P>;
}

function myFetch<T>(...args: any): Promise<TypedResponse<T>> {
    return fetch.apply(window, args);
}

export default class WordsAPIDataSourceImpl implements WordsDataSource {
    async getWords(): Promise<Words[]> {
        let response = await myFetch<Words[]>(`${BASE_URL}/words`);

        let data = await response.json();

        return data.map((item) => ({
            id: item.id,
            word: item.word,
            phonetic: item.phonetic,
            audio: item.audio,
            meaning: item.meaning
        }));
    }
}