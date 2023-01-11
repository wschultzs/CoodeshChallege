import { useState } from 'react';
import useViewModel from "./LoginModel";
import {
    Grid,
    TextField,
    Button,
    Card,
    Typography,
    InputAdornment,
} from "@mui/material";
import { useStyles } from "./Login-Styles";
import { Login, Email, Key, CodeRounded } from "@mui/icons-material";

export default function LoginPage() {
    const { loginUser } = useViewModel();

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const classes = useStyles();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        loginUser(email, password);
    };

    return (
        <Grid container className={classes.container}>
            <Card sx={{ padding: "50px" }} className={classes.cardForm}>
                <CodeRounded fontSize="large" />
                <Typography className={classes.formTitle} variant="subtitle1">
                    Welcome to my Coodesh Challenge
                </Typography>
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    className={classes.form}
                >
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            label={"E-mail"}
                            variant="outlined"
                            required
                            type="email"
                            onChange={e => setEmail(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <br />
                    <Grid item xs={12}>
                        <TextField
                            id="password"
                            label={"Password"}                            
                            variant="outlined"
                            required
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Key />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item className={classes.submitButton} xs={12}>
                        <Button type="submit" variant="contained">
                            Login <Login fontSize="small" />
                        </Button>
                    </Grid>
                </form>
            </Card>
        </Grid>
    );
}
