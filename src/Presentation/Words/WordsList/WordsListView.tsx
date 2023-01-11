import { useEffect, useState, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import useViewModel from "./WordsListViewModel";
import { Grid, Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Words } from "../../../Domain/Model/Words";
import WordsListIteration from "./components/WordListIteration/WordsListIteration";
import WordInView from "./components/WordInView/WordInView";
import { useStyles } from "./WordsListView-Styles";

export default function WordsListView() {
    const classes = useStyles();

    const { getWords, Words } = useViewModel();

    const [value, setValue] = useState("1");

    const [favoriteWords, setFavoriteWords] = useState<Words[]>([] as Words[]);

    const [wordInView, setWordInView] = useState<Words>({} as Words);

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("user")) getWords();
        else navigate("/");
    }, []);

    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const setAsFavorite = (word: Words) => {
        const alreadyFav = favoriteWords.some(
            (favorite: Words) => favorite.id === word.id
        );

        if (alreadyFav) removeFromFavorites(word);
        else {
            word.isFavorite = true;
            setFavoriteWords((prev) => [word, ...prev]);
        }
    };

    const removeFromFavorites = (word: Words) => {
        word.isFavorite = false;
        setFavoriteWords((prev) =>
            prev.filter((words: Words) => words.id !== word.id)
        );
    };

    return (
        <>
            <Grid container className={classes.container}>
                {wordInView && <WordInView word={wordInView} />}

                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ border: "1px solid black", borderRadius: "15px" }}
                >
                    <TabContext value={value}>
                        <Box>
                            <TabList
                                onChange={handleChange}
                                aria-label="Dictionary"
                            >
                                <Tab label="Word list" value="1" />
                                <Tab label="Favorites" value="2" />
                            </TabList>
                        </Box>

                        <TabPanel value="1">
                            <WordsListIteration
                                words={Words}
                                setAsFavorite={setAsFavorite}
                                setWordInView={setWordInView}
                            />
                        </TabPanel>

                        <TabPanel value="2">
                            <WordsListIteration
                                words={favoriteWords}
                                setAsFavorite={setAsFavorite}
                                setWordInView={setWordInView}
                            />
                        </TabPanel>
                    </TabContext>
                </Grid>
            </Grid>
        </>
    );
}
