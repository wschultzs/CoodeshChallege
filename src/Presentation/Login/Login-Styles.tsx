import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: '100vh'
        },
        cardForm: {
            padding: "50px",
        },
        form: {
            padding: '15px'
        },
        formTitle: {
            borderBottom: '1px solid lightgray',
            marginBottom: '20px'
        },
        inputIcons: {
            float: 'left'
        },
        submitButton: {
            margin: '15px',
            padding: '20px'
        }
    })
);
