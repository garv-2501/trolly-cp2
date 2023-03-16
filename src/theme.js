// This folder will have the theme colours for the website:

import { createTheme } from "@material-ui/core/styles";

const myTheme = createTheme({
    root: {
        display: "flex",
    },
    typography: {
        fontFamily: "Lato, Arial",
        fontSize: 12,
        h1: {
            fontFamily: "Lato, Arial",
            fontSize: 30,
            fontWeight: 700,
        },
        h2: {
            fontFamily: "Lato, Arial",
            fontSize: 20,
            fontWeight: 700,
            paddingBottom: 20,
        },
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "#250940",
            },
        },
    },
});

export default createTheme(myTheme);
