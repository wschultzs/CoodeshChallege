import { Grid, Typography } from "@mui/material";
import { Words } from "../../../../../Domain/Model/Words";
import { useStyles } from "./WordListIteration-Styles";
import { StarBorder, Star } from "@mui/icons-material";

type Props = {
    words: Words[];
    setWordInView: (word: Words) => void;
    setAsFavorite: (word: Words) => void;
};

export default function WordsListIteration({
    words,
    setWordInView,
    setAsFavorite,
}: Props) {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={4}>
                {words?.map((word) => (
                    <Grid item xs={12} sm={4}>
                        <Typography
                            sx={{
                                border: "1px solid black",
                                borderRadius: "15px",
                                padding: "10px",
                                cursor: "pointer",
                            }}
                            onClick={() => setWordInView(word)}
                        >
                            {word.word}
                            <span className={classes.favoriteIcon}>
                                {word.isFavorite ? (
                                    <Star
                                        fontSize="small"
                                        color={"primary"}
                                        onClick={() => setAsFavorite(word)}
                                    />
                                ) : (
                                    <StarBorder
                                        fontSize="small"
                                        color={"primary"}
                                        onClick={() => setAsFavorite(word)}
                                    />
                                )}
                            </span>
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
