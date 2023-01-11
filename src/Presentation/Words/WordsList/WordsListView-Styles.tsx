import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: 'center',
            minHeight: '100vh'
        }
    })
);
