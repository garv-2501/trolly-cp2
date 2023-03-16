import React from "react";

// Imports from material-ui
import { CssBaseline, Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import customtheme from "./theme";

// Importing the App components from the components folder
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import PartyList from "./components/PartyList/PartyList";

const App = () => {
    return (
        <>
            <ThemeProvider theme={customtheme}>
                <CssBaseline />
                <Header />
                <Grid container spacing={0} style={{ width: "100%" }}>
                    <Grid item xs={12} md={4}>
                        <PartyList />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Map />
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    );
};

export default App;
