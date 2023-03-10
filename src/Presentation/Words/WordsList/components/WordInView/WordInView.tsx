import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Words } from "../../../../../Domain/Model/Words";
import { useStyles } from "./WordInView-Styles";
import { InfoRounded } from "@mui/icons-material";

type Props = {
    word: Words;
};

export default function WordInView({ word }: Props) {
    const classes = useStyles();

    return (
        <>
            <Grid item className={classes.container} xs={12} sm={4}>
                <Card variant="elevation">
                    {word.audio ? (
                        <CardContent>
                            <div>
                                <Typography variant="h5" gutterBottom>
                                    {word.word}
                                </Typography>
                                <Typography
                                    color="text.secondary"
                                    component="div"
                                >
                                    {word.phonetic}
                                </Typography>
                            </div>
                            <Typography variant="body2">
                                {word.meaning}
                            </Typography>
                            <audio key={word?.audio} controls>
                                <source src={word?.audio} type="audio/mp3" />
                            </audio>
                        </CardContent>
                    ) : (
                        <>
                            <InfoRounded />
                            <Typography variant="h6">
                                Select a word to see it's meaning, phonetic and
                                pronuntiation!
                            </Typography>
                        </>
                    )}
                </Card>
            </Grid>
        </>
    );
}
