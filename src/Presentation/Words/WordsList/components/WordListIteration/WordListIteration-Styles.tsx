import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        word: {
            border: "1px solid black",
            borderRadius: "15px",
            padding: "10px",
            cursor: "pointer",
        },
        favoriteIcon: {
            float: "right",
            cursor: "pointer",
        },
    })
);
